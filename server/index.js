const express = require('express')
require('dotenv').config({path:__dirname+ `/../.env`})
const {SERVER_PORT}= process.env
const bc = require('./controllers/booksController')

const app = express()
app.use(express.json())

app.get('/api/books', bc.books)
app.put('/api/books/:id', bc.updateBook)
app.post('/api/books', bc.addBook)
app.delete('/api/books/:id', bc.deleteBook)


app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}` )
})