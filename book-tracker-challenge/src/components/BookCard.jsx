function BookCard({key, author, title, year_published}){
    return(
        <div>
            <h3><strong>{title}</strong></h3>
            <h5><i>Author: {author}</i></h5>
            <p>Year Published: {year_published}</p>
        </div>
    )
}
export default BookCard