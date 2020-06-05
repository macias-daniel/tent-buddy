import axios from "axios";

class ClimateCell {
  constructor() {
    this.client = axios.create({
      baseURL: "https://api.climacell.co/v3/weather",
      headers: {},
    });
  }

  getHazards = (lat, lon) => {
    return this.client.get(
      "/realtime?lat=" +
        lat +
        "&lon=" +
        lon +
        "&fields%5B%5D=pm25&fields%5B%5D=pm10&fields%5B%5D=o3&fields%5B%5D=co&fields%5B%5D=fire_index&fields%5B%5D=epa_aqi&apikey=OgVsGTFoa4Byg3hkKGngPp9GoIaLsc2Z" 
        // + process.env.REACT_APP_CLIMATE_CELL_API
    );
    
  };
}

export default new ClimateCell();
