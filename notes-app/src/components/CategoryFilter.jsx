import React from 'react'

function CategoryFilter({ currentFilter, handleCategory }){
    const categories = ["All", "Work", "Personal", "Ideas", "Other"];
    return(
        <div>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategory(category)}
                    className={`px-3 py-1 rounded-full border ${currentFilter === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        {category}
                </button>
            ))}
        </div>
    )
}
export default CategoryFilter;