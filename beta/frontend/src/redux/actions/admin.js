import * as api from "../api";
import {
    GET_USERS,
    GET_USER_BY_ID,
    APPROVE_USER,
    ADMIN_RIDES,
    ADMIN_RIDE
} from "../constants";
import swal from "sweetalert";

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getUsers();
        dispatch({ type: GET_USERS, data });
    } catch (e) {
        swal({
            text: e.response.data.msg,
            icon: "error",
        });

    }
};

export const getUserById= (id) => async (dispatch) => {
    try {
        const { data } = await api.getUserById(id);
        dispatch({ type: GET_USER_BY_ID, data });
    } catch (e) {
        swal({
            text: e.response.data.msg,
            icon: "error",
        });

    }
};

export const approveUser= (id,history) => async (dispatch) => {
    try {
        const { data } = await api.approveUser(id);
        dispatch({ type: APPROVE_USER, data });
        swal({
            text: "User Approved",
            icon: "success",
        });
        history.push("/admin/users");
    } catch (e) {
        swal({
            text: e.response.data.msg,
            icon: "error",
        });

    }
};

export const getAdminRides= () => async (dispatch) => {
    try {
        const { data } = await api.getAdminRides();
        dispatch({ type: ADMIN_RIDES, data });
    } catch (e) {
        swal({
            text: e.response.data.msg,
            icon: "error",
        });

    }
};

export const getAdminRide= (id) => async (dispatch) => {
    try {
        const { data } = await api.getAdminRide(id);
        dispatch({ type: ADMIN_RIDE, data });
    } catch (e) {
        swal({
            text: e.response.data.msg,
            icon: "error",
        });

    }
};
