let todoId = 0;
const addTodo = text =>{
    return{
        type: "ADD_TODO",
        id: todoId++,
        text
    }
}

const deleteTodo = id =>{
    return{
        type:"DELETE_TODO",
        id
    }
}
