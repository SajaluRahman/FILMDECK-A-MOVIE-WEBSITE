import React, { useEffect, useState } from 'react';
import axios from '../Components/Axios';
import { imageURl, Api_Key } from '../Constents/Constents';
import YouTube from 'react-youtube';
import { useInView } from 'react-intersection-observer';

function Rowpost(Props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false); // State to track animation

  useEffect(() => {
    axios
      .get(Props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert('Error fetching movies');
      });
  }, [Props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${Api_Key}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        }
      });
  };

  const handleCloseVideo = () => {
    setUrlId(''); // Hide the YouTube video
  };

  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  // Trigger animation only once when `inView` becomes true
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div className="ml-5 text-white mt-8">
      <h2 className="text-4xl font-semibold mb-4">{Props.title}</h2>
      <div className="posters flex p-5 overflow-x-scroll space-x-4">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            key={obj.id}
            style={{ maxHeight: `${Props.height}px` }}
            className="cursor-pointer rounded-lg transform hover:scale-110 transition-transform duration-300"
            src={`${imageURl + obj.poster_path}`}
          />
        ))}
      </div>
      {urlId && (
        <div
          ref={ref}
          className={`relative transform duration-1000 ease-in-out transition-all delay-300 overflow-hidden ${
            hasAnimated
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-96'
          }`}
        >
          <YouTube opts={opts} videoId={urlId.key} />
          {/* Close Button */}
          <button
            onClick={handleCloseVideo}
            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition-all"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default Rowpost;
