import React, { useState, useEffect } from "react";
import axios from "../Components/Axios";
import { Api_Key, imageURl } from "../Constents/Constents";

function Banner() {
  // State to track the current movie
  const [movie, setMovie] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current movie
  const [fade, setFade] = useState(false); // State to handle fade effect

  // Fetch trending movies
  useEffect(() => {
    axios
      .get(`discover/movie?api_key=${Api_Key}&with_genres=80&language=en-US`)
      .then((response) => {
        console.log(response.data.results)
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
      className={` h-[651px] md:bg- bg-cover bg-center lg:bg-left-top text-white transition-opacity duration-1000 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundImage: `url(${
          movie && movie[currentIndex] ? imageURl + movie[currentIndex].backdrop_path : ""
        })`,
      }}
    >
      <div className="pt-[140px] h-[190px] pl-6 mt-8 ">
        <h1
          className={`text-[4rem] font-[800] text-red-900 pb-[0.3rem] transition-all duration-1000 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {movie && movie[currentIndex] ? movie[currentIndex].title : "Loading..."}
        </h1>
        <div>
          <button className="text-white outline-none border-none font-[700] rounded-[5px] pl-[2rem] pr-[2rem] pt-[0.5rem] pb-[0.5rem] bg-[rgba(51,51,51,0.5)] hover:text-black hover:bg-[#e6e6e6] ml-8">
            Play
          </button>
          <button className="text-white outline-none border-none font-[700] rounded-[5px] pl-[2rem] pr-[2rem] pt-[0.5rem] pb-[0.5rem] bg-[rgba(51,51,51,0.5)] hover:text-black hover:bg-[#e6e6e6] ml-8">
            My list
          </button>
        </div>

        <h1
          className={` leading-[1.3] pt-[1rem] md:text-2xl h-[80px] max-w-[660px] transition-all duration-1000 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {movie && movie[currentIndex] ? movie[currentIndex].overview : "Loading..."}
        </h1>

        {/* Vignette Effect Section */}
       
      </div>
       <div
          className="h-[29.3rem] w-full "
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61),#131c20)",
           
          }}
        ></div>
    </div>
  );
}

export default Banner;
