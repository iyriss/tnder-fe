import React from 'react';
import CredentialIcon from '../../components/icons/CredentialIcon';
import IntelligenceIcon from '../../components/icons/Intelligence';
import OccupationIcon from '../../components/icons/OccupationIcon';
import { Button } from '../../components/Button/Button';
import { ProfileCard } from '../Home/Home.styled';
import { Text } from '../Home/Home.styled';
import * as S from './TrapProfile.styled';

export const TrapProfile: React.FC = () => {
  return (
    <S.TrapProfilePage>
      <Text fontSize='36px' fontWeight='600'>
        Controller
      </Text>
      <br />

      <S.RowContainer>
        <ProfileCard>
          <img
            src={
              'https://media.istockphoto.com/vectors/cartoon-ninja-illustration-vector-id831242374?k=20&m=831242374&s=170667a&w=0&h=gWV3OgPPUpPcick_BR1Ki76xzhjxTs4iVqjCxKQdSzo='
            }
            alt='agent'
          />
          <S.ProfileCardFooter>
            <Text fontSize='16px'>This is the photo the users will see.</Text>
            <Button text='Upload new photo' onClick={() => null} />
          </S.ProfileCardFooter>
        </ProfileCard>

        <S.ProfileInputContainer>
          <S.ColumnContainer>
            <Text fontSize='24px' fontWeight='600'>
              Alias
            </Text>
            <div className='input'>
              <CredentialIcon />
              <S.Input />
            </div>
          </S.ColumnContainer>

          <S.ColumnContainer>
            <Text fontSize='24px' fontWeight='600'>
              Age
            </Text>
            <div className='input'>
              <CredentialIcon />
              <S.Input />
            </div>
          </S.ColumnContainer>

          <S.ColumnContainer>
            <Text fontSize='24px' fontWeight='600'>
              Your not-to-secret occupation
            </Text>
            <div className='input'>
              <OccupationIcon />
              <S.Input />
            </div>
          </S.ColumnContainer>

          <S.ColumnContainer>
            <Text fontSize='24px'>Intelligence</Text>
            <div className='input input--textarea'>
              <IntelligenceIcon />
              <S.Textarea />
            </div>
          </S.ColumnContainer>
          <Button
            disabled //TODO
            text='Save all changes'
            onClick={() => null}
            overrideStyles={{ marginRight: '0', backgroundColor: '#ccc' }}
          />
        </S.ProfileInputContainer>
      </S.RowContainer>
    </S.TrapProfilePage>
  );
};

export default TrapProfile;
