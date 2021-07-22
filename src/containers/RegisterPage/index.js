import React, { Component } from 'react'
import axios from 'axios';

export default class Register extends Component {
    state={};

    handleSubmit = e => {
        e.preventDefault(); 

        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            passsword: this.password,
            confirm_password: this.confirmPassword
        }

        axios.post("register", data).then(res=>{
            console.log(res);
        }).catch(err=>{
            this.setState({
                mess: err.response.data.mess
            })
        })
    }

    render() {
        let error = '';

        if(this.state.mess){
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.mess}
                </div>
            )
        }

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        {error}
                        <h2>Register</h2>

                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="First Name" onChange={e => this.firstName = e.target.value}/>
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" onChange={e => this.lastName = e.target.value}/>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email" onChange={e => this.email = e.target.value}/>
                        </div>

                        <div className="form-group">
                            <label>Pasword</label>
                            <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value}/>
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Confirm Password" onChange={e => this.confirmPassword = e.target.value}/>
                        </div>

                        <button className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}