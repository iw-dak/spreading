import { createContext } from "react";

const UserContext = createContext({
    status: null,
    authenticate: () => { },
});

export default UserContext;
