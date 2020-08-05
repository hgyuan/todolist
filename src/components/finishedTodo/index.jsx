import * as React from "react";
import Todo from "../todo";
import {connect} from "react-redux";
import {deleteTodo} from "../../actions";
import NavLink from "../NavLink";
import {List, Divider} from 'antd';

class FinishedTodo extends React.Component {

    render() {
        return (
            <div>
                <NavLink/>
                <Divider orientation="center">All Finished Todo</Divider>
                {
                    <List
                        size="large"
                        bordered
                        dataSource={this.props.todoList.filter((item) => item.mark === true)}
                        renderItem={(item, index) =>
                            <List.Item>
                                <Todo text={item.text}
                                      id={item.id}
                                      key={index}
                                      mark={item.mark}
                                      finished={true}
                                      onDelete={this.props.onDeleteToProps}
                                />
                            </List.Item>}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(FinishedTodo);