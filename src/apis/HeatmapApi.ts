import axios from "axios";

export class HeatmapApi {
  //private baseURL = `http://${process.env.REACT_APP_CLOUDINARY_NAME}/profiles`;
  private baseURL = `http://localhost:3001/heatmaps`;

  public async createHeatmap(heatmap: any) {
    const res = await axios.post(this.baseURL + "/create", heatmap);
    return res;
  }

  public async getAllHeatmaps() {
    const res = await axios.get(this.baseURL + "/");
    return res;
  }

  public async getMatchHeatmap() {
    const userId = "test@gmail.com";
    const viewerId = "viewer@gmail.com";
    const res = await axios.get(this.baseURL + `/match/${userId}/${viewerId}`);
    return res;
  }
}
