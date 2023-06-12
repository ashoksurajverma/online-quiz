import { Routes, Route, Outlet, Link } from "react-router-dom";

import Signup from "./src/components/Signup";
import SignIn from "./src/components/Login";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}>
        <Route element={<Signup />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default Routing;
