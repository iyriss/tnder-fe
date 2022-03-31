import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import * as S from './Home.styled';

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
        </S.ProfileCard>
        <S.IntelligenceCard />
      </S.DashboardCards>
    </S.DashboardPage>
  );
};

export default Home;
