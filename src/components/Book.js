import React, {Component} from 'react'
// import axios from 'axios';

class Book extends Component {
    constructor (props) {
        super (props)
        this.state = {
            editing: false ,
            title: props.title,
            author: props.author,
            rating: props.rating
            
        }
    }

    flipEdit = (id) => {
        // let book = this.state.books.find(book => book.id === +id)
        this.setState({editing: !this.state.editing})
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({[name]: value})
    }

    formatUpdatedBook = () => {
        let updatedBook = {
            title: this.state.title,
            author: this.state.author,
            genre: this.props.genre,
            image: this.props.image,
            rating: this.state.rating,
            id: this.props.id
        }
        this.props.updateBook(this.props.id, updatedBook)
        this.flipEdit()

    }

    render () {
        let { title, author, genre, rating, image}= this.props
        let {editing} = this.state
        console.log(typeof rating)
        if(typeof rating=== "number") {
            rating = '\u2b50'.repeat(rating)
        }
        return (
            <div >
                
                <div className="book-contents">
                <img src={image} alt="book cover"/>
                <h3><em>{title}</em></h3>
                <h4 className="author">{author}</h4>
                <h5 className="genre">{genre}</h5>
                <p>{rating}</p>
                </div>
                <div id="button-container">
                <button id="edit-button" onClick={ this.flipEdit} >Edit</button>
                <button id="delete-button" onClick = {()=> this.props.deleteBook(this.props.id)}>Delete</button>
                </div>
                {editing ? (
                    <div className="modal" >
                    <input name="title" value={this.state.title} onChange={e => this.handleChange(e)} />
                    <input name="author" value={this.state.author} onChange={e => this.handleChange(e)}/>
                    <input name="rating" value={this.state.rating} onChange={e => this.handleChange(e)}/>
                    <button onClick={()=> this.formatUpdatedBook()}>Update Book</button></div>
                    
                ) : null}
            </div>
        )
    }
}

export default Book