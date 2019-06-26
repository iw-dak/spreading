import React from "react";
import App from "./App/App";

export const routes = [
    {
        path: "/",
        exact: true,
        main: () => <App />
    }
];
