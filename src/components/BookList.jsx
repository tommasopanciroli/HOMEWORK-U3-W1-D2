import HorrorList from '../data/books/horror.json'
import SingleBook from './SingleBook'

const BookList = () => {
  return( HorrorList.map((book) => {
   
    <SingleBook key={book.asin} book={book} />
  }))
}

export default BookList
