function FilterBar({readStatus, handleReadStatus}){
    const categories = ["All", "Read", "Not Read"];
    return(
        <div className="flex justify-center gap-4 my-4">
            {categories.map((category) => (
                <button
                    className={`px-4 py-2 rounded font-semibold transition-colors ${readStatus === category ? 'bg-blue-600 text-white': 'bg-gray-200 text-gray-700 hover:bg-blue-100'}`}
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