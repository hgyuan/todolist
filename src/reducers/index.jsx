const todoArray = []

const todoReducers = (state = todoArray, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                }
            ];
        case "DELETE_TODO":
            return state.filter((item, index) => action.id !== index);
        default:
            return state
    }
}

export default todoReducers;