import React , { useEffect } from "react";
import { useLocation , useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { confirmBooking } from "../../../redux/actions/ride";

function Confirm() {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const query = new URLSearchParams(location.search)
    const token = query.get('token');
    useEffect(() => {
        if (token) {
          dispatch(confirmBooking(token , history));
        }
      },[])
  return (
    <>
      <div className="container my-5 text-center">
        <h4>On confirming of Booking , you will be redirected to the home page . Please dont refresh.</h4>
      </div>
    </>
  );
}

export default Confirm;
