import React from "react";
import Todo from "../todo";
import AddTodo from "../addTodo";
import {connect} from "react-redux";
import {addTodoRemote, deleteTodo, resetTodos, reverseMark} from "../../actions";
import NavLink from "../NavLink";
import {List, Divider, Row, Col} from 'antd';
import {axiosApi} from "../AxiosApi";
import todoReducers from "../../reducers";

class TodoList extends React.Component {

    componentDidMount() {
        this.props.onResetToProps();
        axiosApi.get("").then(response => {
            response.data.map((item) => {
                this.props.onAddRemoteToProps(item);
            })
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={10} offset={7}>
                        <NavLink/>
                        <Divider orientation="center">Todo</Divider>
                        <AddTodo/>
                        {
                            <List
                                size="large"
                                bordered
                                dataSource={this.props.todoList}
                                renderItem={(item, index) =>
                                    <Todo text={item.text}
                                          id={item.id}
                                          key={index}
                                          mark={item.mark}
                                          onDelete={this.props.onDeleteToProps}
                                          onReverse={this.props.onReverseToProps}/>
                                }
                            />
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {todoList: state.todoReducers}
}

const mapDispatchToProps = dispatch => ({
    onAddRemoteToProps: (todoItem) => dispatch(addTodoRemote(todoItem)),
    onDeleteToProps: (id) => dispatch(deleteTodo(id)),
    // todo
    onReverseToProps: (id) => dispatch(reverseMark(id)),
    onResetToProps: () => dispatch(resetTodos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
