import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import App from "./App";
import AuthenticatedRoute from "./AuthRoute";

import * as serviceWorker from "./serviceWorker";

class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AuthenticatedRoute path={"/"} exact component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
