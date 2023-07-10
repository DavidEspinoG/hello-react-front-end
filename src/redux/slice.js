import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'slice',
  initialState: {
    greeting: '',
  },
});

export default slice;
