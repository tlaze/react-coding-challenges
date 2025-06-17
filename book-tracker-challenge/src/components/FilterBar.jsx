function FilterBar({readStatus, handleReadStatus}){
    const categories = ["All", "Read", "Not Read"];
    return(
        <div>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={()=> handleReadStatus(category)}
                >
                {category}
                </button>
            ))}
        </div>
    )
}
export default FilterBar