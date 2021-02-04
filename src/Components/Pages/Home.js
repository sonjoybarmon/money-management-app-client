import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/action/authAction';
import './Home.css'
class Home extends Component {
    render() {
        return (
            <div>
                i am home page 
                { this.props.auth.isAuthenticated ?
                <button onClick={ () => this.props.logout(this.props.history) } className='btn btn-danger'>
                    Logout
                </button>
                :
                <button className='btn btn-primary'>
                    <Link to='/login' style={{textDecoration : 'none' , color : 'white'}}>
                        Login
                    </Link>
                </button>
                }
            </div>
        );
    }
}
    
export default connect( (state) => ({
    auth : state.auth
}) , 
{
    logout
})(Home) ;