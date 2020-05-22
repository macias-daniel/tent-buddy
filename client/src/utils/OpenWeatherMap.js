import axios from "axios";
class OpenWeatherMap {
  constructor() {
    this.client = axios.create({
      baseURL: "https://api.openweathermap.org/data/2.5",
      headers: {},
    });
    // this.client.defaults.headers.common = {};
  }

  getWeatherForecast = citySearch => {
    return this.client.get(
      "/forecast?q=" +
        citySearch +
        "&units=imperial&appid=" +
        process.env.REACT_APP_OPEN_WEATHER_API +
        "&cnt=40",
    );
  };

  getCurrent = citySearch => {
    return this.client.get(
      "/weather?q=" +
        citySearch +
        "&units=imperial&appid=" + process.env.REACT_APP_OPEN_WEATHER_API,
    );
  };
}
export default new OpenWeatherMap();
