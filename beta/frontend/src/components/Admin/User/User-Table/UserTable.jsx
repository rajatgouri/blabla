import React, { useState }  from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

function UserTable(props) {
    const [showModal, setShowModal] = useState(false);
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
            <th >Action</th>
            </tr>
        </thead>
        {!props.ongoing?(
            <tr>
            <td></td>
            <td>Rohan</td>
            <td>rohan@gmail.com</td>
            <td>+914555545656</td>
            <td>User</td>
            <td >
                <Link to="#">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
        ): ''}
        <tbody>
        {!props.ongoing?(
            <tr>
            <td></td>
            <td>Rohan</td>
            <td>rohan@gmail.com</td>
            <td>+914555545656</td>
            <td>User</td>
            <td >
                <Link to="#">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
        ): ''}
            <tr>
            <td></td>
            <td>Rohan</td>
            <td>rohan@gmail.com</td>
            <td>+914555545656</td>
            <td>User</td>
            <td >
                <Link to="#">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
            {!props.ongoing?(
            <tr>
            <td></td>
            <td>Rohan</td>
            <td>rohan@gmail.com</td>
            <td>+914555545656</td>
            <td>Driver</td>
            <td >
                <Link to="#">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
        ): ''}
            
            {!props.ongoing?(
            <tr>
            <td></td>
            <td>Rohan</td>
            <td>rohan@gmail.com</td>
            <td>+914555545656</td>
            <td>User</td>
            <td >
                <Link to="#">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
        ): ''}
            <tr>
            <td></td>
            <td>Rohan</td>
            <td>rohan@gmail.com</td>
            <td>+914555545656</td>
            <td>Driver</td>
            <td >
                <Link to="#">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
            {!props.ongoing?(
            <tr>
            <td></td>
            <td>Rohan</td>
            <td>rohan@gmail.com</td>
            <td>+914555545656</td>
            <td>User</td>
            <td >
                <Link to="#">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
        ): ''}

{!props.ongoing?(
            <tr>
            <td></td>
            <td>Rohan</td>
            <td>rohan@gmail.com</td>
            <td>+914555545656</td>
            <td>Driver</td>
            <td >
                <Link to="#">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
        ): ''}
            <tr>
            <td></td>
            <td>Rohan</td>
            <td>rohan@gmail.com</td>
            <td>+914555545656</td>
            <td>User</td>
            <td >
                <Link to="#">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
            {!props.ongoing?(
            <tr>
            <td></td>
            <td>Rohan</td>
            <td>rohan@gmail.com</td>
            <td>+914555545656</td>
            <td>Driver</td>
            <td >
                <Link to="#">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
        ): ''}
        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;
