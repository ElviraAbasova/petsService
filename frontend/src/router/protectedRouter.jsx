
import { Navigate } from "react-router-dom";


export const ProtectedAdmin = ({ element, adminOnly=false }) => {
    let user = JSON.parse(localStorage.getItem("user"));
 
    if (adminOnly && user?.user.toLowerCase() !== "admin") {
      return <Navigate to="/404" />;
    }
  return element;
};

export const ProtectedAsistan = ({ element, adminOnly=false }) => {
  let user = JSON.parse(localStorage.getItem("user"));

  if (adminOnly && user?.user.toLowerCase() !== "admin") {
    return <Navigate to="/404" />;
  }
return element;
};


export const ProtectedWork = ({ element, worker = false }) => {
  let user = JSON.parse(localStorage.getItem("user"));

  if (worker && user?.user.toLowerCase() !== "groomer" && user?.user.toLowerCase() !== "veterinar") {
    return <Navigate to="/" />;
  }

  return element;
};

export const ProtectedProfile = ({ element, profile=false }) => {
  let user = JSON.parse(localStorage.getItem("user"));

if (profile && !user) {
  return <Navigate to="/Login" />;
}

return element;
};

