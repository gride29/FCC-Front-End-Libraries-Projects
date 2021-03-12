import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingContext } from "../context/SettingsContext";

const CountdownAnimation = ({
	key = 1,
	timer = 20,
	animate = true,
	children,
}) => {
	const { stopAnimate } = useContext(SettingContext);

	return (
		<CountdownCircleTimer
			key={key}
			isPlaying={animate}
			duration={timer * 60}
			colors={[
				["#c9ccea", 0.33],
				["#c9ccea", 0.33],
				["#c9ccea", 0.33],
			]}
			strokeWidth={6}
			size={220}
			trailColor="#151932"
			onComplete={() => {
				stopAnimate();
			}}
		>
			{children}
		</CountdownCircleTimer>
	);
};

export default CountdownAnimation;
