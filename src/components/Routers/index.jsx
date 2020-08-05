import * as React from "react";
import {HashRouter, Route} from "react-router-dom";
import TodoList from "../todoList";
import FinishedTodo from "../finishedTodo";

class ComponentRouter extends React.Component{
    render() {
        return (
            <div>
                <HashRouter>
                    <Route exact path="/" component={TodoList}/>
                    <Route path="/finished" component={FinishedTodo}/>
                </HashRouter>
            </div>
        )
    }
}

export default ComponentRouter;