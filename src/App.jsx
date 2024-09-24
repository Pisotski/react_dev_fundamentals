import { useState } from "react";
import { MyButton } from "./MyButton";
import { Profile } from "./Profile";
import { List } from "./List";

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

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogIn = () => {
		const newIsLoggedIn = !isLoggedIn;
		setIsLoggedIn(newIsLoggedIn);
	};

	return (
		<div
			style={{
				display: "grid",
				height: "50vh",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h1>My react app</h1>
			<MyButton handleClick={handleLogIn} />
			{isLoggedIn ? <Profile user={user} /> : <List array={products} />}
		</div>
	);
};

export { App };
