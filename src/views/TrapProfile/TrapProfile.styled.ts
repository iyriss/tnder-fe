import styled from 'styled-components';

export const TrapProfilePage = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 40px;
  @media (max-width: 1270px) {
    align-items: center;
  }
`;

export const ProfileCardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1270px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 600px;

  .input {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-top: 10px;

    &--textarea {
      align-items: flex-start;
    }
  }

  .input-field {
    margin-left: 10px;
    width: 526px;
    height: 46px;
    font-size: 18px;
    padding: 4px 8px;
    font-family: 'Roboto', sans-serif;
    &--textarea {
      height: 172px;
      resize: none;
    }
  }
`;

export const ProfileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  margin-top: 20px;
  width: 600px;
`;
