import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className='navbar' >
                <Link to='/'>Home</Link>
                <Link to='/css1'>CSS1</Link>
            </div>
        );
    }
}

export default Nav;