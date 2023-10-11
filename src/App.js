import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => (
  <Provider store={store}>
      <div>teste</div>
  </Provider>
)

export default App;
