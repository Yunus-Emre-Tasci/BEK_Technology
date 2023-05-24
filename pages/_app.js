import { StoreProvider } from '@/redux/store-provider'
import '@/styles/globals.css'
import "react-toastify/dist/ReactToastify.css";
import {
  ToastContainer
} from "react-toastify";
import ScrollToTop from '@/components/ScrollToTop';
// import Switch from '@/components/Switch';


// import {
//   Provider
// } from 'react-redux';
// import {
//   PersistGate
// } from 'redux-persist/integration/react';
// import {
//   persistStore
// } from 'redux-persist';
// import {
//   configureStore, getDefaultMiddleware
// } from '@reduxjs/toolkit';
// import {
//   createWrapper
// } from 'next-redux-wrapper';
// // import thunkMiddleware from 'redux-thunk';
// import thunk from 'redux-thunk';
// import cartReducer from "../redux/store"

// const makeStore = () => {

//   // const middleware = [...getDefaultMiddleware(), thunkMiddleware];

//   const middleware = [...getDefaultMiddleware({
//     thunk
//   }), thunk];

//  // redux-thunk middleware'ini middleware listesine ekleyin

//   const store = configureStore({
//     reducer: cartReducer,
//     middleware
//   });

//   const persistor = persistStore(store); // Store'u persist etmek için persistor oluşturun

//   return {
//     store,
//     persistor
//   };
// };

// // Next.js wrapper'ı oluşturun
// const wrapper = createWrapper(makeStore);

// export function App({
//   Component,
//   pageProps
// }) {
//   return ( 
//     <Provider store = {store}>
//       <PersistGate loading = {null} persistor = {persistor} >
//         <Component {...pageProps}/> 
//       </PersistGate> 
//     </Provider>
//   );
// }

// export default wrapper.withRedux(App);


export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-r from-[#ece9e6] to-white dark:bg-bg-gray-700" >
    <StoreProvider>
      <ToastContainer/>
      < Component {
        ...pageProps
      }
      />
      {/* <Switch/> */}
      < ScrollToTop />
    </StoreProvider>
    </div>
  )
}
