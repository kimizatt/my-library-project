import React, {Component} from 'react'
import axios from 'axios';


class Sidebar extends Component {
    constructor (props) {
    super(props)
    this.state = {
        books: [],
        title: '',
        author: '',
        genre: '',
        rating: '',
        image: '',
        filterString: ''
    }

    this.addBook = this.addBook.bind(this)
    }

    handleChange = e => {
        let {name, value}= e.target
        this.setState({[name]: value})
    }

    addBook = () => {
    let {title, author, genre, rating, image}= this.state
    console.log(title, author, genre, rating, image)    
    
    axios.post ('/api/books', {title, author, genre, rating, image})
            .then(res => {
            this.props.updateBookList(res.data)
            
    })
    
        .catch(err => console.log('err', err))
    } 

    handleSearch(filter) {
        this.setState({filterString: filter})
    }
 
    
    
    render () {
    

    return (
        <div id="sidebar">
        
            <div className="side-bar-container">
            <h4>Add a new book:</h4>
            <input onChange={e => this.handleChange(e)} name="title" className="addData" placeholder="Title"  />
            <input onChange={e => this.handleChange(e)} name="author" className="addData" placeholder="Author" />
            <input onChange={e =>this.handleChange(e)} name="genre" className="addData" placeholder="Genre" />
            <input onChange={e =>this.handleChange(e)} name="rating" className="addData" placeholder="Rating" />
            <input onChange={e =>this.handleChange(e)} name="image" className="addData" placeholder="Image" />
            <button onClick={this.addBook}  id="add-book" >Submit</button></div>

            {/* <div className="side-bar-container">
            <h4>Search for a book:</h4>
            <input className="searchData" placeholder="By title" onChange={e=>this.handleSearch(e.target.value)}/>
            <button>Search</button>
            <input className="searchData" placeholder="By author" onChange={e => this.handleSearch(e.target.value)} />
            <button>Search</button>
            <input className="searchData" placeholder="By genre" onChange={e=>this.handleSearch(e.target.value)}/>
            <button>Search</button>
            <input className="searchData" placeholder="By rating" onChange={e=>this.handleSearch(e.target.value)}/>
            <button>Search</button></div> */}

        

        </div>
    )
}
}

export default Sidebar