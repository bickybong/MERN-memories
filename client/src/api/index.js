import axios from "axios";

// backend url
const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
