import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./utils/ThemeContext";
import { UserProvider } from "./utils/UserContext";
import { LoadingProvider } from "./utils/LoadingContext";
import { AuthProvider } from "./utils/AuthContext";
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LoadingProvider>
          <UserProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </UserProvider>
        </LoadingProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals();
