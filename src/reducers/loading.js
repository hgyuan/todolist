
const loadingReducers = (state = {loading: false}, action) => {
    switch (action.type) {
        case "LOADING_TOGGLE":
            return state = action.page
        default:
            return state
    }
}

export default loadingReducers;