import React, { Component } from 'react'
import SidebarAdmin from 'components/SidebarAdmin';
import User from 'components/Users';
import '../modal.css';

import DataServices from 'services/index.js';

export default class TransactionAdmin extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.state = {
          
        }
    }

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = () => {
        DataServices.getUsers()

            .then((response) => {
                console.log(response.data)
                this.setState({ users: response.data })
            })
            .catch(err => console.log(err))
    }

    renderHTML = () => {
        if (this.state.users && this.state.users.length > 0) {
            return this.state.users.map((user) => {
                return (
                    <tr key={user.id}>
                        <User deleteUser={this.deleteUser} user={user} />
                    </tr>
                );
            });
        };

    };

    render() {
        return (
            <>
                <div className="content">
                    <SidebarAdmin />
                    <div className="right-content">
                        {/* Page Content Holder */}
                        <div id="content">
                            <div className="container">
                                <div className="card text-center">
                                    {/* Header */}
                                    <div className="card-header myCardHeader">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h3 className="text-left text-primary font-weight-bold">
                                                    List Transaction
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search transaction..."
                                                        id="searchName"
                                                    />
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="btnTimNV">
                                                            <i className="fa fa-search" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <table className="table table-bordered table-hover">
                                            <thead className="text-primary">
                                                <tr>
                                                    <th>
                                                        <span className="">ID Account</span>
                                                        <i className="fa fa-arrow-up" id="SapXepTang" />
                                                        <i className="fa fa-arrow-down" id="SapXepGiam" />
                                                    </th>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Role</th>
                                                    <th>Locked</th>
                                                    <th>
                                                        <em className="fa fa-cog" />
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody id="tableDanhSach">
                                                {this.renderHTML()}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Footer */}
                                    <div className="card-footer myCardFooter">
                                        <nav>
                                            <ul
                                                className="pagination justify-content-center"
                                                id="ulPhanTrang"
                                            ></ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}