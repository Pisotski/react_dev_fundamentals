import { Profile } from "./Profile";
import { List } from "./List";
import { Counter } from "./Counter";
import { MyButton } from "./MyButton";
import { useState } from "react";

const user = {
	name: "Hedy Lamarr",
	imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
	imageSize: 90,
};

const products = [
	{ title: "Cabbage", isFruit: false, id: 1 },
	{ title: "Garlic", isFruit: false, id: 2 },
	{ title: "Apple", isFruit: true, id: 3 },
];

const ClassOne = ({ showClass }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogIn = () => {
		const newIsLoggedIn = !isLoggedIn;
		setIsLoggedIn(newIsLoggedIn);
	};
	return (
		<div
			style={{
				display: showClass === "class-one" ? "grid" : "none",
				height: "50vh",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h1>My react app</h1>
			<MyButton handleClick={handleLogIn} buttonName="Log In" />
			{isLoggedIn ? <Profile user={user} /> : <List array={products} />}
			<Counter />
			<Counter />
		</div>
	);
};

export { ClassOne };
