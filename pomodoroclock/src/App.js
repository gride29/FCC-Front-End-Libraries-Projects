import Button from "./components/Button";
import "./App.css";
import SetPomodoro from "./components/SetPomodoro";
import React, { useEffect, useContext } from "react";
import { SettingContext } from "./context/SettingsContext";
import CountdownAnimation from "./components/CountdownAnimation";

function App() {
	const {
		pomodoro,
		executing,
		startAnimate,
		children,
		startTimer,
		pauseTimer,
		updateExecute,
		setCurrentTimer,
		SettingsButton,
	} = useContext(SettingContext);

	useEffect(() => {
		updateExecute(executing);
	}, [executing, startAnimate]);

	return (
		<div className="container">
			<h1>Pomodoro Timer</h1>
			{pomodoro !== 0 ? (
				<>
					<ul className="labels">
						<li>
							<Button
								title="Pomodoro"
								activeClass={
									executing.active === "work" ? "active-label" : undefined
								}
								_callback={() => setCurrentTimer("work")}
							/>
						</li>
						<li>
							<Button
								title="Short Break"
								activeClass={
									executing.active === "short" ? "active-label" : undefined
								}
								_callback={() => setCurrentTimer("short")}
							/>
						</li>
						<li>
							<Button
								title="Long Break"
								activeClass={
									executing.active === "long" ? "active-label" : undefined
								}
								_callback={() => setCurrentTimer("long")}
							/>
						</li>
					</ul>
					<Button title="Settings" _callback={SettingsButton} />
					<div className="timer-container">
						<div className="time-wrapper">
							<CountdownAnimation
								key={pomodoro}
								timer={pomodoro}
								animate={startAnimate}
							>
								{children}
							</CountdownAnimation>
						</div>
					</div>
					<div className="button-wrapper">
						<Button
							title="Start"
							activeClass={!startAnimate ? "active" : undefined}
							_callback={startTimer}
						/>
						<Button
							title="Pause"
							activeClass={startAnimate ? "active" : undefined}
							_callback={pauseTimer}
						/>
					</div>
				</>
			) : (
				<SetPomodoro />
			)}
		</div>
	);
}

export default App;
