
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBlogPosts = createAsyncThunk(
  'posts/fetchBlogPosts',
  async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/v1/packages`); 
      const posts = await response.json();
      return posts;
    } catch (error) {
      throw Error('Failed to fetch blog posts');
    }
  }
);


export const fetchTopDestinations = createAsyncThunk(
  'topDestinations/fetchTopDestinations',
  async () => {
    // Fetch data from the API endpoint
    const response = await fetch('api/top-destinations');
    const data = await response.json();
    return data;
  }
);
