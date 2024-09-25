import { useState } from "react";
import { MyButton } from "./MyButton";
import { ClassOne } from "./ClassOne";
import { ClassTwo } from "./ClassTwo";

const App = () => {
	const [display, setDisplay] = useState("");

	const handleSwitchClass = (e) => {
		const showClassNumber = e.target.name;
		setDisplay(showClassNumber);
	};

	return (
		<>
			<MyButton handleClick={handleSwitchClass} buttonName="class-one" />
			<MyButton handleClick={handleSwitchClass} buttonName="class-two" />
			<ClassOne showClass={display} />
			<ClassTwo showClass={display} />
		</>
	);
};

export { App };
