import axios from "axios";
import { LOGGED_IN } from "../types/login";

const validUser = data => ({ type: LOGGED_IN, payload: data });

export const signIn = credential => async dispatch => {
	const res = await axios.post("/api/user/login", credential);
	const { data } = res;

	localStorage.setItem("token", data.token);
	localStorage.setItem("isLoggedIn", data.isLoggedIn);

	dispatch(validUser(data));
};
