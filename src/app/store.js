

import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/Post/postsSlice';

export default configureStore({
  reducer: {
    posts: postsSlice,
  },
});