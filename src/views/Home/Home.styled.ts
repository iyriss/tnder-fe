import styled from 'styled-components';

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
  color: #fff;
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
`;
