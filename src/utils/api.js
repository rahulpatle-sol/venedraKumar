import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://dummyjson.com'
});

export const fetchBlogs = async () => {
  try {
    const response = await api.get('/posts');
    return response.data.posts;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export default api;