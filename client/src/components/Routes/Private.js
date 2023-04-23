import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/api/v1/auth/user-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}

// This is a code snippet for a React component that acts as a private route in a client-side application.

// The component imports the useState and useEffect hooks from React, the useAuth hook from a custom "auth" context, the Outlet component from the react-router-dom library, the axios library, and a custom Spinner component.

// The component defines two state variables using the useState hook: "ok" which is initially set to false and will be used to determine if the user is authenticated, and "auth" which is retrieved from the "auth" context using the useAuth hook.

// The useEffect hook is used to perform an authentication check every time the component is mounted or updated. If the "auth.token" variable exists, it calls the "authCheck" function which makes a GET request to the "/api/v1/auth/user-auth" endpoint using the axios library. If the response from the server has a truthy "ok" property, it sets the "ok" state variable to true using the setOk function. Otherwise, it sets "ok" to false.

// The component then returns the <Outlet /> component if "ok" is truthy, which will render the child routes defined in the parent component. If "ok" is falsy, it returns the <Spinner /> component, which is likely a loading spinner or some other indication that the user is not yet authorized to access the private route.

// Overall, this component is designed to be used as a wrapper for other routes or components that require authentication. If the user is authenticated, it will render the child routes/components. If not, it will show a loading spinner or some other indication that the user is not yet authorized.

// If the user is authenticated, it renders the child routes/components. If not, it shows a loading spinner
