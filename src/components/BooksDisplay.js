import React, {Component} from 'react'
import Book from "./Book"


class BooksDisplay extends Component {
    constructor (props) {
        super()
        
    }
    

    render () {
        console.log(this.props)
        let booksDisplay=this.props.bookList.map(book => {
            return (
            
                <div className="book-container">  
                <Book 
                key={book.id}
                id= {book.id} 
                image={book.image}
                title={book.title} 
                author={book.author}
                genre={book.genre}
                rating={book.rating}
                deleteBook={this.props.deleteBook}
                updateBook={this.props.updateBook}
                setEditing={this.props.setEditing}
                />
                </div>  
        )})
            
        return (
        <div id="booksDisplay">
            {booksDisplay}
        </div>
    )
}
}
export default BooksDisplay