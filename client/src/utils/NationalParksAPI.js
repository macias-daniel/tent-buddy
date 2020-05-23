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
      "parks?parkCode=&stateCode=" + stateSearch + "&q=" + parkSearch + "&api_key=Vaic6U19mBB69aCykE0xEsU4LEjCQCyFwe7oepd6"

    );
  };

}
export default new NationalParks();
