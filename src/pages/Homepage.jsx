import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import abstract_search from "./abstract_search.webp";

const Homepage = () => {
  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="headline-content">
        <h1 className="text-6xl md:text-8xl text-white font-thin">WELCOME!</h1>
      </div>
    ),
  };

  const foreground = {
    image: abstract_search,
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  };

  const gradientOverlay = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <div className="container-body">
      <ParallaxBanner
        layers={[gradientOverlay, foreground, headline]}
        className="full-height"
        style={{ height: "100vh" }} // Ensures the ParallaxBanner takes the full viewport height
      />
    </div>
  );
};

export default Homepage;
