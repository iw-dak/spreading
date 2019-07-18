import { createContext } from "react";

const FaqContext = createContext({
    allFaqs: [],
    fetchFaqs: () => { }

});

export default FaqContext;
