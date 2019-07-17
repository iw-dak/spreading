import { createContext } from "react";

const PostContext = createContext({
    latests: [],
    populars: [],
    latestFeatured: [],
    latestFrameworks: [],
    post: null,
    latestLanguages: [],
    fetchLatests: () => { },
    fetchPopulars: () => { },
    fetchLatestsByCategory: () => { },
    // updatePostViews: () => { }
});

export default PostContext;
