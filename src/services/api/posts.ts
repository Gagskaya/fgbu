import axios from "axios";
import { API_URL } from "../../../constants";
import { Post } from "../../types/posts";

export const postsApi = {
  async fetchPosts() {
    try {
      const { data } = await axios.get<Post[]>(`${API_URL}/posts`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
