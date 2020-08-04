import * as React from "react";
import axios from "axios"

class Todo extends React.Component {

    handleCompeteTodo=()=>{
        if(this.props.finished){
            return;
        }
        console.log(this.props.id)
        this.props.onReverse(this.props.id);
    }

    handleDeleteTodo=()=>{
        axios.delete("https://5f29559ba1b6bf0016ead479.mockapi.io/tudos/"+this.props.id)
        this.props.onDelete(this.props.id)
    }

    render() {
        return (
            <div>
                <label onClick={this.handleCompeteTodo}
                       style={{
                            textDecoration: this.props.mark ? 'line-through' : 'none'
                        }}>
                    {this.props.text}</label>

                {/*<button onClick={() => this.props.onDelete(this.props.id)}>X</button>*/}
                <button onClick={this.handleDeleteTodo}>X</button>
            </div>
        )
    }
}

export default Todo;
