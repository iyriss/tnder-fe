import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import * as S from "./Home.styled";
import DislikeIcon from "../../components/icons/DislikeIcon";
import LikeIcon from "../../components/icons/LikeIcon";
import OccupationIcon from "../../components/icons/OccupationIcon";
import ArrowIcon from "../../components/icons/ArrowIcon";
import SpyIcon from "../../components/icons/SpyIcon";
import { useGazeProvider } from "../../providers/gazeCloud";
import { ProfileApi } from "../../apis/ProfileApi";

export const Home: React.FC = () => {
  const { user } = useAuth0();
  const profileApi = new ProfileApi();
  const [
    triggerCalibration,
    startTracking,
    stopTracking,
    { data, error, isProcessing },
  ] = useGazeProvider();

  const [profiles, setProfiles] = useState([{}]);

  useEffect(() => {
    console.log("user: ", user);
    //cant use async in useffect
    const getData = async () => {
      const profiles = await profileApi.getProfiles();
      setProfiles(profiles.data);
    };
    getData();
  }, [user]);

  useEffect(() => {
    console.log("is this formatted? ", data);
    /* 
      Should have calibrated before viewing this page

      On view start tracking. If more than 20 seconds stop to
      limit data

      When user presses yes or no we call stop tracking
      and send data to be
      
      Then will need to reset this.
    */
  }, [data]);

  useEffect(() => {
    console.log("error: ", error);
  }, [error]);

  useEffect(() => {
    console.log("isProcessing: ", isProcessing);
  }, [isProcessing]);

  useEffect(() => {
    // startTracking();
    // setTimeout(() => {
    //   stopTracking();
    // }, 20000);
  }, []);

  return (
    <S.DashboardPage>
      <S.Title>
        Welcome back USERNAME!{" "}
        {profiles.length < 2 ? (
          <span>You have 1 mission available today.</span>
        ) : (
          <span>
            Here are the {profiles.length} missions you can complete today.
          </span>
        )}
      </S.Title>
      <S.DashboardCards>
        <S.ProfileCard>
          <img
            src={
              "https://media.istockphoto.com/vectors/cartoon-ninja-illustration-vector-id831242374?k=20&m=831242374&s=170667a&w=0&h=gWV3OgPPUpPcick_BR1Ki76xzhjxTs4iVqjCxKQdSzo="
            }
            alt="agent"
          />
          <S.NameAgeStripe>
            {/* @ts-ignore */}
            <S.Title>{profiles[0].name + ", " + profiles[0].age}</S.Title>
            {/* i hate ts for small projects nick :) */}
          </S.NameAgeStripe>
        </S.ProfileCard>
        <S.IntelligenceCard>
          <S.Text fontSize={"30px"}>Intelligence report</S.Text>
          <S.IntelligenceInnerCard>
            <S.OccupationContainer>
              <OccupationIcon />
              <br />
              {/* @ts-ignore */}
              <S.Text fontSize={"16px"}>{profiles[0].job}</S.Text>
            </S.OccupationContainer>
            {/* @ts-ignore */}
            <S.Text fontSize={"16px"}>{profiles[0].description}</S.Text>
          </S.IntelligenceInnerCard>
        </S.IntelligenceCard>
        <S.ArrowContainer>
          <ArrowIcon />
        </S.ArrowContainer>
      </S.DashboardCards>
      <S.ActionButtonsContainer>
        <DislikeIcon />
        <LikeIcon />
      </S.ActionButtonsContainer>
      <S.MissionNumberContainer>
        <SpyIcon />
        <S.Text> x {profiles.length}</S.Text>
      </S.MissionNumberContainer>
    </S.DashboardPage>
  );
};

export default Home;
