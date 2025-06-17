function BookCard({ id, author, title, year_published, read, onRead}){

    return(
        <div className={`p-4 rounded-lg shadow-md border border-gray-200 mb-4 max-w-md mx-auto ${read ? 'bg-red-200 border-red-500' : 'bg-green-200 border-green-500'}`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
            <h5 className="text-sm text-gray-600 mb-2">Author: {author}</h5>
            <p className="text-sm text-gray-500 mb-2">Year Published: {year_published}</p>
            <button
                onClick={() => onRead(id)}
                className="px-4 py-2 rounded font-semibold transition-colors bg-gray-400 text-white hover:bg-blue-400"
            >
                {read ? 'Read' : 'Not Read Yet' }
            </button>
        </div>
    )
}
export default BookCard