import React, { Component } from 'react'
import DataServices from "services/index.js"

export default class User extends Component {

    render() {
        const { deleteUser, user } = this.props;
<<<<<<< HEAD
        
=======


>>>>>>> 5cbc04ffe5c545254c52928948be09b007132918
        return (
            <>
                <td >{user.id}</td>
                <td >{user.username}</td>
                <td >{user.name}</td>
                <td >{user.email}</td>
                <td>{user.appUserRole}</td>
                <td>{(user.locked).toString()}</td>
                <td><button className="btn btn-danger" onClick={deleteUser.bind(this, user.id)}><i className="fa fa-trash"></i></button></td>
            </>
        )
    }
}
