import { configureStore } from '@reduxjs/toolkit';
import { contactSlicer, filterSlicer } from './contacts/contactsReducersSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({ xxx: contactSlicer, yyy: filterSlicer });

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['yyy'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
// export const store = configureStore({
//   reducer: {
//     xxx: contactSlicer,
//     yyy: filterSlicer,
//   },
// });
