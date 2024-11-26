import { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import book from '../data/books/horror.json'

class AllTheBooks extends Component {
  render() {
    return (
        <div className='d-flex flex-wrap'> {book.map((libro)=>(
             <Card style={{ width: '18rem', margin: '1em' }} key={libro.asin}>
             <Card.Img variant="top" src={libro.img} alt={book.title}/>
             <Card.Body>
               <Card.Title >{libro.title}</Card.Title>
               <Card.Text>
                Price €{libro.price}
               </Card.Text>
               <Button variant="primary">Add Chart</Button>
             </Card.Body>
           </Card>
         ))}
        </div>
       );
     }}


export default AllTheBooks
