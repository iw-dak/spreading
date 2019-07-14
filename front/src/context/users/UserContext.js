import { createContext } from "react";

const UserContext = createContext({
    register_error: null,
    status: null,
    authenticate: () => { },
    register: () => {}
});

export default UserContext;
