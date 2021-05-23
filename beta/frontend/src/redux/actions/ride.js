import * as api from "../api";
import {
    GET_VEHICLES,
    ADD_RIDE,
    GET_RIDES,
    GET_RIDE_BY_ID,
    CONFIRM_RIDE,
    BOOK_RIDE,
    GET_MY_RIDES,
    START_RIDE_BY_ID,
    END_RIDE_BY_ID,
    CANCEL_RIDE_BY_ID,
    GET_CLIENT_RIDES
} from "../constants";
import jwt from "jwt-decode";
import swal from "sweetalert";

export const getVehicles = () => async (dispatch) => {
    try {
        const formData = JSON.parse(localStorage.getItem("userProfile")) ? JSON.parse(localStorage.getItem("userProfile")) : jwt(localStorage.getItem("token"));
        const { data } = await api.getVehicles(formData.email);
        dispatch({ type: GET_VEHICLES, data });
    } catch (e) {
        swal({
            text: e.response.data.msg,
            icon: "error",
        });
    }
};

export const addRide = ( ride, history ) => async (dispatch) => {
    try {
        const formData = jwt(localStorage.getItem("token"));
        
        const { data } = await api.addRide({
            ...ride,
            driver: formData.id
        });
        dispatch({ type: ADD_RIDE, data });
        swal({
            text: "Ride added successfully!",
            icon: "success",
        });
        history.push("/driver/home");
    } catch (e) {
        swal({
            text: e.response.data.msg,
            icon: "error",
        });
    }
};

export const getRides = ( ride ) => async (dispatch) => {
    try {
        const { data } = await api.getRides(ride.from, ride.to , ride.date);
        dispatch({ type: GET_RIDES, data });
    } catch (e) {
        console.log(e);
        swal({
            text: e.response.data.msg,
            icon: "error",
        });
    }
};

export const getMyRides = ( ride ) => async (dispatch) => {
    try {
        const user = jwt(localStorage.getItem("token"));
        const { data } = await api.getMyRides(user.id);
        dispatch({ type: GET_MY_RIDES, data });
    } catch (e) {
        swal({
            text: e.response.data.msg,
            icon: "error",
        });
    }
};

export const getClientRides = ( ride ) => async (dispatch) => {
    try {
        const user = jwt(localStorage.getItem("token"));
        const { data } = await api.getClientRides(user.id);
        dispatch({ type: GET_CLIENT_RIDES, data });
    } catch (e) {
        swal({
            text: e.response.data.msg,
            icon: "error",
        });
    }
};

export const getRideById = ( id ) => async (dispatch) => {
    try {
        const { data } = await api.getRideById(id);
        dispatch({ type: GET_RIDE_BY_ID, data });
    } catch (e) {
        console.log(e);
        swal({
            text: e.response.data.msg,
            icon: "error",
        });
    }
};

export const confirmRide = ( formData , history) => async (dispatch) => {
    try {
        
        const user = jwt(localStorage.getItem("token"));
       
        const ride = {
            ...formData,
            user : user.id,
            fullName : user.name
        }
        const { data } = await api.confirmRide(ride);
        window.location.href = data.url;
        dispatch({ type: CONFIRM_RIDE, data });
    } catch (e) {
        console.log(e);
        swal({
            text: e.response.data.msg,
            icon: "error",
        });
    }
};

export const confirmBooking = ( token , history) => async (dispatch) => {
    try {
        const user = jwt(localStorage.getItem("token"));
        
        const booking = {
            token: token,
            user : user.id
        }
        
        const { data } = await api.confirmBooking(booking);
        dispatch({ type: BOOK_RIDE, data });
        swal({
            text: "Booking Confirmed, The rider details have been sent on your registered e-mail",
            icon: "success",
        });
        history.push("/");
    } catch (e) {
        console.log(e);
        swal({
            text: e.response.data.msg,
            icon: "error",
        });
    }
};

export const startRideById = ( ride , time,  history ) => async (dispatch) => {
    try {
        const { data } = await api.startRideById(ride ,time);
        dispatch({ type: START_RIDE_BY_ID, data });
        swal({
            text: "Ride Started At "+time,
            icon: "success",
        });
        history.push("/driver/home");
    } catch (e) {
        swal({
            text: e.response.data.msg,
            icon: "error",
        });
    }
};

export const endRideById = ( ride , time,  history ) => async (dispatch) => {
    try {
        const { data } = await api.endRideById(ride ,time);
        dispatch({ type: END_RIDE_BY_ID, data });
        swal({
            text: "Ride Ended At "+time,
            icon: "success",
        });
        history.push("/driver/home");
    } catch (e) {
        swal({
            text: e.response.data.msg,
            icon: "error",
        });
    }
};

export const cancelRideById = ( ride ,  history ) => async (dispatch) => {
    try {
        const { data } = await api.cancelRideById(ride);
        dispatch({ type: CANCEL_RIDE_BY_ID, data });
        swal({
            text: "Ride Cancelled",
            icon: "success",
        });
        history.push("/driver/home");
    } catch (e) {
        swal({
            text: e.response.data.msg,
            icon: "error",
        });
    }
};
