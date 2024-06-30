import styled from "styled-components";
import { useState, useEffect } from "react";

function NewMovies() {
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
      .then((response) => {
        console.log(response);
        setMovieData(response.results);
      })
      .catch((err) => console.error(err));
  }, [autoKey]);

  return (
    <NewPage>
      <NewMoviesTitle>
        <h1>New Movies</h1>
      </NewMoviesTitle>
      <Movies>
        {movieData.map((card, index) => {
          return (
            <div className="NewMovies" key={index}>
              <div className="newMoviesImages">
                <img
                  className="images"
                  src={`https://image.tmdb.org/t/p/w500/` + card.poster_path}
                />
              </div>
            </div>
          );
        })}
      </Movies>
    </NewPage>
  );
}

const NewPage = styled.div`
  color: white;
  margin-left: 3vw;
  margin-right: 2vw;
`;

const NewMoviesTitle = styled.div`
  h1 {
    font-size: 25px;
  }
`;

const Movies = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  overflow-x: auto;

  .images {
    height: 300px;
    width: 200px;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

export default NewMovies;
