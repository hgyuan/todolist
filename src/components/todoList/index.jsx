import React from "react";
import Todo from "../todo";
import AddTodo from "../addTodo";
import {connect} from "react-redux";
import {addTodoRemote, deleteTodo, resetTodos, reverseMark} from "../../actions";
import NavLink from "../NavLink";
import {List, Divider, Row, Col} from 'antd';
import {axiosApi} from "../AxiosApi";

class TodoList extends React.Component {

    componentDidMount() {
        this.props.onResetToProps();
        axiosApi.get("").then(response => {
            response.data.map((item) => {
                this.props.onAddRemoteToProps(item.id, item.text, item.mark);
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
                                    <List.Item>
                                        <Todo text={item.text}
                                              id={item.id}
                                              key={index}
                                              mark={item.mark}
                                              onDelete={this.props.onDeleteToProps}
                                              onReverse={this.props.onReverseToProps}/>
                                    </List.Item>}
                            />
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {todoList: state}
}

const mapDispatchToProps = dispatch => ({
    onAddRemoteToProps: (id, content, stat) => dispatch(addTodoRemote(id, content, stat)),
    onDeleteToProps: (id) => dispatch(deleteTodo(id)),
    // todo
    onReverseToProps: (id) => dispatch(reverseMark(id)),
    onResetToProps: () => dispatch(resetTodos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
