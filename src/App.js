import React from "react";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import SignUp from "./components/SignUp"
const App = () => {
  return <div>
    <Router>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
      </Routes>
    </Router>
  </div>;
};

export default App;
