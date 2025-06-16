function SearchBar({value, onChange}) {
    return(
        <input
        type="text"
        placeholder="Search users..."
        value={value}
        onChange={onChange}
        />
    )
}
export default SearchBar;