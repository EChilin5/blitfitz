import React from "react";
import Gallery from "../components/homePageComponents/GallerySection";
import About from "../components/homePageComponents/AboutSection";
import ResourcesSection from "../components/homePageComponents/ResourcesSection";

const HomePage = () => {
  return (
    <div>
      <Gallery />
      <About />
      <ResourcesSection />
    </div>
  );
};

export default HomePage;
