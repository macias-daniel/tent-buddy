import axios from "axios";
class NationalParks {

  // https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=WY&q=yellowstone&api_key=Vaic6U19mBB69aCykE0xEsU4LEjCQCyFwe7oepd6

  constructor(){
    this.client = axios.create({
      baseURL: "https://developer.nps.gov/api/v1/",
      headers: {}
    });
  }

  // need to implement stateSearch and parkSearch
  getInfo = () => {
    return this.client.get(
      "parks?parkCode=&stateCode=WY&q=yellowstone&api_key=Vaic6U19mBB69aCykE0xEsU4LEjCQCyFwe7oepd6"


      // // park search should be WY
      // "parks?parkCode=&stateCode="+ parkSearch +"WY&q=yellowstone" +
      // "&api_key=84TrQplVnjoIMiehR0TLPbSAjfmq2QR9DLJabiqG",
    );
  };

  getAlerts = parkSearch => {
    return this.client.get(
      // "park alerts go here"
    );
  };

}
export default new NationalParks();
