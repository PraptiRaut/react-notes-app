function SearchBar({ searchText, setSearchText }) {
    return (
        <input
            type="text"
            className="search-input"
            placeholder="Search notes..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
        />
    );
}

export default SearchBar;