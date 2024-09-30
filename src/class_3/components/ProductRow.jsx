const ProductRow = ({ name, price, stocked }) => {
	return (
		<tr>
			<td
				style={{
					color: stocked ? "lightgreen" : "red",
				}}
			>
				{name}
			</td>
			<td>{price}</td>
		</tr>
	);
};

export { ProductRow };
