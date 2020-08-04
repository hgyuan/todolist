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
            return state.filter((item, index) => action.id !== index);
        case "REVERSE_MARK":
            return state.map((item, index) => {
                if (index === action.id) {
                    item["mark"] = !item["mark"];
                }
                return item;
            })
        default:
            return state
    }
}

export default todoReducers;