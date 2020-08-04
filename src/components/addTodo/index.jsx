import * as React from "react";
import {addTodo} from "../../actions";
import {connect} from "react-redux";

class AddTodo extends React.Component{

    handleAddTodo=()=>{
        const inputString = document.getElementById("inputString").value;
        this.props.addTodoToProps(inputString);
        console.log(this.props.todoList)
    }

    render(){
        return (
            <div>
                <input id="inputString"/>
                <button onClick={this.handleAddTodo}>add</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { todoList: state }
}

const mapDispatchToProps = dispatch => ({
    addTodoToProps: (text) => dispatch(addTodo(text))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
