import React, { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.css';

class Navigation extends Component {
    render() {
        const { user, logOutUser } = this.props;
    
      return (
<nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">
     <FaUsers className="me-1" /> Ignitech VMS
    </Link>
    <div className="navbar-nav ml-auto">
        { user && (<Link className="nav-item nav-link" to="/administer">
          administer
        </Link>)}
        { !user && (<Link className="nav-item nav-link" to="/login">
          log in
        </Link>)}
        { !user && (<Link className="nav-item nav-link" to="/register">
          register
        </Link>)}
        { user && (<Link className="nav-item nav-link" to="/login"
        onClick={ e => logOutUser(e)}>
          log out
        </Link>)}
    </div>
  </div>
</nav>
      );
    }
}

    export default Navigation;