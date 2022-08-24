import { configureStore } from '@reduxjs/toolkit';
import { contactSlicer, filterSlicer } from './contacts/contactsReducersSlice';

export const store = configureStore({
  reducer: {
    xxx: contactSlicer,
    yyy: filterSlicer,
  },
});
