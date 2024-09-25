import { useState } from "react";
import { MyButton } from "./class_1/MyButton";
import { ClassOne } from "./class_1/ClassOne";
import { ClassTwo } from "./class_2/ClassTwo";

const App = () => {
	const [display, setDisplay] = useState("class-two");

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
