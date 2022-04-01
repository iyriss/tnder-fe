import React, { useState, useEffect } from 'react';
import { ProfileApi } from '../../apis/ProfileApi';
import { ImageApi } from '../../apis/ImageApi';
import CredentialIcon from '../../components/icons/CredentialIcon';
import IntelligenceIcon from '../../components/icons/Intelligence';
import OccupationIcon from '../../components/icons/OccupationIcon';
import { Button } from '../../components/Button/Button';
import { ProfileCard } from '../Home/Home.styled';
import { Text } from '../Home/Home.styled';
import * as S from './TrapProfile.styled';
import { useAuth0 } from '@auth0/auth0-react';

export const TrapProfile: React.FC = () => {
  const { user } = useAuth0();
  const [profile, setProfile] = useState({
    user: user?.email || '',
    name: 'name',
    age: 18,
    job: 'job',
    description: 'bio',
    images: [
      'https://media.istockphoto.com/vectors/cartoon-ninja-illustration-vector-id831242374?k=20&m=831242374&s=170667a&w=0&h=gWV3OgPPUpPcick_BR1Ki76xzhjxTs4iVqjCxKQdSzo=',
    ],
  });
  const [userProfile, setUserProfile] = useState<any>({});

  const profileApi = new ProfileApi();
  const imageApi = new ImageApi();

  useEffect(() => {
    const getData = async () => {
      const userProfile = await profileApi.getUserProfile(user?.email);
      setUserProfile(userProfile.data);
    };
    getData();
  }, []);

  const createProfile: any = (e: any) => {
    e.preventDefault();
    profileApi.createProfile(profile);
  };

  const handleChange: any = (e: any) => {
    let newValue = {};
    newValue = { [e.target.name]: e.target.value };
    //@ts-ignore
    setProfile((profile) => ({
      ...profile,
      ...newValue,
    }));
  };

  const handleImageUpload = async (files: FileList | null) => {
    if (!files) {
      return;
    }
    console.log('files', files);
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'mo7qnts3');
    const res = await imageApi.uploadImages(formData);
    console.log('Res', res);
    setProfile((profile) => ({
      ...profile,
      images: [res.url],
    }));
  };

  return (
    <S.TrapProfilePage>
      <Text fontSize='36px' fontWeight='600'>
        Profile
      </Text>
      <br />

      {!userProfile ? (
        <div>
          <h1>Your profile</h1>
          {/* @ts-ignore */}
          <h2>Name: {userProfile.name}</h2>
          {/* @ts-ignore */}
          <h2>Age: {userProfile.age}</h2>
        </div>
      ) : (
        <S.RowContainer>
          <div>
            <ProfileCard>
              <img
                src={
                  userProfile?.images?.[0]
                    ? userProfile.images[0]
                    : profile.images[0]
                }
                alt='agent'
              />
            </ProfileCard>
            <S.ProfileCardFooter>
              <Text fontSize='16px'>This is the photo the users will see.</Text>
              <S.InputFileButton>
                <label htmlFor='upload-img'>Select Image</label>
                <input
                  type='file'
                  id='upload-img'
                  style={{ visibility: 'hidden' }}
                  onChange={(e) => {
                    handleImageUpload(e.target.files);
                  }}
                />
              </S.InputFileButton>
            </S.ProfileCardFooter>
          </div>

          <S.ProfileInputContainer>
            <S.ColumnContainer>
              <Text fontSize='24px' fontWeight='600'>
                Alias
              </Text>
              <div className='input'>
                <CredentialIcon />
                <input
                  className='input-field'
                  type='text'
                  name='name'
                  value={profile.name}
                  onChange={handleChange}
                />
              </div>
            </S.ColumnContainer>

            <S.ColumnContainer>
              <Text fontSize='24px' fontWeight='600'>
                Age
              </Text>
              <div className='input'>
                <CredentialIcon />
                <input
                  className='input-field'
                  type='text'
                  name='age'
                  value={profile.age}
                  onChange={handleChange}
                />
              </div>
            </S.ColumnContainer>

            <S.ColumnContainer>
              <Text fontSize='24px' fontWeight='600'>
                Your not-to-secret occupation
              </Text>
              <div className='input'>
                <OccupationIcon />
                <input
                  className='input-field'
                  type='text'
                  name='job'
                  value={profile.job}
                  onChange={handleChange}
                />
              </div>
            </S.ColumnContainer>

            <S.ColumnContainer>
              <Text fontSize='24px'>Intelligence</Text>
              <div className='input input--textarea'>
                <IntelligenceIcon />
                <textarea
                  name='description'
                  className='input-field input-field--textarea'
                  value={profile.description}
                  onChange={handleChange}
                />
              </div>
            </S.ColumnContainer>
            <Button
              text='Save all changes'
              onClick={createProfile}
              overrideStyles={{ marginRight: '0' }}
            />
          </S.ProfileInputContainer>
        </S.RowContainer>
      )}
    </S.TrapProfilePage>
  );
};

export default TrapProfile;
