import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";
import PrivacyPage from '../pages/Privacy';
import { Home } from "../pages/Home";

const Resume = lazy(() => import("../pages/Resume"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {
  logCredits();

  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <HelmetMeta />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/privacy" component={PrivacyPage} />
            <Route exact path="/resume" component={Resume} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};
