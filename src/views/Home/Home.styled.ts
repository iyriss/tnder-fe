import styled from 'styled-components';

interface TextProps {
  fontSize?: string;
  fontWeight?: string;
}

export const Text = styled('p')<TextProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
  margin: 0;
`;

export const DashboardPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const DashboardCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: 'relative';
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 35.16px;
`;

export const ProfileCard = styled.div`
  position: relative;
  height: 480px;
  width: 550px;
  margin-right: 20px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const NameAgeStripe = styled.div`
  position: absolute;
  height: 80px;
  width: 550px;
  background: black;
  opacity: 0.5;
  bottom: 0;
  padding-left: 50px;
  box-sizing: border-box;
`;

export const IntelligenceCard = styled.div`
  height: 480px;
  width: 590px;
  background-color: #323232;
  padding: 20px;
  box-sizing: border-box;
`;

export const IntelligenceInnerCard = styled.div`
  height: 390px;
  width: 550px;
  background-color: #000;
  margin: auto;
  margin-top: 24px;
  padding: 20px;
  box-sizing: border-box;
`;

export const OccupationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 8px;
  margin-bottom: 20px;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-top: 30px;
`;

export const MissionNumberContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 150px;
  margin-left: auto;
  margin-right: 50px;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  right: 50px;
  cursor: pointer;
`;
