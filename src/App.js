import { Routes, Route, BrowserRouter } from "react-router-dom";

import Signup from "./components/Signup";
import SignIn from "./components/Login";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import QuizWrapper from "./components/QuizWrapper";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
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
