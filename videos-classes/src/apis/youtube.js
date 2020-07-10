import axios from "axios";

const KEY = "AIzaSyCJfOhrQ-kX-bnZNaVhQ7pys4i8KVGGPtE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`,
  },
});
