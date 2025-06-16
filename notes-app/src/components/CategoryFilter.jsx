import React from 'react'

function CategoryFilter({ currentFilter, handleCategory }){
    const categories = ["All", "Work", "Personal", "Ideas", "Other"];
    return(
        <div>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategory(category)}>
                        {category}
                </button>
            ))}
        </div>
    )
}
export default CategoryFilter;