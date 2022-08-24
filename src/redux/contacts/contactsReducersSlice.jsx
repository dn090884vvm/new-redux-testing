import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contact', //eto imya tolko sdlya actions contact/addcontact contact/deletecontact  type
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filtered: (state, action) => (state = action.payload),
  },
});

// console.log(filterSlice);
export const { addContact, deleteContact } = contactSlice.actions;
export const { filtered } = filterSlice.actions;

export const contactSlicer = contactSlice.reducer;
export const filterSlicer = filterSlice.reducer;
