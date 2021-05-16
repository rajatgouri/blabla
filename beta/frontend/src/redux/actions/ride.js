import * as api from "../api";
import {
    GET_VEHICLES,
    ADD_RIDE
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
        const formData = JSON.parse(localStorage.getItem("userProfile")) ? JSON.parse(localStorage.getItem("userProfile")) : jwt(localStorage.getItem("token"));
        const { data } = await api.addRide({
            ...ride,
            id: formData._id
        });
        dispatch({ type: ADD_RIDE, data });
        swal({
            text: "Ride added successfully!",
            icon: "info",
        });
    } catch (e) {
        swal({
            text: e.response.data.msg,
            icon: "error",
        });
    }
};