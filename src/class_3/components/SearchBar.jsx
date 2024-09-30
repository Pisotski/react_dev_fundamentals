const SearchBar = ({ filterInStock, onCheckboxCheck, onInputChange }) => {
	return (
		<>
			<form onChange={onInputChange}>
				<input placeholder="Search" />
			</form>
			<form>
				<input
					type="checkbox"
					id="display_available_items"
					checked={filterInStock}
					onChange={onCheckboxCheck}
				/>
				<label htmlFor="display_available_items">
					Display Only Available Items
				</label>
			</form>
		</>
	);
};

export { SearchBar };
