import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { CartContextProvider } from "./contexts/CartContext.jsx";
import "./index.css";
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
