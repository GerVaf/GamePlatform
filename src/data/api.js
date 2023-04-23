import axios from "axios";

const Base_Url = "https://api.rawg.io/api/games?key=64d7c2e284ce406abb26e55182fdf488&"
export const gameApi = async(url)=>{
    const { data } = await axios.get(`${Base_Url}${url}`);
      return data
}