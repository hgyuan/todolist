import * as React from "react";
import {addTodoRemote} from "../../actions";
import {connect} from "react-redux";
import axios from "axios"
import {Input, message} from 'antd';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChangeValue = (event) => {
        this.setState({
            value: event.target.value,
        })
    }


    handleAddTodo = () => {
        if (this.state.value.length === 0) {
            message.error('Can not input empty content');
            return;
        }
        // todo not id
        let mydate = new Date();
        let uuid = "" + mydate.getDay() + mydate.getHours() + mydate.getMinutes() + mydate.getSeconds() + mydate.getMilliseconds() + parseInt(Math.random() * 1000000);
        this.props.addTodoRemoteToProps(uuid, this.state.value, false);
        axios.post("https://5f29559ba1b6bf0016ead479.mockapi.io/tudos", {
            text: this.state.value,
            mark: false,
        })
        //todo return object
    }

    render() {
        const {Search} = Input;
        return (
            <div>
                <Search
                    placeholder="input search text"
                    enterButton="Add"
                    size="large"
                    onChange={this.handleChangeValue}
                    onSearch={this.handleAddTodo}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {todoList: state}
}

const mapDispatchToProps = dispatch => ({
    addTodoRemoteToProps: (id, text, mark) => dispatch(addTodoRemote(id, text, mark))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
