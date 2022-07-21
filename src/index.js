import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


// top level get to store using Provider side of Redux
// basically Redux; Context has 2 major jobs:
// 1. Providing Information
// 2. Consuming Information
// there are components of Redux provider and consumer(connect)
// We want to have Provider know what the store is and give access to all of my application the store through Provider
// connection between React and Redux comes from Provider providing store information to every component that is connected
// access to everything comes through React Redux using Provider to provide access to the state to any component that is connected via connect
// every child of App has access to store and can be connected

