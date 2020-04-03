import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import Jsx from "./components/learn_jsx/Jsx";
import Main from "./components/main/Main";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Jsx />, document.getElementById("root"));
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
