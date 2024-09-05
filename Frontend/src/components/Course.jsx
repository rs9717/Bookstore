import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course({ searchQuery }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBooks(res?.data);
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
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We exactly want you right{" "}
            <span className="text-green-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            From the futuristic realms of science fiction where stars are just a
            page away, to the magical landscapes of fantasy that transform
            reality into wonder, each genre offers its own escape. Mysteries
            unravel with each clue, thrillers deliver pulse-pounding excitement,
            and horror delves into our deepest fears. Romance paints love in its
            myriad shades, while historical fiction resurrects bygone eras.
            Non-fiction enlightens with real-world truths, biographies bring
            extraordinary lives into focus, poetry distills raw emotions into
            art, and young adult fiction captures the bittersweet essence of
            growing up. Each genre is a gateway to a different universe of
            imagination.
          </p>

          {/* Conditional rendering for no books found */}
          {filteredBooks.length === 0 ? (
            <div className="mt-12 p-4 bg-red-100 text-red-700 rounded-md h-72 flex items-center justify-center">
              <h2 className="text-3xl">No books found for the search query.</h2>
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
              {filteredBooks.map((item) => (
                <Cards key={item.id} item={item} />
              ))}
            </div>
          )}

          <Link to="/">
            <button className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-red-700 duration-300 mb-6">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Course;
