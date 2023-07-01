import React from "react";
import Hero from "./Hero";
import About from "./About";
import Places from "../Place/Places";
import Testimonial from "./Testimonial";
import Gallery from "./gallery/Gallery";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <About />
        <h3 className="text-3xl font-semibold text-center">Our Travel Place</h3>
        <Places />
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
