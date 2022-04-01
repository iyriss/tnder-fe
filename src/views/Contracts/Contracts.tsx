import React from "react";
import styled from "styled-components";

const userProfiles = [
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    name: "Luis",
    age: 29,
    job: "MI6 @ British Intelligence ",
    bio: "Experienced infiltration operator. Count on me to get the job done. Quietly.",
  },
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    name: "Luis",
    age: 22,
    job: "MI6 @ British Intelligence ",
    bio: "Experienced infiltration operator. Count on me to get the job done. Quietly.",
  },
];

const Container = styled.div`
  color: white;
  display: flex;
  flex-flow: column wrap;
  height: 90vh;
  margin: 20px 60px;
`;

const ContractsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  height: 700px;
`;

const Contract = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  width: 30%;
  box-sizing: border-box;
  border: 5px solid #a692d1;

  .contract-img {
    width: 180px;
    height: 180px;
  }

  .contract-info {
    font-size: 16px;
    display: flex;
    flex-flow: column wrap;
    align-content: center;
  }

  .contract-basic-info {
    font-size: 24px;
    text-align: center;
  }

  .contract-heatmap {
    //height: 300px;
    background-color: grey;
  }

  .row {
    display: flex;
    flex-flow: row;
  }

  .item {
    padding: 20px;
    width: 100%;
    margin: 10px;
  }

  .sd-icon {
    position: relative;
    top: 13%;
    left: 40%;
  }
`;

const ContractsProfile = (props: any) => {
  return (
    <Contract>
      <div className="row">
        <div className="contract-info item">
          <img className="contract-img" src={props.user.avatar} />
          <div className="contract-basic-info">
            {props.user.name}, {props.user.age}
          </div>
        </div>

        <div className="item">
          <div>
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.69717 4.74915C1.65528 4.74915 0 6.40443 0 8.44632V20.3028C0 22.3447 1.65528 23.9999 3.69717 23.9999H21.9281C23.97 23.9999 25.6252 22.3447 25.6252 20.3028V8.44632C25.6252 6.40443 23.97 4.74915 21.9281 4.74915H3.69717ZM5.48203 7.35449C3.93301 7.35449 2.67728 8.61022 2.67728 10.1592V18.956C2.67728 20.505 3.93301 21.7607 5.48203 21.7607H20.3982C21.9472 21.7607 23.203 20.505 23.203 18.956V10.1592C23.203 8.61022 21.9472 7.35449 20.3982 7.35449H5.48203Z"
                  fill="white"
                />
                <path
                  d="M1.78488 9.8488C1.78488 9.8488 3.56972 11.6018 5.03583 12.3348C6.50193 13.0679 18.8046 13.036 20.7169 12.3348C22.6293 11.6336 23.7129 9.40259 23.7129 9.40259"
                  stroke="white"
                  stroke-width="2.16731"
                  stroke-linecap="round"
                />
                <path
                  d="M8.66925 5.45038C8.66925 5.45038 8.79674 3.47431 9.7529 2.64563C10.7091 1.81696 14.6612 1.75321 15.6174 2.64563C16.5736 3.53805 16.7648 5.45038 16.7648 5.45038"
                  stroke="white"
                  stroke-width="2.16731"
                  stroke-linecap="round"
                />
              </svg>
            </span>{" "}
            {props.user.job}
          </div>
          <br />
          <div>{props.user.bio}</div>
        </div>
      </div>

      <div className="row">
        <div className="item contract-heatmap">HEATMAP HERE</div>
      </div>

      <div className="sd-icon">
        <span>
          <svg
            width="95"
            height="95"
            viewBox="0 0 95 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="47.5" cy="47.5" r="47.5" fill="#76EEFD" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M46.3996 30.1892C46.7189 28.2064 47.3183 26.7656 48.12 25.8018C48.9495 24.8047 50.0541 24.2451 51.518 24.163L51.579 24.1596L51.6391 24.1491C52.8338 23.9413 53.9979 24.401 55.4237 25.1432C55.6137 25.2421 55.8104 25.3475 56.013 25.4562C57.2107 26.0983 58.6183 26.853 60.0957 27.0323C61.3976 27.1904 62.4066 27.0755 63.3225 26.649C64.1892 26.2455 64.8872 25.5945 65.5955 24.9305L64.1596 23.3988C63.4074 24.104 62.9473 24.5078 62.4363 24.7458C61.9745 24.9608 61.386 25.0741 60.3487 24.9482C59.2962 24.8204 58.2914 24.2867 57.0718 23.6389L57.0716 23.6388C56.8528 23.5226 56.6272 23.4028 56.3931 23.2809C54.9819 22.5464 53.2702 21.7575 51.3408 22.0704C49.3604 22.1954 47.7199 22.9999 46.5059 24.4592C45.3289 25.8741 44.6139 27.8296 44.2761 30.1892H40.9619C39.4999 30.1892 38.3148 31.3743 38.3148 32.8363V37.5829C38.3148 37.5829 42.5878 36.4021 45.389 36.3963C48.2255 36.3904 52.5546 37.5829 52.5546 37.5829V32.8363C52.5546 31.3743 51.3694 30.1892 49.9074 30.1892H46.3996ZM45.4347 73C55.0636 73 62.8694 65.1942 62.8694 55.5653C62.8694 45.9364 55.0636 38.1306 45.4347 38.1306C35.8058 38.1306 28 45.9364 28 55.5653C28 65.1942 35.8058 73 45.4347 73ZM38.3148 60.7927L43.5196 55.5672L38.3148 50.3623L40.1866 48.4905L45.3878 53.6917L50.6133 48.4454L52.4888 50.3135L47.2596 55.5635L52.5095 60.8134L50.6377 62.6852L45.3915 57.439L40.1903 62.6608L38.3148 60.7927Z"
              fill="white"
            />
            <line
              x1="61.4743"
              y1="16.8419"
              x2="62.4743"
              y2="19.8419"
              stroke="white"
            />
            <line
              x1="69.0706"
              y1="18.2598"
              x2="67.4272"
              y2="20.9615"
              stroke="white"
            />
            <line
              x1="72.8531"
              y1="25.4526"
              x2="69.8455"
              y2="24.4755"
              stroke="white"
            />
          </svg>
        </span>
      </div>
    </Contract>
  );
};

export const Contracts: React.FC = () => {
  return (
    <Container>
      <h2>Contracts</h2>
      <br />
      <ContractsContainer>
        {userProfiles.map(function (user, i) {
          return <ContractsProfile user={user} key={i} />;
        })}
      </ContractsContainer>
    </Container>
  );
};

export default Contracts;
