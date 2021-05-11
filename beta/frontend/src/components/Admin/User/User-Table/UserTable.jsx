import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { getUsers } from "../../../../redux/actions/admin";

function UserTable(props) {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [])
    const users = useSelector(state => state.admin?.adminData?.users);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <div>

            <Table className="table" striped borderless hover responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Approval</th>
                        <th >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users ? (
                        users.map(u => {
                            return (
                                <tr>
                                    <td></td>
                                    <td>{u.fullName}</td>
                                    <td>{u.email}</td>
                                    <td>+{u.phone}</td>
                                    <td>{u.role}</td>
                                    {u.isIdApproved ? (
                                        <td class="text-green">Approved</td>
                                    ) : (
                                        <td class="text-red">Pending</td>
                                    )}
                                    <td >
                                        <Link to={'/admin/users/'+u._id}>
                                            <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        ''
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default UserTable;
