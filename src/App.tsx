import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import { Loading, Page } from "./components";
import configureStore from "./redux/store";

const Users = lazy(() => import("./pages/users"));
const Settings = lazy(() => import("./pages/settings"));

/**
 * Main component of the app that bootsraps all pages and initialize redux
 */
export function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <div className="app limit-width">
          <div className="header">
            <div className="header-content limit-width">
              <h1 className="app-title">Simple Address Book</h1>
              <Navigation />
            </div>
          </div>
          <Suspense fallback={<PageLoading />}>
            <Switch>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/">
                <Users />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </Provider>
  );
}

/**
 * Component showing loading state when page is lazy loaded
 */
export function PageLoading() {
  return (
    <Page className="loading-page">
      <Loading />
    </Page>
  );
}

/**
 * Component contains application page links
 */
export function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink activeClassName="navigation-link-active" to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="navigation-link-active" to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
