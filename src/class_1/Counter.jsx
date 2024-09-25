import { useState } from "react";
import { MyButton } from "./MyButton";

const Counter = () => {
	const [times, setTimes] = useState(0);

	const handleClick = () => {
		const incrementCount = times + 1;
		setTimes(incrementCount);
	};

	return (
		<div>
			<div>you clicked</div>
			<div>{times}</div>
			<MyButton buttonName="Click" handleClick={handleClick} />
		</div>
	);
};

export { Counter };
