import React from "react";
import Todo from "../todo";
import AddTodo from "../addTodo";
import {connect} from "react-redux";
import {deleteTodo} from "../../actions";

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <AddTodo/>
                {
                    this.props.todoList.map((item, index) => <Todo text={item.text} id={index} key={index}
                                                                   onDelete={this.props.onDeleteToProps}/>)
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {todoList: state}
}

const mapDispatchToProps = dispatch => ({
    onDeleteToProps: (id) => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
