import { LOGGED_IN } from "../types/user";

const initialState = {
	isLoggedIn: false,
	token: null,
	username: "",
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.payload.isLoggedIn,
				token: action.payload.token,
				username: action.payload.username,
			};
		default:
			return state;
	}
}
