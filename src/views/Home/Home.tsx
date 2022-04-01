import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

import * as S from './Home.styled';
import DislikeIcon from '../../components/icons/DislikeIcon';
import LikeIcon from '../../components/icons/LikeIcon';
import SpyIcon from '../../components/icons/SpyIcon';
import { useGazeProvider } from '../../providers/gazeCloud';
import { MissionProfile } from './MissionProfiles';
import { MissionsCompleted } from './MissionsCompleted/MissionsCompleted';
import format_data, { BubbleData } from '../../utils/FormatData';
import { ProfileApi } from '../../apis/ProfileApi';
import './MissionProfiles.css';

export const Home: React.FC = () => {
  const [formattedData, setFormattedData] = useState<Array<BubbleData>>([]);
  const { user } = useAuth0();
  const profileApi = new ProfileApi();
  const [
    triggerCalibration,
    startTracking,
    stopTracking,
    { data, error, isProcessing },
  ] = useGazeProvider();

  const [profiles, setProfiles] = useState([
    {
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
      name: 'Luis',
      age: 29,
      job: 'MI6 @ British Intelligence ',
      bio: 'Experienced infiltration operator. Count on me to get the job done. Quietly.',
    },
    {
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
      name: 'Luis',
      age: 22,
      job: 'MI6 @ British Intelligence ',
      bio: 'Experienced infiltration operator. Count on me to get the job done. Quietly.',
    },
  ]);

  useEffect(() => {
    console.log('user: ', user);
    //cant use async in useffect
    const getData = async () => {
      const profiles = await profileApi.getProfiles(user?.email);
      setProfiles(profiles.data);
    };
    getData();
  }, [user]);

  useEffect(() => {
    /* 
      Should have calibrated before viewing this page

      On view start tracking. If more than 20 seconds stop to
      limit data

      When user presses yes or no we call stop tracking
      and send data to be
      
      Then will need to reset this.
    */
    // if (data) {
    //   console.log("data: ", data);
    //   setFormattedData(() => format_data(data));
    // }
  }, [data]);

  useEffect(() => {
    console.log('error: ', error);
  }, [error]);

  useEffect(() => {
    console.log('isProcessing: ', isProcessing);
  }, [isProcessing]);

  useEffect(() => {
    // startTracking();
    // setTimeout(() => {
    //   stopTracking();
    // }, 20000);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [missionsCleared, setMissionsCleared] = useState(false);

  const next = () => {
    if (animating) return;
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
    return <MissionsCompleted />;
  }
  return (
    <S.DashboardPage>
      <S.Title>
        Welcome back USERNAME!{' '}
        {profiles.length < 2 ? (
          <span>You have 1 mission available today.</span>
        ) : (
          <span>
            Here are the {profiles.length} missions you can complete today.
          </span>
        )}
      </S.Title>
      <div style={{ width: '100vw' }}>
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
                {MissionProfile(profile)}
                {activeIndex !== 0 ? (
                  <CarouselControl
                    direction='prev'
                    directionText='Previous'
                    onClickHandler={previous}
                  />
                ) : null}
                <CarouselControl
                  direction='next'
                  directionText='Next'
                  onClickHandler={next}
                />
              </CarouselItem>
            );
          })}
        </Carousel>
        <S.ActionButtonsContainer>
          <DislikeIcon />
          <LikeIcon />
        </S.ActionButtonsContainer>
        <S.MissionNumberContainer>
          <SpyIcon />
          <S.Text> x {activeIndex + 1}</S.Text>
        </S.MissionNumberContainer>
      </div>
    </S.DashboardPage>
  );
};

export default Home;
