const initState = {
    latests: [],
    populars: [],
    latestFeatured: [],
    latestFrameworks: [],
    latestLanguages: []
}

const postReducer = (state = initState, action) => {

    switch (action.type) {
        case 'FETCH_LATESTS_SUCCESS':
            return {
                ...state,
                latests: action.payload.latests
            }
        case 'FETCH_POPULARS_SUCCESS':
            return {
                ...state,
                populars: action.payload.populars
            }
        case 'FETCH_FEATURED_SUCCESS':
            return {
                ...state,
                latestFeatured: action.payload.latestFeatured
            }
        case 'FETCH_FRAMEWORKS_SUCCESS':
            return {
                ...state,
                latestFrameworks: action.payload.latestFrameworks
            }
        case 'FETCH_LANGUAGES_SUCCESS':
            return {
                ...state,
                latestLanguages: action.payload.latestLanguages
            }
        default:
            return state;
    }
}

export default postReducer;
