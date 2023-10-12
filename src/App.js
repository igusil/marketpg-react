import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./store/store";

import Routes from "./routes"
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/global.css'
import '@fontsource/roboto/300.css';

const App = () => (
  <Provider store={store}>
      <Routes/>
  </Provider>
)

export default App;
