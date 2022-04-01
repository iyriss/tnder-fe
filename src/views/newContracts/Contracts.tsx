import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import * as S from "./Contracts.styled";
import DislikeIcon from "../../components/icons/DislikeIcon";
import LikeIcon from "../../components/icons/LikeIcon";
import SpyIcon from "../../components/icons/SpyIcon";
import { useGazeProvider } from "../../providers/gazeCloud";
import { ContractProfile } from "./ContractsProfile";
import format_data, { BubbleData } from "../../utils/FormatData";
import { ProfileApi } from "../../apis/ProfileApi";
import "./ContractsProfile.css";
import { HeatmapApi } from "../../apis/HeatmapApi";
import { testData } from "../../assets/testData";
import styled from "styled-components";

export const Contracts: React.FC = () => {
  const [formattedData, setFormattedData] = useState<Array<BubbleData>>([]);
  const { user } = useAuth0();

  const [profiles, setProfiles] = useState([
    {
      avatar:
        "https://res.cloudinary.com/dmqw05q9j/image/upload/v1648847379/sobhan-joodi-r9hi9oMlVvc-unsplash_ftzorh.jpg",
      name: "Luis",
      age: 29,
      job: "MI6 @ British Intelligence ",
      description: `Experienced infiltration operator. Count on me to get the job done. Quietly. Sometimes I like to skydive.Just to land straight to your heart.
      I’m joking I would only parachute through an open hatch of a building to catch someone, or something.`,
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [missionsCleared, setMissionsCleared] = useState(false);

  const next = () => {
    if (animating) return;
    if (activeIndex === profiles.length - 1) {
      setMissionsCleared(true);
      return;
    }
    const nextIndex = activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    if (activeIndex === 0) {
      return;
    }
    const nextIndex = activeIndex === 0 ? profiles.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  if (missionsCleared) {
    return null; // add misisons completed view
  }

  return (
    <S.DashboardPage>
      <div style={{ width: "100vw" }}>
        <h1 style={{ color: "white", paddingLeft: "60px" }}>Contracts</h1>
        <h3 style={{ color: "white", paddingLeft: "60px" }}>
          Will you hire or fire ----
        </h3>

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
          {profiles.map((profile: any, index) => {
            return (
              <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
              >
                <Border>{ContractProfile(profile)}</Border>
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
      </div>
    </S.DashboardPage>
  );
};

const Border = styled.div`
  border: 5px solid #a692d1;
  border-radius: 10px;
  width: 80%;
  margin-left: 200px;
  padding: 10px;
`;

export default Contracts;
