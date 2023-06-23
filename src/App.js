import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

import Signup from "./components/Signup";
import SignIn from "./components/Login";
import Header from "./components/Header";
import QuizWrapper from "./components/QuizWrapper";
import "./App.css";
import { useEffect, useState } from "react";
import Protected from "./Protected";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Dashboard from "./components/Dashboard";
import Thanks from "./components/Thanks";

function App() {
  // const [user, setUser] = useState(null);

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDQK77gH3F1ODHG9eS_JVwj2wQNyKB3nOk",
    authDomain: "business-2e217.firebaseapp.com",
    projectId: "business-2e217",
    storageBucket: "business-2e217.appspot.com",
    messagingSenderId: "418715318012",
    appId: "1:418715318012:web:096cf05dcf92783cc50979",
    measurementId: "G-5D318117GW",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Protected path="/">
              <SignIn />
            </Protected>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Protected path="/dashboard">
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="/thanks"
          element={
            <Protected path="/thanks">
              <Thanks />
            </Protected>
          }
        />
        <Route
          path="/signup"
          element={
            <Protected path="/signup">
              <Signup />
            </Protected>
          }
        />
        {/* <Route
          path="/quiz"
          element={
            <Protected path="/quiz">
              <QuizWrapper />
            </Protected>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
