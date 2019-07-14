import { createContext } from "react";

const PostContext = createContext({
    latests: [],
    populars: [],
    latestFeatured: [],
    latestFrameworks: [],
    latestLanguages: [],
    fetchLatests: () => { },
    fetchPopulars: () => { },
    fetchLatestsByCategory: () => { }
});

export default PostContext;
