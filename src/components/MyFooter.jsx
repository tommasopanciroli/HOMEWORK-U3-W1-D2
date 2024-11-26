import { CardLink, ListGroup } from 'react-bootstrap'
const MyFooter = (props) => {
  return (
    <ListGroup
      horizontal
      className="justify-content-center fixed-bottom"
      bg="secondary"
    >
      <ListGroup.Item>
        <CardLink href="www.epicode.com">Epicode©</CardLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <CardLink href="https://www.instagram.com/tommaso.panciroli/">
          Instagram
        </CardLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <CardLink href="#">Contacts</CardLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <CardLink href="https://www.google.it/maps/place/00049+Velletri+RM/@41.661418,12.6960833,12z/data=!3m1!4b1!4m6!3m5!1s0x13259d3837d7c5e3:0x55f6bd41422d989d!8m2!3d41.6835242!4d12.7783715!16zL20vMDRid2M0?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
          Find Us
        </CardLink>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default MyFooter
