import axios from "axios";
import { API_URL } from "../../../constants";

export const postsApi = {
  async fetchPosts() {
    try {
      const { data } = await axios.get(`${API_URL}/posts`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
