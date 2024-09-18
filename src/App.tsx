import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <ToastContainer />
    </div>
  );
};

export default App;
