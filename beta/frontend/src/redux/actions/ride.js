import * as api from "../api";
import {
    GET_VEHICLES,
    ADD_RIDE,
    GET_RIDES,
    GET_RIDE_BY_ID,
    CONFIRM_RIDE,
    BOOK_RIDE
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
        console.log(formData);
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

export const confirmRide = ( formData ) => async (dispatch) => {
    try {
        const user = jwt(localStorage.getItem("token"));
        const ride = {
            ...formData,
            user : user.id
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