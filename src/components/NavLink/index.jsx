import * as React from "react";
import {Link} from "react-router-dom";

class NavLink extends React.Component{
    render(){
        return (
            <div>
                <Link to="/" >home page</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <Link to="/finished" >finish page</Link>
            </div>
        )
    }
}

export default NavLink;