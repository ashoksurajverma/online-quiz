import { Routes, Route, BrowserRouter } from "react-router-dom";

import Signup from "./components/Signup";
import SignIn from "./components/Login";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import QuizWrapper from "./components/QuizWrapper";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  });

  return (
    <BrowserRouter>
      <Header currentUser={user} />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quiz" element={<QuizWrapper />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
