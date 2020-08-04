import React from "react";
import Todo from "../todo";
import AddTodo from "../addTodo";
import {connect} from "react-redux";
import { addTodoRemote, deleteTodo, resetTodos, reverseMark} from "../../actions";
import axios from 'axios';

class TodoList extends React.Component {

    componentDidMount() {
        this.props.onResetToProps();
        axios.get('https://5f29559ba1b6bf0016ead479.mockapi.io/tudos')
            .then(response => {
                //????
                response.data.map((item) => {
                    this.props.onAddRemoteToProps(item.id,item.text, item.mark);
                })
            })

    }

    render() {


        return (
            <div>
                <AddTodo/>
                {
                    this.props.todoList.map((item, index) =>
                        <Todo text={item.text}
                              id={item.id}
                              key={index}
                              mark={item.mark}

                              onDelete={this.props.onDeleteToProps}
                              onReverse={this.props.onReverseToProps}/>)
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {todoList: state}
}

const mapDispatchToProps = dispatch => ({
    onAddRemoteToProps: (id,content, stat) => dispatch(addTodoRemote(id,content, stat)),
    onDeleteToProps: (id) => dispatch(deleteTodo(id)),
    onReverseToProps: (id) => dispatch(reverseMark(id)),
    onResetToProps:()=>dispatch(resetTodos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
