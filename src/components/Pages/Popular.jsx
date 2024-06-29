import styled from "styled-components";
import { useState, useEffect } from "react";

function Popular() {
  const [movieData, setMovieData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzhkYjUyOTkzNGRhM2Y1YTc5OGY0YjFmODgzMWI1OCIsIm5iZiI6MTcxOTYyNDQ1OS42OTIzMTUsInN1YiI6IjY0MTIwMzI3ZWRlMWIwMjg1YjY2NDQ4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxGPeg3EcYtUWFJhtm1ar8GrwUOt7v0B4cfIhdzmcTk",
    },
  };
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovieData(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <PopularPage>
      <PopularComponents>
        <PopularTitle>
          <h1>Most Popular</h1>
        </PopularTitle>

        <PopularMovies>
          {movieData.map((card, index) => {
            return (
              <div key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/` + card.poster_path}
                />
              </div>
            );
          })}
        </PopularMovies>
      </PopularComponents>
    </PopularPage>
  );
}

const PopularPage = styled.div`
  color: white;
  margin-left: 5vw;
  margin-right: 5vw;
`;

const PopularComponents = styled.div``;

const PopularTitle = styled.div`
  h1 {
    font-size: 25px;
  }
`;

const PopularMovies = styled.div``;

export default Popular;
