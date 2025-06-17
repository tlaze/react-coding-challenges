const FilterBar = ({value, onInputChange}) => {
    return(
        <input
            type="text"
            placeholder="Search for Breeds"
            value={value}
            onChange={onInputChange}
        />
    )
}
export default FilterBar