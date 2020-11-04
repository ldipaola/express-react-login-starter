import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UserContext from "./utils/UserContext";
import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";

function App() {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    async function isLoggedIn() {
      const response = await axios.get('/api/user_data'); 
      if (response.data.email){
        setUser(response.data);
        console.log(response.data);
      }
    }
    isLoggedIn();
}, []);

  return (
            <Router>
            <UserContext.Provider value={value}>
            <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact={true} path="/" component={Home} isAuthenticated={user} />
            </Switch>
            </UserContext.Provider>
            </Router>
  );
}

export default App;
