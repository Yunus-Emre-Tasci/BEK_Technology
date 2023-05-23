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
  configureStore
} from '@reduxjs/toolkit';
import {
  createWrapper
} from 'next-redux-wrapper';
import cartReducer from "../redux/store"

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

const makeStore = () => {
  const store = configureStore({
    reducer: cartReducer,
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
