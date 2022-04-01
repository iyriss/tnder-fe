import axios from "axios";
export class ProfileApi {
  //private baseURL = `http://${process.env.REACT_APP_CLOUDINARY_NAME}/profiles`;
  private baseURL = `http://localhost:3001/profiles`;

  public async createProfile(profile: any) {
    const res = await axios.post(this.baseURL + "/create", profile);
    return res;
  }

  public async getProfiles(userEmail: any) {
    const res = await axios.get(this.baseURL + "/" + userEmail);
    return res;
  }

  public async getUserProfile(userEmail: any) {
    const res = await axios.get(this.baseURL + "/profile/" + userEmail);
    return res;
  }

  public async likeUser(likedData: any) {
    const res = await axios.post(this.baseURL + "/profile/like", likedData);
    return res;
  }
}
