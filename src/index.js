import React, { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app";
const root = createRoot(document.querySelector(".root"));
root.render(
    <Router>
        <App />
    </Router>
)