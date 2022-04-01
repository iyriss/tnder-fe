import OccupationIcon from "../../components/icons/OccupationIcon";
import * as S from "./Contracts.styled";
import { Heatmap } from "../../components/heatmap";
import { useEffect, useState } from "react";
import { HeatmapApi } from "../../apis/HeatmapApi";

export const ContractProfile = (profile: any) => {
  const [heatmap, setHeatmap] = useState<any>(null);
  const heatmapApi = new HeatmapApi();

  useEffect(() => {
    const getHeatmaps = async () => {
      const heatmaps = await heatmapApi.getMatchHeatmap();
      setHeatmap(() => heatmaps.data[0]);
      console.log("heatmaps: ", heatmaps);
    };
    console.log("insde here");
    getHeatmaps();
  }, []);
  return (
    <S.DashboardCards>
      <S.IntelligenceCard>
        <S.Text fontSize={"30px"}>{profile.name}</S.Text>
        <S.IntelligenceInnerCard>
          <img
            src={
              "https://media.istockphoto.com/vectors/cartoon-ninja-illustration-vector-id831242374?k=20&m=831242374&s=170667a&w=0&h=gWV3OgPPUpPcick_BR1Ki76xzhjxTs4iVqjCxKQdSzo="
            }
            alt="agent"
          />
          <S.OccupationContainer>
            <OccupationIcon />
            <br />
            <br />
            {/* @ts-ignore */}
            <S.Text fontSize={"16px"}>{profile.job}</S.Text>
          </S.OccupationContainer>
          {/* @ts-ignore */}
          <S.Text fontSize={"16px"}>{profile.bio}</S.Text>
        </S.IntelligenceInnerCard>
      </S.IntelligenceCard>
      <S.ProfileCard>
        <Heatmap formattedData={heatmap} />
        <img
          src={
            "https://media.istockphoto.com/vectors/cartoon-ninja-illustration-vector-id831242374?k=20&m=831242374&s=170667a&w=0&h=gWV3OgPPUpPcick_BR1Ki76xzhjxTs4iVqjCxKQdSzo="
          }
          alt="agent"
        />
      </S.ProfileCard>
    </S.DashboardCards>
  );
};
