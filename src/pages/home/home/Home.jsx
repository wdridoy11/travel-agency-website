import React from "react";
import Hero from "../hero/Hero";
import About from "../../about/About";
import Places from "../../place/Places";
import Gallery from "../gallery/Gallery";
import Blogs from "../../blogs/Blogs";

const Home = () => {
  return (
    <div>
      <div>
        <Hero></Hero>
        <About></About>
        <h3 className="text-3xl font-semibold text-center">Our Travel Place</h3>
        <Places></Places>
        {/* <Gallery></Gallery> */}
        <Blogs></Blogs>
      </div>
    </div>
  );
};

export default Home;
