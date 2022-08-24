const { createSlice } = require('@reduxjs/toolkit');
const randomWord = require('random-words');
const wordSlice = createSlice({
  name: 'word',
  initialState: {
    word: randomWord(),
    playable: true,
    correctChars: [],
    incorrectChars: [],
  },
  reducers: {},
});

export const cartActions = wordSlice.actions;

export default wordSlice;
