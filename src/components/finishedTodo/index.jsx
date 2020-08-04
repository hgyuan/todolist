import * as React from "react";
import Todo from "../todo";
import {connect} from "react-redux";
import {deleteTodo, reverseMark} from "../../actions";
import {Link} from "react-router-dom";


class FinishedTodo extends React.Component {

    render() {

        return (
            <div>
                <Link to="/" >home page</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <Link to="/finished" >finish page</Link>
                <h1>All Finished Todo</h1>
                {
                    this.props.todoList.filter((item) =>item.mark===true)
                        .map((item, index) =>
                        <Todo text={item.text}
                              id={item.id}
                              key={index}
                              mark={item.mark}
                              finished={true}
                              onDelete={this.props.onDeleteToProps}
                              />)
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {todoList: state}
}
const mapDispatchToProps = dispatch => ({
    onDeleteToProps: (id) => dispatch(deleteTodo(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(FinishedTodo);