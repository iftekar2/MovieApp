import styled from "styled-components";

function Popular() {
  return (
    <PopularPage>
      <PopularComponents>
        <PopularTitle>
          <h1>Most Popular</h1>
        </PopularTitle>
      </PopularComponents>
    </PopularPage>
  );
}

const PopularPage = styled.div`
  color: white;
`;

const PopularComponents = styled.div``;

const PopularTitle = styled.div`
  h1 {
    font-size: 25px;
  }
`;

export default Popular;
