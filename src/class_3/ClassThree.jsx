import { mockData } from "./mockData";
import { Table } from "./components/Table";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";

const ClassThree = ({ showClass }) => {
	const [products, setProducts] = useState(mockData);
	const [search, setSearch] = useState("");
	const [isInStock, setIsInStock] = useState(false);

	const handleSearch = (e) => {
		const text = e.target.value;
		setSearch(text);
	};

	return (
		<div
			style={{
				display: showClass === "class-three" ? "flex" : "none",
				flexFlow: "column",
				gap: "1rem",
				marginTop: "5rem",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<SearchBar
				onCheckboxCheck={() => setIsInStock(!isInStock)}
				filterInStock={isInStock}
				onInputChange={handleSearch}
			/>
			<Table items={products} filterInStock={isInStock} filterByText={search} />
		</div>
	);
};

export { ClassThree };
