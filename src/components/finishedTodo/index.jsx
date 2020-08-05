import * as React from "react";
import Todo from "../todo";
import {connect} from "react-redux";
import {deleteTodo} from "../../actions";
import NavLink from "../NavLink";
import {List, Divider, Row, Col} from 'antd';

class FinishedTodo extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col span={10} offset={7}>
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
    onDeleteToProps: (id) => dispatch(deleteTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FinishedTodo);