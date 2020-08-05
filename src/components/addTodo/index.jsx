import * as React from "react";
import {addTodoRemote} from "../../actions";
import {connect} from "react-redux";
import axios from "axios"
class AddTodo extends React.Component{

    handleAddTodo=()=>{
        // todo not id
        let mydate = new Date();
        let uuid =""+mydate.getDay()+ mydate.getHours()+ mydate.getMinutes()+mydate.getSeconds()+mydate.getMilliseconds()+parseInt(Math.random()*1000000);
        //todo ""
        const inputString = document.getElementById("inputString").value;
        this.props.addTodoRemoteToProps(uuid,inputString,false);
        axios.post("https://5f29559ba1b6bf0016ead479.mockapi.io/tudos", {
            text:inputString,
            mark:false,
        })
        //todo return object

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
    addTodoRemoteToProps: (id,text,mark) => dispatch(addTodoRemote(id,text,mark))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
