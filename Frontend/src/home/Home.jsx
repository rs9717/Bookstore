import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <Banner />
      <Freebook searchQuery={searchQuery} />
      <Footer />
    </>
  );
}

export default Home;
