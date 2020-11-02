import axios from "axios";
import { LOGGED_IN } from "../types/user";

const validUser = data => ({ type: LOGGED_IN, payload: data });
const gotUser = data => ({ type: LOGGED_IN, payload: data });

export const fetchUser = () => dispatch => {
	const { isLoggedIn, username, token } = localStorage;

	dispatch(gotUser({ isLoggedIn, username, token }));
};

export const signIn = credential => async dispatch => {
	const res = await axios.post("/api/user/login", credential);
	const { data } = res;

	localStorage.setItem("token", data.token);
	localStorage.setItem("isLoggedIn", data.isLoggedIn);
	localStorage.setItem("username", data.username);

	dispatch(validUser(data));
};
