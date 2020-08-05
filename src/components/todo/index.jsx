import * as React from "react";
import axios from "axios";
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, message } from 'antd';

class Todo extends React.Component {

    handleCompeteTodo=()=>{
        if(this.props.finished){
            return;
        }
        //todo
        axios.put("https://5f29559ba1b6bf0016ead479.mockapi.io/tudos/"+this.props.id,{
            id:this.props.id,
            mark:!this.props.mark,
            test:this.props.text
        })
        this.props.onReverse(this.props.id);
    }

    handleDeleteTodo=()=>{
        axios.delete("https://5f29559ba1b6bf0016ead479.mockapi.io/tudos/"+this.props.id)
        this.props.onDelete(this.props.id)
    }

    render() {
        return (
            <ConfigProvider local={zhCN}>
                <div>
                    <label onClick={this.handleCompeteTodo}
                           style={{
                               textDecoration: this.props.mark ? 'line-through' : 'none'
                           }}>
                        {this.props.text}</label>
                    <button onClick={this.handleDeleteTodo}>X</button>
                </div>
            </ConfigProvider>

        )
    }
}

export default Todo;
