import { useEffect, useState } from 'react';
import { ImageApi } from '../apis/ImageApi';

export const UploadImage = () => {
  const [imageUploaded, setImageUploaded] = useState<FileList | null>(null);
  const [cloudinaryImg, setCloudinaryImg] = useState<any>(null);
  const imageApi = new ImageApi();

  const uploadImage = async (files: FileList | null) => {
    if (!files) {
      return;
    }

    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'mo7qnts3');
    const res = await imageApi.uploadImages(formData);
    setCloudinaryImg(res);
  };

  useEffect(() => {
    uploadImage(imageUploaded);
  }, [imageUploaded]);

  return (
    <div>
      {' '}
      <input
        type='file'
        onChange={(e) => {
          setImageUploaded(e.target.files);
        }}
      />
      {cloudinaryImg ? <img src={cloudinaryImg.url} alt='profile' /> : null}
    </div>
  );
};
