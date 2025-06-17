function SearchBar({value, onChange}){
    return(
        <form className="flex justify-center my-6">
            <input
            placeholder="Search for book title"
            type="text"
            value={value}
            onChange={onChange}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </form>
    )
}
export default SearchBar