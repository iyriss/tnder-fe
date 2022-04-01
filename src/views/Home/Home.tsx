import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

import * as S from "./Home.styled";
import DislikeIcon from "../../components/icons/DislikeIcon";
import LikeIcon from "../../components/icons/LikeIcon";
import SpyIcon from "../../components/icons/SpyIcon";
import { useGazeProvider } from "../../providers/gazeCloud";
import { MissionProfile } from "./MissionProfiles";
import { MissionsCompleted } from "./MissionsCompleted/MissionsCompleted";
import format_data, { BubbleData } from "../../utils/FormatData";
import { ProfileApi } from "../../apis/ProfileApi";
import "./MissionProfiles.css";
import { HeatmapApi } from "../../apis/HeatmapApi";
import { testData, createHeatMap } from "../../assets/testData";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [formattedData, setFormattedData] = useState<Array<BubbleData>>([]);
  const { user } = useAuth0();
  const profileApi = new ProfileApi();
  const [
    triggerCalibration,
    startTracking,
    stopTracking,
    { data, error, isProcessing },
  ] = useGazeProvider();

  const [profiles, setProfiles] = useState<any>([{}]);

  // useEffect(() => {
  //   console.log("firing");
  //   createHeatMap();
  // }, []);

  useEffect(() => {
    if (user) {
      const getData = async () => {
        const profiles = await profileApi.getProfiles(user?.email);
        setProfiles(profiles.data);
      };
      getData();
    }
  }, [user]);

  useEffect(() => {
    console.log("error: ", error);
  }, [error]);

  useEffect(() => {
    console.log("isProcessing: ", isProcessing);
  }, [isProcessing]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [missionsCleared, setMissionsCleared] = useState(false);

  const next = () => {
    if (animating) return;
    stopTracking("anonymous");
    if (activeIndex === profiles.length - 1) {
      //TODO: check if user liked or not the profile before next
      setMissionsCleared(true);
      return;
    }
    const nextIndex = activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    stopTracking("anonymous");
    if (activeIndex === 0) {
      return;
    }
    const nextIndex = activeIndex === 0 ? profiles.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    stopTracking("anonymous");
    setActiveIndex(newIndex);
  };

  if (missionsCleared) {
    stopTracking(profiles[activeIndex].email);
    return <MissionsCompleted />;
  }

  const handleLike = () => {
    stopTracking(profiles[activeIndex].email);
    profileApi.likeUser({
      user: user?.email,
      //@ts-ignore
      likedUser: profiles[activeIndex].user,
    });
    console.log("liked");
    navigate("/contracts");
  };
  const handleDislike = async () => {
    profileApi.dislikeUser({
      user: user?.email,
      //@ts-ignore
      dislikedUser: profiles[activeIndex].user,
    });
    const dislikeProfiles = await profileApi.getProfiles(user?.email);
    setProfiles(dislikeProfiles.data);
    console.log("disliked");
  };

  return (
    <S.DashboardPage>
      <S.Title>
        Welcome back {user?.given_name}!{" "}
        {profiles.length < 2 ? (
          <span>You have 1 mission available today.</span>
        ) : (
          <span>
            Here are the {profiles.length} missions you can complete today.
          </span>
        )}
      </S.Title>
      <div style={{ width: "100vw" }}>
        <Carousel
          interval={false}
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators
            items={profiles}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {profiles.map((profile: any, index: number) => {
            return (
              <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
              >
                {MissionProfile(profile)}
                {activeIndex !== 0 ? (
                  <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                  />
                ) : null}
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </CarouselItem>
            );
          })}
        </Carousel>
        <S.ActionButtonsContainer>
          <DislikeIcon onClick={handleDislike} />
          <LikeIcon onClick={handleLike} />
        </S.ActionButtonsContainer>
        <S.MissionNumberContainer>
          <SpyIcon />
          <S.Text> x {profiles.length}</S.Text>
        </S.MissionNumberContainer>
      </div>
    </S.DashboardPage>
  );
};

export default Home;
