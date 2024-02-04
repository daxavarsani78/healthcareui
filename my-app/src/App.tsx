import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import customTheme from "./app.theme";
import { ToastContainer } from "react-toastify";
import {
  DesignerRouterConfig,
  DeveloperRouterConfig,
} from "./utility/auth-guard";
import { ENVIRONMENT } from "./config";
import { environment } from "./utility/enums";
import { UserProvider } from "./contexts/user-context";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

function App() {
  return (
    <>
      <UserProvider>
        <React.Suspense fallback={<>loader will be here</>}>
          <ThemeProvider theme={customTheme}>
            <BrowserRouter>
              <ToastContainer />
              {environment.design.toString() === ENVIRONMENT.toString() ? (
                <DesignerRouterConfig />
              ) : (
                <DeveloperRouterConfig />
              )}
            </BrowserRouter>
          </ThemeProvider>
        </React.Suspense>
      </UserProvider>
    </>
  );
}

export default App;
