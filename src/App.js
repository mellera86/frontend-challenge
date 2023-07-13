import React from "react";
import './global.css';
import { AppRouterProvider } from "./providers";

const App = ({ children }) => {
  return (
    <AppRouterProvider >{children}</AppRouterProvider>
  );
}

export default App;
