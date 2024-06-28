import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

function HeroPage() {
  return (
    <HomePage>
      <HomePageDetails>
        <Title>
          <h1>The Gray Man</h1>
        </Title>
        <TitleInfo>
          <span>2022</span>
          <span className="info-spacer">|</span>
          <span>PG-13</span>
          <span className="info-spacer">|</span>
          <span>2h 9m</span>
          <span className="info-spacer">|</span>
          <span>Action</span>
        </TitleInfo>
        <TitleDescription>
          <div className="title-info">
            <div className="title-info-synopsis">
              When a shadowy CIA agent uncovers damning agency secrets, he’s
              hunted across the globe by a sociopathic rogue operative who’s put
              a bounty on his head.
            </div>
          </div>
          <div className="title-info">
            <div className="title-info-talent">
              <span className="title-data-info-item-label">Starring: </span>
              <span className="title-data-info-item-list">
                Ryan Gosling, Chris Evans, Ana de Armas
              </span>
            </div>
          </div>
        </TitleDescription>
        <PlayButtons>
          <div className="playButton">
            <button>
              <FaPlay className="playButtonIcon" /> Play
            </button>
          </div>
          <div className="moreInfoButton">
            <button>
              <IoMdInformationCircleOutline className="moreInfoIcon" /> More
              Info
            </button>
          </div>
        </PlayButtons>
      </HomePageDetails>
    </HomePage>
  );
}

const HomePage = styled.div`
  background-image: url("https://occ-0-444-616.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbPXSGkNDo3cQ2rBKviUt71o_aPhcLPIcfsm8c8d2E2xEiu8qcLlAkPdMGyf6qqVK7kunauLQe9n1saLPSD6fjq-YYtIuKNcMbtO.jpg?r=d7f");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 740px;
  display: flex;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  position: relative;
`;

const HomePageDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media only screen and (max-width: 430px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: flex-start;
    position: fixed;
    bottom: 150px;
    margin: auto;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    font-size: 30px;
    font-weight: 500;
    line-height: 34px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const TitleInfo = styled.div`
  color: #a3a3a3;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  margin-top: 16px;

  .info-spacer {
    margin: 0 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TitleDescription = styled.div`
  width: 95%;
  color: white;
  padding-top: 16px;

  .title-info-synopsis {
    margin: 0;
    font-size: 16px;
    line-height: 22px;
    width: 500px;
  }

  .title-info-talent {
    padding-top: 16px;
    font-size: 16px;
  }

  @media only screen and (max-width: 430px) {
    .title-info {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .title-info-synopsis {
      width: 300px;
      text-align: center;
    }

    .title-info-talent {
      width: 300px;
      text-align: center;
    }
  }

  .title-data-info-item-label {
    color: #a3a3a3;
  }
`;

const PlayButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 20px;

  .playButton {
    button {
      height: 40px;
      width: 90px;
      font-size: 18px;
      font-weight: 500;
      border-radius: 5px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      .playButtonIcon {
        font-size: 14px;
      }
    }

    button:hover {
      background: #cfcfcf;
    }
  }

  .moreInfoButton {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 7px;
      height: 40px;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      width: 130px;
      background-color: rgba(255, 255, 255, 0.6);
      opacity: 1;
      color: black;
      cursor: pointer;
    }

    button:hover {
      background-color: rgba(255, 255, 255, 0.5);
      opacity: 0.7;
      color: black;
    }
  }
`;

export default HeroPage;
