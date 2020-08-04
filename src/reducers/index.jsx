const todoArray = []

const todoReducers = (state = todoArray, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    mark: false,
                }
            ];
        case "DELETE_TODO":
            return state.filter((item) => action.id !== item.id);
        case "REVERSE_MARK":
            return state.map((item) => {
                if (item.id === action.id) {
                    item["mark"] = !item["mark"];
                }
                return item;
            })
        case "ADD_TODO_REMOTE":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    mark: action.mark,
                }
            ];
        case "RESET_TODOS":
            return [];
        default:
            return state
    }
}

export default todoReducers;