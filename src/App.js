import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
// import Book from './components/Book'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import BooksDisplay from './components/BooksDisplay'
import Footer from './components/Footer'

//import { RSA_NO_PADDING } from 'constants';\

class App extends Component {
  constructor () {
    super()
    this.state = {
      books: [],
      editing: false
    }  
  }
  componentDidMount() {
    axios.get("/api/books")
    .then( res => {
    console.log('Got books')
    this.setState({books: res.data})
    })
    .catch(err => console.log('err', err))
  }

  updateBookList = (newBookList) => {
    this.setState({books: newBookList })
  }

  deleteBook = id => {
    axios
    .delete(`/api/books/${id}`)
    .then (res => {
        console.log('resdelete', res.data)
        this.setState({books: res.data})
    })
    .catch(err => console.log('err no delete', err))
}
  setEditing = id => {
    console.log('hit editing function')
    let book = this.props.books.find(book => book.id === +id)
    this.setState({
      editing: true,
      currentBook: book
    })
  }

  updateBook = (id, updatedBook) => {
    axios
    .put(`/api/books/${id}`, updatedBook)
    .then(res => {
      this.setState({
        
        books: res.data,
        setEditing: false
      }) 
    })
    .catch(err => console.log('error updating', err))
  }




  render() {
  return (
    <div className="App">
      <Header />
      
      <Sidebar className="sideBar" updateBookList={this.updateBookList}/>
      <BooksDisplay  bookList={this.state.books} 
      deleteBook={this.deleteBook} 
      setEditing={this.setEditing}
      updateBook={this.updateBook}/>
      
      {/* <Book deleteBook={this.deleteBook}/> */}
      <Footer />
  </div>
  )}
}

export default App
