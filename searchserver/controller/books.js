const BooksRouter = require("express").Router();
const Book = require("../model/books");

const getBooks = async (request, response) => {
  const books = await Book.find({});
  response.json(books)
}

BooksRouter.get("/", getBooks);

const getSingleBook = async (request, response) => {
  const id = request.params.id;

  const book = await Book.findById(id);

  if(book) response.json(book);
  else response.status(404).end();
}

BooksRouter.get("/:id", getSingleBook);

const addBooks = async(request, response) => {
  const body = request.body;

  const book = new Book({
    title: body.title,
    author: body.author,
    year: body.year,
    category: body.category,
    price: body.price
  })

  const savedBook = await book.save()
  response.status(201).json(savedBook);
}

BooksRouter.post("/", addBooks);

const updateBookRecord = async (request, response) => {
  const id = request.params.id;
  const body = request.body;

  const bookUpdate = await Book.findByIdAndUpdate(id,
    body,
    { new: true, runValidators: true, context: "query" })
  
  if(bookUpdate) {
    response.json(bookUpdate)
  } else {
    response.status(404).end()
  }
}

BooksRouter.put("/:id", updateBookRecord);

const deleteBookRecord = async (request, response) => {
  const id = request.params.id;

  await Book.findByIdAndRemove(id);

  const books = await Book.find({});

  response.status(204).json(books)
}

BooksRouter.delete("/:id", deleteBookRecord);


module.exports = BooksRouter;