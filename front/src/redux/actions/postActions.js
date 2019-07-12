import API from "../../api";
import axios from 'axios';

const myApi = new API()

myApi.createEntity({ name: 'posts' })

export function fetchLatests() {
    return (dispatch) => {
        return myApi.endpoints.posts.getSpecific({ id: 'latests' }).then(({ data }) => {
            dispatch(fetchLatestsSuccess(data));
        }).catch(error => {
            dispatch(fetchLatestsFailure(error.message))
        })
    }
};

export function fetchLatestsSuccess(data) {
    return {
        type: "FETCH_LATESTS_SUCCESS", payload: {
            latests: data
        }
    }
};

export function fetchLatestsFailure(message) {
    return {
        type: "FETCH_LATESTS_FAILURE", payload: {
            error: message
        }
    }
};

export function fetchPopulars() {
    return (dispatch) => {
        return myApi.endpoints.posts.getSpecific({ id: 'populars' }).then(({ data }) => {
            dispatch(fetchPopularsSuccess(data));
        }).catch(error => {
            dispatch(fetchLatestsFailure(error.message))
        })
    }
};

export function fetchPopularsSuccess(data) {
    return {
        type: "FETCH_POPULARS_SUCCESS", payload: {
            populars: data
        }
    }
};

export function fetchPopularsFailure(message) {
    return {
        type: "FETCH_POPULARS_FAILURE", payload: {
            error: message
        }
    }
};

export function fetchLatestsByCategory() {
    return (dispatch) => {
        // Parallel requests
        return axios.all([
            myApi.endpoints.posts.getSpecific({ id: 'get-latest-posts-by-category/mis-en-avant' }),
            myApi.endpoints.posts.getSpecific({ id: 'get-latest-posts-by-category/frameworks' }),
            myApi.endpoints.posts.getSpecific({ id: 'get-latest-posts-by-category/languages' }),
        ])
            .then(axios.spread(function (featured, frameworks, languages) {
                dispatch(fetchLatestFeaturedSuccess(featured.data));
                dispatch(fetchLatestFrameworksSuccess(frameworks.data));
                dispatch(fetchLatestLanguagesSuccess(languages.data));
            })).catch(function (featuredError, frameworksError, languagesError) {
                dispatch(fetchLatestFeaturedFailure(featuredError));
                dispatch(fetchLatestFrameworksFailure(frameworksError));
                dispatch(fetchLatestLanguagesSuccess(languagesError));
            });
    }
};

export function fetchLatestFeaturedSuccess(data) {
    return {
        type: "FETCH_FEATURED_SUCCESS", payload: {
            latestFeatured: data
        }
    }
};

export function fetchLatestFeaturedFailure(message) {
    return {
        type: "FETCH_FEATURED_FAILURE", payload: {
            error: message
        }
    }
};

export function fetchLatestFrameworksSuccess(data) {
    return {
        type: "FETCH_FRAMEWORKS_SUCCESS", payload: {
            latestFrameworks: data
        }
    }
};

export function fetchLatestFrameworksFailure(message) {
    return {
        type: "FETCH_FRAMEWORKS_FAILURE", payload: {
            error: message
        }
    }
};

export function fetchLatestLanguagesSuccess(data) {
    return {
        type: "FETCH_LANGUAGES_SUCCESS", payload: {
            latestLanguages: data
        }
    }
};

export function fetchLatestLanguagesFailure(message) {
    return {
        type: "FETCH_LANGUAGES_FAILURE", payload: {
            error: message
        }
    }
};
