import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import axios from "axios";
import PrivateRoute from "./components/PrivateRoute";
import isAuthenticatedContext from "./utils/isAuthenticatedContext";

function App() {
  const [user, setUser] = useState(null);
  const [isUserAuthenticated, setUserIsAuthenticated] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("/api/user_data");
      if (response.data.email) {
        setUserIsAuthenticated(true);
        setUser(response.data);
      } else {
        setUserIsAuthenticated(false);
      }
    };
    getUser();
  }, []);

  return (
    <Router>
      <isAuthenticatedContext.Provider
        value={{ isUserAuthenticated, setUserIsAuthenticated }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute
            isAuthenticated={isUserAuthenticated}
            exact
            path="/"
            component={Home}
          />
        </Switch>
      </isAuthenticatedContext.Provider>
    </Router>
  );
}

export default App;
