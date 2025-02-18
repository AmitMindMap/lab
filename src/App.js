import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import DocAnalizer from "./components/pages/DocAnalizer";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<DocAnalizer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
