import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Book from './components/Book'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import BooksDisplay from './components/BooksDisplay'

class App extends Component {
  constructor () {
    super()
    this.state = {
      books: []
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

  updateBookList = (newBookList) =>{
    this.setState({books: newBookList })
  }

  render() {
  return (
    <div className="App">
      <Header />
      <Sidebar className="sideBar" updateBookList={this.updateBookList}/>
      <BooksDisplay  bookList={this.state.books}/>
    
  </div>
  )}
}

export default App
