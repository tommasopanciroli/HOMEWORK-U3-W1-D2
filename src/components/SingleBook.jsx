import { Col, Card, Button } from 'react-bootstrap'


const SingleBook = (props) => {
    const libri = props.libro
  return (
    <>
      <Col className="col-12 col-md-6 col-lg-3">
        <Card style={{ margin: '1em' }}>
          <Card.Img variant="top" src={libri.img} alt={libri.title} />
          <Card.Body>
            <Card.Title>{libri.title}</Card.Title>
            <Card.Text>Price €{libri.price}</Card.Text>
            <Button variant="primary">Add Chart</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default SingleBook
