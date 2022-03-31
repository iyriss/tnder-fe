import styled from 'styled-components';

interface TextProps {
  fontSize: string;
}

export const Text = styled('p')<TextProps>`
  font-size: ${(props) => props.fontSize};
`;

export const DashboardPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DashboardCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 35.16px;
`;

export const ProfileCard = styled.div`
  height: 480px;
  width: 550px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const IntelligenceCard = styled.div`
  height: 480px;
  width: 590px;
  background-color: #323232;
  padding: 20px;
  box-sizing: border-box;
`;

export const IntelligenceInnerCard = styled.div`
  height: 340px;
  width: 522px;
  background-color: #000;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const OccupationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 8px;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-top: 40px;
`;
