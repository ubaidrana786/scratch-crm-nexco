import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AdminLogin from "./pages/Authentication/AdminLogin";
import StudentLogin from "./pages/Authentication/StudentLogin/";
import Dashboard from "./pages/Dashboard";
import "./App.css";

// Import Routes

import ProtectedRoutes from "./ProtectedRoutes";
import { RootContext } from "./RootContext";
import Layout from "./pages/HOC/Layout";
import { NexcoUser } from "./pages/Users";
import { Insitutes } from "./pages/UniPortals";
import { StudentForms } from "./pages/Forms/StudentForms";

function App() {
  return (
    // <RootContext>
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <Layout />
          <Dashboard />
        </Route>
        <Route exact path="/">
          <AdminLogin />
        </Route>
        <Route exact path="/studentlogin">
          <StudentLogin />
        </Route>
        <Route exact path="/nexcouser">
        <Layout />
         <NexcoUser/>
        </Route>
        <Route exact path="/insitutes">
        <Layout />
        <Insitutes/>
        </Route>
        <Route exact path="/studentform">
        <Layout />
        <StudentForms/>
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
    // </RootContext>
  );
}

export default App;
