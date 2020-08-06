import * as React from "react";
import zhCN from 'antd/es/locale/zh_CN';
import {Button, ConfigProvider, List} from 'antd';
import {axiosApi} from "../AxiosApi";
import { DownloadOutlined } from '@ant-design/icons';


class Todo extends React.Component {

    handleCompeteTodo = () => {
        if (this.props.finished) {
            return;
        }
        axiosApi.put(this.props.id, {
            id: this.props.id,
            mark: !this.props.mark,
            test: this.props.text
        }).then(
            //todo rename
            this.props.onReverse(this.props.id)
        )
    }

    handleDeleteTodo = () => {
        axiosApi.delete(this.props.id).then(
            this.props.onDelete(this.props.id)
        )
    }

    render() {
        return (
            <ConfigProvider local={zhCN}>
                <List.Item actions={[<Button onClick={this.handleDeleteTodo} danger type="primary" shape="circle"  >X</Button>]}>
                    <label onClick={this.handleCompeteTodo}
                           style={{
                               textDecoration: this.props.mark ? 'line-through' : 'none'
                           }}>
                        {this.props.text}</label>
                </List.Item>
            </ConfigProvider>
        )
    }
}

export default Todo;
