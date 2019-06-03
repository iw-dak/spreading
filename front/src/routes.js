import React from "react";
import App from "./App/App";


// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
export const routes = [
    {
        path: "/",
        exact: true,
        main: () => <App />
    }
];
