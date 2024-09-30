import { useState } from "react";
import { MyButton } from "./class_1/MyButton";
import { ClassOne } from "./class_1/ClassOne";
import { ClassTwo } from "./class_2/ClassTwo";
import { ClassThree } from "./class_3/ClassThree";

const App = () => {
	const [display, setDisplay] = useState("class-three");

	const handleSwitchClass = (e) => {
		const showClassNumber = e.target.name;
		setDisplay(showClassNumber);
	};

	return (
		<>
			<MyButton handleClick={handleSwitchClass} buttonName="class-one" />
			<MyButton handleClick={handleSwitchClass} buttonName="class-two" />
			<MyButton handleClick={handleSwitchClass} buttonName="class-three" />
			<ClassOne showClass={display} />
			<ClassTwo showClass={display} />
			<ClassThree showClass={display} />
		</>
	);
};

export { App };
