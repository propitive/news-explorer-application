import React, { Children, Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";

// function ProtectedRoute({
//   children,
//   isLoggedIn,
//   setActiveModal,
//   isCheckingToken,
// }) {
//   React.useEffect(() => {
//     if (!isCheckingToken && !isLoggedIn) {
//       setActiveModal('login');
//     }
//   }, [isLoggedIn, setActiveModal, isCheckingToken]);

//   if (!isLoggedIn && !isCheckingToken) {
//     return <Navigate to="/" />;
//   }

//   return children;
// }

// export default ProtectedRoute;

// function ProtectedRoute({ component: Component, isAuthenticated, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} {...rest} />
//         ) : (
//           <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//         )
//       }
//     />
//   );
// }

// export default ProtectedRoute;

function ProtectedRoute({ currentUser, children, props }) {
  return (
    <Route {...props}>
      {currentUser !== null ? children : <Redirect to="/" />}
    </Route>
  );
}

export default ProtectedRoute;
