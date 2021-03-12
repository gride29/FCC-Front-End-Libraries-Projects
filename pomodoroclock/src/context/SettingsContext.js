import React, { createContext, useState } from "react";

export const SettingContext = createContext();

const SettingContextProvider = (props) => {
	const [pomodoro, SetPomodoro] = useState(0);
	const [executing, setExecuting] = useState({});
	const [startAnimate, setStartAnimate] = useState(false);

	// Start the clock.
	const startTimer = () => {
		setStartAnimate(true);
	};

	// Pause the clock.
	const pauseTimer = () => {
		setStartAnimate(false);
	};

	// Stop the clock.
	const stopTimer = () => {
		setStartAnimate(false);
	};

	// Update clock.
	const updateExecute = (updatedSettings) => {
		setExecuting(updatedSettings);
		setTimerTime(updatedSettings);
	};

	// Reset button.
	const SettingsButton = () => {
		setExecuting({});
		SetPomodoro(0);
	};

	const playSound = () => {
		const audio = new Audio(
			"https://media.jpkarlsven.com/audio/codepen/pomodoro-clock/stop.mp3"
		);
		audio.play();
		audio.play();
	};

	// Stop the animation.
	function stopAnimate() {
		playSound();
		setStartAnimate(false);
	}

	// Evaluate on which mode clock is switched.
	const setTimerTime = (evaluate) => {
		switch (evaluate.active) {
			case "work":
				SetPomodoro(evaluate.work);
				break;
			case "short":
				SetPomodoro(evaluate.short);
				break;
			case "long":
				SetPomodoro(evaluate.long);
				break;
			default:
				SetPomodoro(0);
				break;
		}
	};

	// Function to update the active and pomodoro object.
	const setCurrentTimer = (activeState) => {
		// Create new object by spreading the old one.
		updateExecute({
			...executing,
			active: activeState,
		});
		setTimerTime(executing);
	};

	const children = ({ remainingTime }) => {
		const minutes = Math.floor(remainingTime / 60);
		const seconds = remainingTime % 60;
		if (minutes < 10 && seconds < 10) {
			return `0${minutes}:0${seconds}`;
		}
		if (minutes < 10) {
			return `0${minutes}:${seconds}`;
		}
		if (seconds < 10) {
			return `${minutes}:0${seconds}`;
		} else {
			return `${minutes}:${seconds}`;
		}
	};

	return (
		<div>
			<SettingContext.Provider
				value={{
					stopTimer,
					updateExecute,
					pomodoro,
					executing,
					startAnimate,
					startTimer,
					pauseTimer,
					SettingsButton,
					setCurrentTimer,
					updateExecute,
					children,
					stopAnimate,
				}}
			>
				{props.children}
			</SettingContext.Provider>
		</div>
	);
};

export default SettingContextProvider;
