import '@/styles/globals.css'
import {
  Provider
} from 'react-redux';
import {
  PersistGate
} from 'redux-persist/integration/react';
import {
  persistStore
} from 'redux-persist';
import {
  configureStore, getDefaultMiddleware
} from '@reduxjs/toolkit';
import {
  createWrapper
} from 'next-redux-wrapper';
// import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import cartReducer from "../redux/store"

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

const makeStore = () => {

  // const middleware = [...getDefaultMiddleware(), thunkMiddleware];

  const middleware = [...getDefaultMiddleware({
    thunk
  }), thunk];

 // redux-thunk middleware'ini middleware listesine ekleyin

  const store = configureStore({
    reducer: cartReducer,
    middleware
  });

  const persistor = persistStore(store); // Store'u persist etmek için persistor oluşturun

  return {
    store,
    persistor
  };
};

// Next.js wrapper'ı oluşturun
const wrapper = createWrapper(makeStore);

export function App({
  Component,
  pageProps
}) {
  return ( 
    <Provider store = {store}>
      <PersistGate loading = {null} persistor = {persistor} >
        <Component {...pageProps}/> 
      </PersistGate> 
    </Provider>
  );
}

export default wrapper.withRedux(App);
