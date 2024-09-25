const ListItem = ({ content: { title, isFruit } }) => {
	return <li style={{ color: isFruit ? "magenta" : "darkgreen" }}>{title}</li>;
};

export { ListItem };
