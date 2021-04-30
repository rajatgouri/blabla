import React, { useState }  from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

function RideTable(props) {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
  return (
    <div>
            {showModal ? (
        <Modal className="mt-5" show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">
                Process Refund
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="w-100 h-100">
          <form>
                <div className="form-group">
                  <input
                    name="title"
                    type="text"
                    className="form-control mt-3"
                    id="exampleFormControlInput1"
                    placeholder="Select User"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    name="title"
                    type="text"
                    className="form-control mt-3"
                    id="exampleFormControlInput1"
                    placeholder="Refund Amount"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="title"
                    className="form-control mt-3 mb-4"
                    id="exampleFormControlInput1"
                    placeholder="Reason for refund"
                    required
                  />
                </div>
                <div className="text-center mt-4 mb-5">
                    <button className="text-white bg-secondaryColor font-demi btn-blue" onClick={handleClose}>
                        Process Refund
                    </button>
                </div>
              </form>
          </div>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
      <Table striped borderless hover responsive>
        <thead>
            <tr>
            <th></th>
            <th>From</th>
            <th>To</th>
            <th>Driver</th>
            <th>Date</th>
            <th>Status</th>
            <th >Action</th>
            </tr>
        </thead>
        {!props.ongoing?(
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-primary">Scheduled</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
        ): ''}
        <tbody>
        {!props.ongoing?(
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-violet">Completed</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
                {!props.ongoing ? (
                    <button className="text-white btn-danger font-demi rounded w-40" style={{ border: "none" }} onClick={handleShow}> Process Refund</button>
                ) : ''}
            </td>
            </tr>
        ): ''}
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-green">Ongoing</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
            {!props.ongoing?(
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-violet">Completed</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
                {!props.ongoing ? (
                    <button className="text-white btn-danger font-demi rounded w-40" style={{ border: "none" }} onClick={handleShow}> Process Refund</button>
                ) : ''}
            </td>
            </tr>
        ): ''}
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-green">Ongoing</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-green">Ongoing</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
            {!props.ongoing?(
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-primary">Scheduled</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
        ): ''}
        {!props.ongoing?(
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-primary">Scheduled</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
        ): ''}
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-green">Ongoing</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
            {!props.ongoing?(
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-primary">Scheduled</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
        ): ''}
                            {!props.ongoing?(
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-violet">Completed</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
                {!props.ongoing ? (
                    <button className="text-white btn-danger font-demi rounded w-40" style={{ border: "none" }} onClick={handleShow}> Process Refund</button>
                ) : ''}
            </td>
            </tr>
        ): ''}
                            {!props.ongoing?(
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-violet">Completed</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
                {!props.ongoing ? (
                    <button className="text-white btn-danger font-demi rounded w-40" style={{ border: "none" }} onClick={handleShow}> Process Refund</button>
                ) : ''}
            </td>
            </tr>
        ): ''}
        {!props.ongoing?(
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-violet">Completed</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
                    <button className="text-white btn-danger font-demi rounded w-40" style={{ border: "none" }} onClick={handleShow}> Process Refund</button>
            </td>
            </tr>
        ): ''}

        {!props.ongoing?(
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-violet">Completed</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
                {!props.ongoing ? (
                    <button className="text-white btn-danger font-demi rounded w-40" style={{ border: "none" }} onClick={handleShow}> Process Refund</button>
                ) : ''}
            </td>
            </tr>
        ): ''}
        {!props.ongoing?(
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-violet">Completed</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
                {!props.ongoing ? (
                    <button className="text-white btn-danger font-demi rounded w-40" style={{ border: "none" }} onClick={handleShow}> Process Refund</button>
                ) : ''}
            </td>
            </tr>
        ): ''}
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-green">Ongoing</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-green">Ongoing</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
            <tr>
            <td></td>
            <td>Toronto</td>
            <td>Vancouver</td>
            <td>Mark Zender</td>
            <td>14 Aug 2020</td>
            <td className="text-green">Ongoing</td>
            <td >
                <Link to="/admin/ride-details">
                    <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                </Link>
            </td>
            </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default RideTable;
