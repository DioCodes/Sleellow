import React, { useState, useEffect } from "react";
import { AppLoading, Notifications } from "expo";
import { createStore } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { bootstrap } from "./src/bootstrap";
import { AppNavigation } from "./src/navigation/AppNavigation";

import { store, persistor } from "./src/store/store";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // const store = createStore(rootReducer);

  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => {
          setIsLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}
