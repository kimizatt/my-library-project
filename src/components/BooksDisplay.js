import React, {Component} from 'react'
import Book from "./Book"
import axios from 'axios'

class BooksDisplay extends Component {
    constructor (props) {
        super()
        
    }
    

    render () {
        let bookDisplay=this.props.bookList.map(book => {
            return (
                <div className="book-container"><Book 
                key={book.id} 
                image={book.image}
                title={book.title} 
                author={book.author}
                genre={book.genre}
                rating={book.rating}
                />
                </div>
        )})
            
        return (
        <div id="booksDisplay">
            {bookDisplay}
            
        </div>   
    )}
}
export default BooksDisplay