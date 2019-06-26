import API from "../../api";

const myApi = new API({ url: 'http://localhost:8000' })
myApi.createEntity({ name: 'posts' })

export function fetchLatests() {
    return (dispatch) => {
        return myApi.endpoints.posts.getOne({ id: 'latests' }).then(({ data }) => {
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
        return myApi.endpoints.posts.getOne({ id: 'latests' }).then(({ data }) => {
            dispatch(fetchPopularsSuccess(data));
        }).catch(error => {
            dispatch(fetchLatestsFailure(error.message))
        })
    }
};

export function fetchPopularsSuccess(data) {
    return {
        type: "FETCH_LATESTS_SUCCESS", payload: {
            latests: data
        }
    }
};

export function fetchPopularsFailure(message) {
    return {
        type: "FETCH_LATESTS_FAILURE", payload: {
            error: message
        }
    }
};
