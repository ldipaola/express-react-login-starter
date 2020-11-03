import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UserContext from "./utils/UserContext";

function App() {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
          <div>
          <UserContext.Provider value={value}>
            <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Login} />
            </Switch>
            </UserContext.Provider>
          </div>
        </Router>
  );
}

export default App;
