import axios from "axios";
export class ProfileApi {
  //private baseURL = `http://${process.env.REACT_APP_CLOUDINARY_NAME}/profiles`;
  private baseURL = `https://lychee-surprise-64630.herokuapp.com/profiles`;

  public async createProfile(profile: any) {
    const res = await axios.post(this.baseURL + "/create", profile);
    return res;
  }

  public async getProfiles() {
    const res = await axios.get(this.baseURL + "/");
    return res;
  }
}
