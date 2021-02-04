import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../store/action/authAction';

class Register extends Component {

    state= {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
        let {name , email , password , confirmPassword} = this.state

        this.props.register({
            name,
            email,
            password ,
            confirmPassword
        }, this.props.history)
    }


    render() {
        let {name , email , password , confirmPassword , error} = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1 className='text-center display-4'>
                            Register Here
                        </h1>

                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label htmlFor="name">Name :</label>
                                <input 
                                    type="text"
                                    className={error.name ? "form-control is-invalid" : "form-control"}
                                    placeholder="Enter Your Name"
                                    name="name"
                                    id="name"
                                    value = {name}
                                    onChange={this.changeHandler}
                                />
                                { error.name && <div className="invalid-feedback">
                                    {
                                        error.name
                                    }
                                </div>}
                            </div>
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
                                {error.email && <div className="invalid-feedback">
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
                                {error.password && <div className="invalid-feedback">
                                    {
                                        error.password
                                    }
                                </div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">confirm Password :</label>
                                <input 
                                    type="text"
                                    className={error.confirmPassword ? "form-control is-invalid" : "form-control"}
                                    placeholder="Confirm Your password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value = {confirmPassword}
                                    onChange={this.changeHandler}
                                />
                                {error.confirmPassword && <div className="invalid-feedback">
                                    {
                                        error.confirmPassword
                                    }
                                </div>}
                            </div>
                            <Link to ='/login'>Already have account ? Login Here</Link> <br />
                            <button type="submit" className="btn btn-primary my-3">Register</button>
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
    register
})(Register) ;