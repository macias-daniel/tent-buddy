import axios from "axios";
class NationalParks {

  constructor(){
    this.client = axios.create({
      baseURL: "https://developer.nps.gov/api/v1/",
      headers: {}
    });
  }

  getInfo = (parkSearch, stateSearch) => {
    return this.client.get(

      // use yellowstone
      "parks?parkCode=&stateCode=" + stateSearch + "&q=" + parkSearch + "&api_key=" + process.env.REACT_APP_NATIONAL_PARKS_API

    );
  };

}
export default new NationalParks();
