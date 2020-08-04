import * as React from "react";


class Todo extends React.Component {

    handleCompeteTodo=()=>{
        if(this.props.finished){
            return;
        }
        this.props.onReverse(this.props.id);
    }

    render() {
        return (
            <div>
                <label onClick={this.handleCompeteTodo}
                       style={{
                            textDecoration: this.props.mark ? 'line-through' : 'none'
                        }}>
                    {this.props.text}</label>

                <button onClick={() => this.props.onDelete(this.props.id)}>X</button>
            </div>
        )
    }
}

export default Todo;
