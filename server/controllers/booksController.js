const books = [
  {  
    id: 1, 
    title: "Pride and Prejudice",
    author: 'Jane Austen',
    genre: "Classic",
    rating: '⭐⭐⭐⭐⭐',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1487841905i/84979.jpg"
  },
  {
    id: 2,
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    genre: "Historical Fiction",
    rating: "⭐⭐⭐⭐",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1345958969i/128029.jpg"
  },
  {
    id: 3,
    title: "The Sweetness at the Bottom of the Pie",
    author: "Alan Bradley",
    genre: "Mystery, Historical",
    rating: "⭐⭐⭐⭐",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529610868i/40605285._SY475_.jpg"
  },
  {
    id: 4,
    title: "Rebecca",
    author: "Daphne du Maurier",
    genre: "Classic, Mystery",
    rating: '⭐⭐⭐⭐',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1409595845i/636993._SY75_.jpg"
  },
  {
    id: 5,
    title: "The Guernsey Literary and Potato Peel Pie Society",
    author: "Mary Ann Shaffer",
    genre: "Historical",
    rating: '⭐⭐⭐⭐⭐',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1351979318i/2728527._SY75_.jpg"
  },
  {
    id: 6,
    title: "A Tree Grows in Brooklyn",
    author: "Betty Smith",
    genre: "Classic, Historical",
    rating: '⭐⭐⭐⭐⭐',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327883484i/14891._SY75_.jpg"
  },
  {
    id: 7,
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    genre: "Memoir",
    rating: '⭐⭐⭐⭐',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386573716i/19306508._SY75_.jpg"
  },
  {
    id: 8,
    title: "Edenbrooke",
    author: "Juilanne Donaldson",
    genre: "Romance, Regency",
    rating: '⭐⭐⭐⭐⭐',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1371398291i/12820360._SX50_.jpg"
  },
  {
    id: 9,
    title: "Blink: The Power of Thinking Without Thinking",
    author: "Malcolm Gladwell",
    genre: "Non-fiction",
    rating: '⭐⭐⭐⭐',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440763417i/40102._SX50_.jpg"
  },
  {
    id: 10,
    title: "White Cat",
    author: "Holly Black",
    genre: "YA, Paranormal",
    rating: '⭐⭐⭐⭐⭐',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1358274572i/6087756._SY75_.jpg"
  },
  {
    id: 11,
    title: "Flipped",
    author: "Wendelin Van Draanen",
    genre: "YA",
    rating: '⭐⭐⭐⭐',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388554293i/331920._SY75_.jpg"
  },
  {
    id: 12,
    title: "A Wrinkle in Time",
    author: "Madeleine L'Engle",
    genre: "YA, Fantasy",
    rating: '⭐⭐',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1329061522i/18131._SX50_.jpg"
  },
  {
    id: 13,
    title: "Year of Wonders",
    author: "Geraldine Brooks",
    genre: "Historical",
    rating: '⭐⭐⭐',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327936622i/4965._SY75_.jpg"
  },
  {
    id: 14,
    title: "The Help",
    author: "Kathryn Stockett",
    genre: "Historical",
    rating: '⭐⭐⭐⭐⭐',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554195238i/4667024._SY75_.jpg"
  },
  {
    id: 15,
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    genre: "Classic",
    rating: '⭐⭐⭐⭐⭐',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344922523i/1953._SY75_.jpg"
  },
  {
    id: 16,
    title: "Precious Bane",
    author: "Mary Webb",
    genre: "Historical",
    rating: '⭐⭐⭐⭐⭐',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372298878i/779509._SX50_.jpg"
  }
]
let id = 20

module.exports = {
    books(req, res) {
      res.status(200).send(books)
    },
    addBook(req, res) {
      let {title, author, genre, rating, image} = req.body 
      console.log(rating)
      
      let newBook = {
        id: id,
        title,
        author,
        genre,
        rating: +rating,
        image
      }
      id++
      books.push(newBook)
      res.status(200).send(books)
    },
    updateBook(req,res) {
      
      let { id } = req.params
      let {title, author, genre, rating, image} = req.body
      let index = books.findIndex(book => book.id === +id)
      // let starRating = ""
      // let star = '\u2B50'
      //   if(+rating === 5) {starRating = star.repeat(5)} 
      //   else if (+rating === 4) {starRating = "⭐⭐⭐⭐"}
      //   else if (+rating === 3) {starRating = "⭐⭐⭐"}
      //   else if (+rating === 2) {starRating = "⭐⭐"}
      //   else if (+rating === 1) {starRating = "⭐"}
      //   console.log(starRating)
      let updatedBook = {
        title,
        author,
        genre,
        rating,
        image, 
        id: +id
      }
      books[index] = {...books[index], ...updatedBook}
      res.status(200).send(books)
    },


    deleteBook(req,res) {
      console.log('hit deleteBook', req.params)
      let { id } = req.params
      let index = books.findIndex(book => book.id === +id)

      index !== -1 && books.splice(index, 1)
      res.status(200).send(books)
    }

}