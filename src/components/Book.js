import React, {Component} from 'react'


class Book extends Component {
    constructor (props) {
        super ()
        this.state = {
            
        }
    
    }
    render () {
        let {title, author, genre, rating, image}= this.props
        return (
            <div>
                <img src={image} alt="book cover"/>
                <h3>{title}</h3>
                <h4>{author}</h4>
                <h4>{genre}</h4>
                <h4>{rating}</h4>
                <button >Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default Book