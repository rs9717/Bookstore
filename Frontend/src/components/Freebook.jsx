import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook({ searchQuery }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "free");
        setBooks(data);
      } catch (error) {
        setError("Failed to load books. Please try again later.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  const filteredBooks = searchQuery
    ? books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : books;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <p className="text-center text-yellow-300">Loading books...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-yellow-300 pb-2">
          Free Offered Books
        </h1>
        <p>
          Expand your horizons with our exclusive range of books designed to
          enhance your reading, writing, and literary analysis skills.
        </p>
      </div>

      <div>
        {filteredBooks.length > 0 ? (
          <Slider {...settings}>
            {filteredBooks.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        ) : (
          <div className="mt-12 p-4 bg-red-100 text-red-700 rounded-md h-72 flex items-center justify-center mb-10">
            <h2 className="text-3xl">No books found for the search query.</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Freebook;
