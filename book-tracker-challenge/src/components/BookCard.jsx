function BookCard({id, author, title, year_published, read, onRead}){
    return(
        <div>
            <h3><strong>{title}</strong></h3>
            <h5><i>Author: {author}</i></h5>
            <p>Year Published: {year_published}</p>
            <button
                onClick={() => onRead(id)}
            >
                {read ? 'Read' : 'Not Read Yet' }
            </button>
        </div>
    )
}
export default BookCard