import React from "react";
import addTodo from "../addTodo";
import todo from "../todo";

class TodoList extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        return (
            <div>
                <addTodo/>
                <todo/>
            </div>
        )
    }
}
export default TodoList;
