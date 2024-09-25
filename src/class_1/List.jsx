import { ListItem } from "./ListItem";
const List = ({ array }) => {
	return (
		<ul>
			{array.map(({ id, ...product }) => {
				return <ListItem key={id} content={product} />;
			})}
		</ul>
	);
};

export { List };
