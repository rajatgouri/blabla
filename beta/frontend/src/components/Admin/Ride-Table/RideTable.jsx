import React, { useState , useEffect }  from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getAdminRides } from "../../../redux/actions/admin";

function RideTable(props) {
    const dispatch = useDispatch();
    const [sortedRides, setSortedRides] = useState({});
    const [ascending, setAscending] = useState(true);
    
    useEffect(() => {
        dispatch(getAdminRides());
    }, [])
    console.log(props.status)
    let rides = useSelector(state => state.admin?.adminData?.adminRides);
    rides = rides.filter(r=>{
        if (props.status=='') {
            return r;
        } else {
            if(props.status === r.status) {
                return r;
            }
        }
    })
    rides = sortedRides.length>0 ? sortedRides : rides;
    const sortDate = ()=>{
        if (ascending) {
            rides = rides.sort(function(a,b){
                return  new Date(a.date) -  new Date(b.date);
            });
            setAscending(false);
        } else {
            rides = rides.sort(function(a,b){
                return  new Date(b.date) -  new Date(a.date);
            });
            setAscending(true);
        }
        setSortedRides(rides);
    }

  return (
    <div>
      <Table striped borderless hover responsive>
        <thead>
            <tr>
            <th></th>
            <th>From</th>
            <th>To</th>
            <th>Driver</th>
            <th onClick={sortDate}>Date</th>
            <th>Status</th>
            <th >Action</th>
            </tr>
        </thead>
        <tbody>
            {rides && rides.length>0 ? (
                rides.map(ride=>{
                    return (
                        <tr>
                        <td></td>
                        <td>{ride.from}</td>
                        <td>{ride.to}</td>
                        <td>{ride.driverName}</td>
                        <td>{ride.date}</td>
                        {ride.status=="Scheduled" ? (
                            <td className="text-yellow">{ride.status}</td>
                        ):''}
                        {ride.status=="Cancelled" ? (
                            <td className="text-danger">{ride.status}</td>
                        ):''}
                        {ride.status=="Ongoing" ? (
                            <td className="text-primary">{ride.status}</td>
                        ):''}
                        {ride.status=="Completed" ? (
                            <td className="text-success">{ride.status}</td>
                        ):''}
                        <td >
                            <Link to={"/admin/ride-details?id="+ride._id}>
                                <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                            </Link>
                            <a href="https://paydunya.com/">
                            <button className="text-white btn-danger font-demi rounded w-40" style={{ border: "none" }}> Process Refund</button>
                            </a>
                        </td>
                    </tr>
                    )
                })
            ) : ''}
        </tbody>
      </Table>
    </div>
  );
}

export default RideTable;
