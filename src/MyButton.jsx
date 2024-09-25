const MyButton = ({ handleClick, buttonName }) => {
	return (
		<button name={buttonName} onMouseDown={handleClick}>
			{buttonName}
		</button>
	);
};

export { MyButton };
