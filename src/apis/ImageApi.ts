export class ImageApi {
  private baseURL = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`;

  public async uploadImages(images: FormData) {
    const res = await fetch(this.baseURL, { method: 'POST', body: images });

    const uploadedImages = await res.json();
    if (!res.ok) {
      throw new Error(uploadedImages.error);
    }
    return uploadedImages;
  }
}
