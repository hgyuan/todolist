import * as React from "react";
import {Menu} from 'antd'
import {Link} from "react-router-dom";

class NavLink extends React.Component {
    render() {
        return (
            <div>
                <Menu mode="horizontal">
                    <Menu.Item>
                        <Link to="/">home page</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/finished">finish page</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default NavLink;