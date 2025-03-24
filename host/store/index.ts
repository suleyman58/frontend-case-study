import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage kullanımı için
import basketReducer from './slice/basketSlice';

const persistConfig = {
  key: 'root', // Depolama anahtarı
  storage, // localStorage kullanımı
};

const persistedReducer = persistReducer(persistConfig, basketReducer);

const store = configureStore({
  reducer: {
    basket: persistedReducer, // Persisted reducer
  },
  devTools: process.env.NODE_ENV !== 'production', // Sadece geliştirme ortamında etkinleştir
});

export const persistor = persistStore(store); // Persistor oluşturma
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;