import styled from "styled-components";

interface TextProps {
  fontSize?: string;
  fontWeight?: string;
}

export const Text = styled("p")<TextProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  margin: 0;
  color: #fff;
`;

export const DashboardPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 40px;
  padding: 10px;
  overflow-x: hidden;
`;

export const DashboardCards = styled.div`
  position: "relative";
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 35.16px;
  color: #fff;
`;

export const ProfileCard = styled.div`
  position: relative;
  height: 600px;
  width: 700px;
  margin-right: 20px;
  margin-top: 20px;
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
  top: 0;
  margin-right: 30px;
  box-sizing: border-box;
`;

export const IntelligenceCard = styled.div`
  height: 600px;
  width: 400px;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 20px;
  margin-right: 10px;
`;

export const IntelligenceInnerCard = styled.div`
  height: 80%;
  width: 90%;
  margin-right: 24px;
  box-sizing: border-box;
  img {
    height: 40%;
    width: 40%;
    object-fit: cover;
  }
`;

export const OccupationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 8px;
  margin-bottom: 20px;
`;
