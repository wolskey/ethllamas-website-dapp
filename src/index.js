import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import {Provider} from 'react-redux'
import store from "./redux/store";
import App from "./App";
import ComingSoon from "./ComingSoon";
import Mint from "./Mint";
import License from "./License";
// import "./styles/reset.css";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="mint" element={<Provider store={store}><Mint /></Provider>} />
      <Route path="license" element={<License />} />
      <Route path="comingsoon" element={<ComingSoon />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();