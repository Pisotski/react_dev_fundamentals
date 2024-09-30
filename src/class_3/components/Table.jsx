import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

const Table = ({ items, filterInStock, filterByText }) => {
	const rows = [];
	let lastCategory = null;
	items.forEach(({ category, name, price, stocked }) => {
		if (name.toLowerCase().indexOf(filterByText.toLowerCase()) === -1) {
			return;
		}
		if (filterInStock && !stocked) {
			return;
		}
		if (lastCategory !== category) {
			rows.push(<ProductCategoryRow category={category} key={category} />);
		}

		rows.push(
			<ProductRow key={name} name={name} price={price} stocked={stocked} />
		);

		lastCategory = category;
	});

	return (
		<table
			style={{
				width: "50vw",
			}}
		>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

export { Table };
