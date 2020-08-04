import React from 'react';
import './App.css';
import TodoList from "./components/todoList";
import {HashRouter, Route} from "react-router-dom";
import FinishedTodo from "./components/finishedTodo";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <HashRouter>
                    <Route exact path="/" component={TodoList}/>
                    <Route path="/finished" component={FinishedTodo}/>
                </HashRouter>
            </header>
        </div>
    );
}

export default App;
