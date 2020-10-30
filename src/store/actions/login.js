import axios from "axios";
import { LOGGED_IN } from "../types/login";

const validUser = data => ({ type: LOGGED_IN, payload: data });

export const signIn = credential => dispatch => {
	const mockResponse = {
		isLoggedIn: true,
		token: 1234,
	};

	dispatch(validUser(mockResponse));
};
