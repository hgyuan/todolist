let todoId = 0;
export const addTodo = text => {
    return {
        type: "ADD_TODO",
        id: todoId++,
        text
    }
}

export const deleteTodo = id => {
    return {
        type: "DELETE_TODO",
        id
    }
}
