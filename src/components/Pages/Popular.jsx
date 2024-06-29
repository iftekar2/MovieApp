import styled from "styled-components";
import { useState, useEffect } from "react";

function Popular() {
  const [movieData, setMovieData] = useState([]);
  const autoKey = process.env.REACT_APP_AUTH_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + autoKey,
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
  }, [autoKey]);

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
