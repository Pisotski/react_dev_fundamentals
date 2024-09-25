const Row = ({ column, rowIndex, handleClick }) => {
	return (
		<div
			style={{
				display: "flex",
				width: "100%",
			}}
		>
			{column.map((el, elIndex) => {
				return (
					<span
						data-coordinates={`${rowIndex}${elIndex}`}
						key={`${rowIndex}${elIndex}`}
						style={{
							minWidth: "40px",
							minHeight: "40px",
							border: "white solid 1px",
							display: "grid",
							justifyContent: "center",
							alignItems: "center",
						}}
						onMouseUp={handleClick}
					>
						{el && `${el}`}
					</span>
				);
			})}
		</div>
	);
};

export { Row };
