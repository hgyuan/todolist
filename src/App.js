import React from 'react';
import './App.css';
import ComponentRouter from "./components/Routers";
import 'antd/dist/antd.css';
import {Spin} from 'antd';
import {connect} from "react-redux";


class App extends React.Component {
    render() {
        return (
            <Spin spinning={this.props.loading}>
                <div className="App">
                    <ComponentRouter/>
                </div>
            </Spin>

        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loadingReducers.loading
    }
}

export default connect(mapStateToProps)(App);
