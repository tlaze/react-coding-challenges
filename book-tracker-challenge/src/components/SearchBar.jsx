function SearchBar({value, onChange}){
    return(
        <form>
            <input
            placeholder="Search for book title"
            type="text"
            value={value}
            onChange={onChange}
            />
        </form>
    )
}
export default SearchBar