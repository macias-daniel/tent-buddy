import axios from "axios";

class REI {
  constructor() {
    this.client = axios.create({
      baseURL: "https://www.mountainproject.com/data",
      headers: {},
    });
    // this.client.defaults.headers.common = {};
  }

  getTrails = (lat, lon) => {

    return this.client.get(
      "/get-routes-for-lat-lon?lat=" +
        lat +
        "&lon=" +
        lon +
        "&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=" + process.env.REACT_APP_REI_API
    );
    
  };
}

export default new REI();
