import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";

import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
