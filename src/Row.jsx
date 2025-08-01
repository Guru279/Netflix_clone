import { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.table(request);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]); // ✅ include fetchUrl as dependency

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_poster">
        {/* several row posters */}
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.name || movie.title}
              className="row__poster"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
