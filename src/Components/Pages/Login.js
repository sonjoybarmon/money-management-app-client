import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/action/authAction';


class Login extends Component {

    state= {
        email: "",
        password: "",
        error: {}
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    static getDerivedStateFromProps(nestProps , prevProps) {
        if(JSON.stringify(nestProps.auth.error) !== JSON.stringify(prevProps.error)){
            return {
                error : nestProps.auth.error
            }
        }
        return null
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.login({
            email : this.state.email,
            password : this.state.password
        }, this.props.history)
    }


    render() {
        let { email , password , error} = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1 className='text-center display-4'>
                            Login Here
                        </h1>

                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label htmlFor="email">email :</label>
                                <input 
                                    type="text"
                                    className={error.email ? "form-control is-invalid" : "form-control"}
                                    placeholder="Enter Your email"
                                    name="email"
                                    id="email"
                                    value = {email}
                                    onChange={this.changeHandler}
                                />
                                { error.email && <div className="invalid-feedback">
                                    {
                                        error.email
                                    }
                                </div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">password :</label>
                                <input 
                                    type="text"
                                    className={error.password ? "form-control is-invalid" : "form-control"}
                                    placeholder="Enter Your password"
                                    name="password"
                                    id="password"
                                    value = {password}
                                    onChange={this.changeHandler}
                                />
                                { error.password && <div className="invalid-feedback">
                                    {
                                        error.password
                                    }
                                </div>}
                            </div>
                            <Link to ='/register'>Don't have a account ? register Here</Link> <br />
                            <button type="submit" className="btn btn-primary my-3">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect( (state) => ({
    auth : state.auth
}) , 
{
    login
})(Login) ;