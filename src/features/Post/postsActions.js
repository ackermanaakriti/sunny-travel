
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBlogPosts = createAsyncThunk(
  'posts/fetchBlogPosts',
  async () => {
    try {
      const response = await fetch('/api/posts'); 
      const posts = await response.json();
      return posts;
    } catch (error) {
      throw Error('Failed to fetch blog posts');
    }
  }
);


// topDestinationsActions.js

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTopDestinations = createAsyncThunk(
  'topDestinations/fetchTopDestinations',
  async () => {
    // Fetch data from the API endpoint
    const response = await fetch('api/top-destinations');
    const data = await response.json();
    return data;
  }
);
