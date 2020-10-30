import React from "react";
import { shallow } from "enzyme";
import { create, renderer } from "react-test-renderer";

import App from "../components/App";

describe("App Component", () => {
	test("Matches the snapshot", () => {
		const app = create(<App />);
		expect(app.toJSON()).toMatchSnapshot();
	});
});
