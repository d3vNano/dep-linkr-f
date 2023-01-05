import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./container/providers/auth";
import App from "./container/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthProvider>
        <App />
        </AuthProvider>
    </React.StrictMode>
);
