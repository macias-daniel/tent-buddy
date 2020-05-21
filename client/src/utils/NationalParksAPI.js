import axios from "axios";
class NationalParks {


  constructor(){
    this.client = axios.create({
      baseURL: "https://developer.nps.gov/api/v1",
      headers: {}
    });
    // this.client.defaults.headers.common = {};
  }


  getInfo = citySearch => {
    return this.client.get(
      "/campgrounds?stateCode=CA&api_key=84TrQplVnjoIMiehR0TLPbSAjfmq2QR9DLJabiqG",
    );
  };

  getAlerts = citySearch => {
    return this.client.get(
      // "park alerts go here"
    );
  };

}
export default new NationalParks();
