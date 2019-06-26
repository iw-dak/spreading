const initState = {
    latests: []
}

const postReducer = (state = initState, action) => {

    switch (action.type) {
        case 'FETCH_LATESTS_SUCCESS':
            return {
                ...state,
                latests: action.payload.latests
            }
        default:
            return state;
    }
}

export default postReducer;
