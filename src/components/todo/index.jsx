import * as React from "react";


class Todo extends React.Component {

    render() {
        return (
            <div>
                <label>{this.props.text}</label>
                <button onClick={() => this.props.onDelete(this.props.id)}>X</button>
            </div>
        )
    }
}

export default Todo;
