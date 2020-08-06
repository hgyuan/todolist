import * as React from "react";
import {addTodoRemote} from "../../actions";
import {connect} from "react-redux";
import axios from "axios"
import {Input, message} from 'antd';
import {axiosApi} from "../AxiosApi";

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
        axiosApi.post("", {
            text: this.state.value,
            mark: false,
        }).then(response=>{
            this.props.addTodoRemoteToProps(response.data);
        })
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
    addTodoRemoteToProps: (todoItem) => dispatch(addTodoRemote(todoItem))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
