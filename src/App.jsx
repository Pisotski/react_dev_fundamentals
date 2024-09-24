import { useState } from "react";
import { MyButton } from "./MyButton";
import { Profile } from "./Profile";
const user = {
	name: "Hedy Lamarr",
	imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
	imageSize: 90,
};

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
			{isLoggedIn ? <Profile user={user} /> : <>please log in</>}
		</div>
	);
};

export { App };
