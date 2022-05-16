import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer wNSY969VpZf1HQnitaLR-Or9gv_gINGG59JWBSjePuXXr0cLWK7un8QiSWCHw-c35X1zy0Ly8segvALsdmvflRBTMHAH9NHYdxwDYyYz55Cf0_TvGE8QR1KWFptmYnYx",
  },
});
