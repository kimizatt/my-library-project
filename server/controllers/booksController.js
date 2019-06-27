const books = [
  {  
    id: 1, 
    title: "Pride and Prejudice",
    author: 'Jane Austen',
    genre: "Classics",
    rating: 5,
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1487841905i/84979.jpg"
  },
  {
    id: 2,
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    genre: "Historical Fiction",
    rating: 4,
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1345958969i/128029.jpg"
  }
  // {
  //   id: 2,
  //   title: "",
  //   author: "",
  //   genre: "",
  //   rating: 0,
  //   image: ""
  // },
  // {
  //   id: 2,
  //   title: "",
  //   author: "",
  //   genre: "",
  //   rating: 0,
  //   image: ""
  // },
  // {
  //   id: 2,
  //   title: "",
  //   author: "",
  //   genre: "",
  //   rating: 0,
  //   image: ""
  // },
  // {
  //   id: 2,
  //   title: "",
  //   author: "",
  //   genre: "",
  //   rating: 0,
  //   image: ""
  // },
  // {
  //   id: 2,
  //   title: "",
  //   author: "",
  //   genre: "",
  //   rating: 0,
  //   image: ""
  // },
  // {
  //   id: 2,
  //   title: "",
  //   author: "",
  //   genre: "",
  //   rating: 0,
  //   image: ""
  // },
  // {
  //   id: 2,
  //   title: "",
  //   author: "",
  //   genre: "",
  //   rating: 0,
  //   image: ""
  // },
  // {
  //   id: 2,
  //   title: "",
  //   author: "",
  //   genre: "",
  //   rating: 0,
  //   image: ""
  // },
  // {
  //   id: 2,
  //   title: "",
  //   author: "",
  //   genre: "",
  //   rating: 0,
  //   image: ""
  // },
  // {
  //   id: 2,
  //   title: "",
  //   author: "",
  //   genre: "",
  //   rating: 0,
  //   image: ""
  // },
  // {
  //   id: 2,
  //   title: "",
  //   author: "",
  //   genre: "",
  //   rating: 0,
  //   image: ""
  // },
  // {
  //   id: 2,
  //   title: "",
  //   author: "",
  //   genre: "",
  //   rating: 0,
  //   image: ""
  // },
  // {
  //   id: 2,
  //   title: "",
  //   author: "",
  //   genre: "",
  //   rating: 0,
  //   image: ""
  // },
  // {
  //   id: 2,
  //   title: "",
  //   author: "",
  //   genre: "",
  //   rating: 0,
  //   image: ""
  // }
]
let id = 20

module.exports = {
    books(req, res) {
      res.status(200).send(books)
    },
    addBook(req, res) {
      let {title, author, genre, rating, image} = req.body
      let newBook = {
        id: id,
        title,
        author,
        genre,
        rating,
        image
      }
      id++
      books.push(newBook)
      res.status(200).send(books)
    },
    updateRating(req,res) {

    },
    deleteBook(req,res) {

    }
}