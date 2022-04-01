import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import styled from "styled-components";
import { ContractProfile } from "./ContractsProfile";

const Child = (profiles: any) => {
  console.log("profiles: ", profiles);
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [missionsCleared, setMissionsCleared] = useState(false);

  return (
    profiles.profiles && (
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
        {profiles.profiles.map((profile: any, index: number) => {
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
    )
  );
};

const Border = styled.div`
  border: 5px solid #a692d1;
  border-radius: 10px;
  width: 80%;
  margin-left: 200px;
  padding: 10px;
`;

export default Child;
