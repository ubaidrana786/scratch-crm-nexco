import React,{useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import {RootContext} from "../RootContext";

const ProtectedRoutes = ({ children, ...restProps }) => {
   const {authToken,} = useContext(RootContext);

    return (
    <Route
      {...restProps}
      render={() => {
        if (authToken && authToken !==null) {
          return children;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoutes;
