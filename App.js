import React, { useState } from "react";
import { AppLoading } from "expo";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { bootstrap } from "./src/bootstrap";
import { store, persistor } from "./src/store/store";
import { AppNavigation } from "./src/navigation/AppNavigation";

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
