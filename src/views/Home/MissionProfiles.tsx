import OccupationIcon from '../../components/icons/OccupationIcon';
import * as S from './Home.styled';

export const MissionProfile = (profile: any) => {
  return (
    <S.DashboardCards>
      <S.ProfileCard>
        <img
          src={
            'https://media.istockphoto.com/vectors/cartoon-ninja-illustration-vector-id831242374?k=20&m=831242374&s=170667a&w=0&h=gWV3OgPPUpPcick_BR1Ki76xzhjxTs4iVqjCxKQdSzo='
          }
          alt='agent'
        />
        <S.NameAgeStripe>
          {/* @ts-ignore */}
          <S.Title>{profile.name + ', ' + profile.age}</S.Title>
          {/* i hate ts for small projects nick :) */}
        </S.NameAgeStripe>
      </S.ProfileCard>
      <S.IntelligenceCard>
        <S.Text fontSize={'30px'}>Intelligence report</S.Text>
        <S.IntelligenceInnerCard>
          <S.OccupationContainer>
            <OccupationIcon />
            <br />
            {/* @ts-ignore */}
            <S.Text fontSize={'16px'}>{profile.job}</S.Text>
          </S.OccupationContainer>
          {/* @ts-ignore */}
          <S.Text fontSize={'16px'}>{profile.description}</S.Text>
        </S.IntelligenceInnerCard>
      </S.IntelligenceCard>
    </S.DashboardCards>
  );
};
