import axios from "axios";
class OpenWeatherMap {

  constructor(){
    this.client = axios.create({
      baseURL: "https://api.openweathermap.org/data/2.5",
      headers: {}
    });
    // this.client.defaults.headers.common = {};
  }

  getWeatherForecast = citySearch => {
    return this.client.get(
      "/forecast?q=" +
        citySearch +
        "&units=imperial&appid=f60093565126bc915ec9856d96e4bfee&cnt=40",
    );
  };

  getCurrent = citySearch => {
    return this.client.get(
      "/weather?q=" +
        citySearch +
        "&units=imperial&appid=f60093565126bc915ec9856d96e4bfee",
    );
  };
}
export default new OpenWeatherMap();


