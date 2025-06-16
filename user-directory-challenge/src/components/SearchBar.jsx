function SearchBar({value, onChange}) {
    console.log(value)
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