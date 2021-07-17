import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from '@reach/router';

class Welcome extends Component {
    render() {

      const { userName, logOutUser } = this.props;

      return (
          <div className='text-center mt-4'>
          <span className='text-secondary fw-bold ps-1'>
              Welcome {userName}</span>
              , 
          <Link 
          onClick={e => logOutUser(e)}
          to="/login" className="fw-bold text-primary ps-1"
          >log out</Link>
          </div>
      );
    }
}


export default Welcome;

