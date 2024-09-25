const ClassTwo = ({ showClass }) => {
	return (
		<div
			style={{
				display: showClass === "class-two" ? "grid" : "none",
				height: "50vh",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h1>My react app</h1>
		</div>
	);
};

export { ClassTwo };
