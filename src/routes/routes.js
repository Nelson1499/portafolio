import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UploadProjects from "../pages/uploadProjects";
import { UserContext } from "../provider/UserContext";
import { Redirect } from "react-router-dom";
import PrivacyPolicy from "../pages/Privacy-Policy";

const Routes = () => {
  const { userSessionState, id, token } = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/project" component={Project} />
      <Route
        exact
        path="/login"
        render={() =>
          userSessionState || (id && token) ? <Redirect to="/" /> : <Login />
        }
      />
      <Route
        exact
        path="/signup"
        render={() =>
          userSessionState || (id && token) ? <Redirect to="/" /> : <Signup />
        }
      />
      <Route
        exact
        path="/upload-projects"
        render={() =>
          userSessionState || (id && token) ? (
            <UploadProjects />
          ) : (
            <Redirect to="/" />
          )
        }
      />
      <Route exact path="/Privacy-Policy" component={PrivacyPolicy} />
    </Switch>
  );
};

export default Routes;
