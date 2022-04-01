import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import * as S from './Home.styled';
import DislikeIcon from '../../components/icons/DislikeIcon';
import LikeIcon from '../../components/icons/LikeIcon';
import OccupationIcon from '../../components/icons/OccupationIcon';
import SpyIcon from '../../components/icons/SpyIcon';
import ArrowIcon from '../../components/icons/ArrowIcon';
import { Calibration } from '../../components/callibration/';

export const Home: React.FC = () => {
  const { user } = useAuth0();

  useEffect(() => {
    console.log('user: ', user);
  }, [user]);

  return (
    <S.DashboardPage>
      <S.Title>
        Welcome back USERNAME! Here are the five missions you can complete
        today.
      </S.Title>
      <S.DashboardCards>
        <S.ProfileCard>
          <img
            src={
              'https://media.istockphoto.com/vectors/cartoon-ninja-illustration-vector-id831242374?k=20&m=831242374&s=170667a&w=0&h=gWV3OgPPUpPcick_BR1Ki76xzhjxTs4iVqjCxKQdSzo='
            }
            alt='agent'
          />
          <S.NameAgeStripe>
            <S.Title>Name, Age</S.Title>
          </S.NameAgeStripe>
        </S.ProfileCard>
        <S.IntelligenceCard>
          <S.Text fontSize={'30px'}>Intelligence report</S.Text>
          <S.IntelligenceInnerCard>
            <S.OccupationContainer>
              <OccupationIcon />
              <br />
              <S.Text fontSize={'16px'}>Occupation</S.Text>
            </S.OccupationContainer>
            <S.Text fontSize={'16px'}>Description</S.Text>
          </S.IntelligenceInnerCard>
        </S.IntelligenceCard>
        <S.ArrowContainer>
          <ArrowIcon />
        </S.ArrowContainer>
      </S.DashboardCards>
      <S.ActionButtonsContainer>
        <DislikeIcon />
        <LikeIcon />
        <Calibration />
      </S.ActionButtonsContainer>
      <S.MissionNumberContainer>
        <SpyIcon />
        <S.Text> x Number</S.Text>
      </S.MissionNumberContainer>
    </S.DashboardPage>
  );
};

export default Home;
