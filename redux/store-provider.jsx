import { Provider } from "react-redux";
// import store, { persistor } from "./store";
import store from "./store";
// import { PersistGate } from "redux-persist/integration/react";

export function StoreProvider({ children}) {
  
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}>{children}</PersistGate> */}
      {children}
    </Provider>
  );
}
