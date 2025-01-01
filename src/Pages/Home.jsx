import React, { useEffect, useState } from "react";
import axios from "../Components/Axios";
import { Api_Key, imageURl } from "../Constents/Constents";
import { Link } from "react-router-dom";

function Home() {
  const [movie, setMovie] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current movie
  const [fade, setFade] = useState(false); // Handle fade effect

  useEffect(() => {
    axios
      .get(`discover/movie?api_key=${Api_Key}&with_genres=80&language=en-US`)
      .then((response) => {
        setMovie(response.data.results); // Store movie results array
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (movie && movie.length > 0) {
      const interval = setInterval(() => {
        setFade(true); // Start fade-out
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % movie.length); // Update movie
          setFade(false); // Start fade-in
        }, 500); // Duration for fade-out
      }, 10000); // Change every 10 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [movie]);

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat text-white relative transition-opacity duration-1000 ${
        fade ? "opacity-80" : "opacity-100"
      }`}
      style={{
        backgroundImage: `url(${
          movie && movie[currentIndex]
            ? imageURl + movie[currentIndex].backdrop_path
            : ""
        })`,
      }}
    >
      
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div> */}

      {/* Content */}
      <div className="relative text-center z-10 max-w-3xl px-6">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-wide  bg-clip-text text-[#363da0e1] mb-8 drop-shadow-2xl">
          ƑìӀʍᎠҽçҟ
        </h1>
        <h3 className="text-base sm:text-lg md:text-xl font-medium text-white mb-10 leading-relaxed">
          Dive into a world of entertainment with our curated selection of movies and shows. 
          <br />
          Discover new favorites and indulge in captivating stories!
        </h3>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/Home2"
            className="px-8 py-3 text-lg sm:text-xl font-bold rounded-full bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-600 hover:to-red-800 transform hover:scale-110 transition-all duration-300 shadow-2xl"
          >
            Discover More
          </Link>
          <Link
            to="/Login"
            className="px-8 py-3 text-lg sm:text-xl font-bold rounded-full bg-gray-800 hover:bg-gray-700 transform hover:scale-110 transition-all duration-300 shadow-2xl"
          >
            Sign Up / Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
