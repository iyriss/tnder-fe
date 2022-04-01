import React from 'react';
import MissionsClearedIcon from '../../../components/icons/MissionsCleared';
import * as S from './MissionsCompleted.styled';

export const MissionsCompleted: React.FC = () => {
  return (
    <S.MissionsCompletedPage>
      <S.Title>Missions cleared for today</S.Title>
      <MissionsClearedIcon />
      <S.Message>Stand down until new missions are sent over.</S.Message>
    </S.MissionsCompletedPage>
  );
};
