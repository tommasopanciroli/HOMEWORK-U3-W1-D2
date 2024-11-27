import HorrorList from '../data/books/fantasy.json'
import SingleBook from './SingleBook'

// const BookList = () => {
//   return HorrorList.map((book) => <SingleBook key={book.asin} libri={book} />)
// }



const BookList = () => {
  return HorrorList.map((book) => <SingleBook key={book.asin} libro={book} />);
};



export default BookList
