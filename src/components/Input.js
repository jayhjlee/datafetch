import React, { useState } from "react";

const Input = ({ type, label }) => {
	const [value, setValue] = useState("");

	return (
		<div className="form-control">
			<label className="py-2">{label ? label : null}</label>
			<input
				type={type ? type : "text"}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</div>
	);
};

export default Input;
