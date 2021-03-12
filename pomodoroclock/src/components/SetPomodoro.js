import React, { useContext, useState } from "react";
import { SettingContext } from "../context/SettingsContext";
import Button from "./Button";

const SetPomodoro = () => {
	const { updateExecute } = useContext(SettingContext);

	const [newTimer, setNewTimer] = useState({
		work: 25,
		short: 5,
		long: 60,
		active: "work",
	});

	const handleChange = (input) => {
		const { name, value } = input.target;
		switch (name) {
			case "work":
				setNewTimer({
					...newTimer,
					work: parseInt(value || 0),
				});
				break;
			case "shortBreak":
				setNewTimer({
					...newTimer,
					short: parseInt(value || 0),
				});
				break;
			case "longBreak":
				setNewTimer({
					...newTimer,
					long: parseInt(value || 0),
				});
			default:
				break;
		}
		console.log(newTimer);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateExecute(newTimer);
	};

	return (
		<div className="form-container">
			<form noValidate>
				<div className="input-wrapper">
					<input
						className="input"
						name="work"
						onChange={handleChange}
						value={newTimer.work}
					/>
					<input
						className="input"
						name="shortBreak"
						onChange={handleChange}
						value={newTimer.short}
					/>
					<input
						className="input"
						name="longBreak"
						onChange={handleChange}
						value={newTimer.long}
					/>
				</div>
				<Button title="Set Timer" _callback={handleSubmit} />
			</form>
		</div>
	);
};

export default SetPomodoro;
