import OccupationIcon from "../../components/icons/OccupationIcon";
import * as S from "./Contracts.styled";
import { Heatmap } from "../../components/heatmap";
import { useEffect, useState } from "react";
import { HeatmapApi } from "../../apis/HeatmapApi";

export const ContractProfile = (profile: any) => {
  const [heatmap, setHeatmap] = useState<any>(null);
  const heatmapApi = new HeatmapApi();

  useEffect(() => {
    console.log("inside here");
    const getHeatmaps = async () => {
      const heatmaps = await heatmapApi.getMatchHeatmap();
      setHeatmap(() => heatmaps.data[1]);
    };
    getHeatmaps();
  }, []);

  return (
    <S.DashboardCards>
      <S.IntelligenceCard>
        <S.Text fontSize={"30px"}>{profile.name}</S.Text>
        <S.IntelligenceInnerCard>
          {heatmap && <img src={profile.avatar} alt="agent" />}

          <S.OccupationContainer>
            <OccupationIcon />
            <br />
            <br />
            {/* @ts-ignore */}
            <S.Text fontSize={"16px"}>{profile.job}</S.Text>
          </S.OccupationContainer>
          {/* @ts-ignore */}
          <S.Text fontSize={"16px"}>{profile.description}</S.Text>
          <br />
          <br />
          <br />
          <S.Text fontSize={"16px"} style={{ color: "#a692d1" }}>
            Meeting Coordinates
            <br />
            (41.40338, 2.17403)
          </S.Text>
        </S.IntelligenceInnerCard>
      </S.IntelligenceCard>
      <S.ProfileCard>
        <Heatmap formattedData={heatmap ? heatmap?.heatmap : null} />
        {heatmap && (
          <img
            src={"https://i.ibb.co/sbq0VCf/mike-von-Bhcutpoh-Ywg-unsplash.jpg"}
            alt="agent"
          />
        )}
        <div
          style={{
            position: "absolute",
            bottom: "-20px",
          }}
        >
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
        </div>
      </S.ProfileCard>
    </S.DashboardCards>
  );
};
