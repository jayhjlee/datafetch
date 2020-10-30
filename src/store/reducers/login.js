import { LOGGED_IN } from "../types/login";

const initialState = {
	isLoggedIn: false,
	token: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.payload.isLoggedIn,
				token: action.payload.token,
			};
		default:
			return state;
	}
}
