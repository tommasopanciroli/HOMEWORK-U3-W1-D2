import { Alert } from "react-bootstrap"

const MyWelcome = () => {
    return (
        <Alert variant="success">
      <Alert.Heading>Welcome to our library!</Alert.Heading>
      <p>
        Aww yeah, you successfully joined this place where you can find all the types of book you like to read. 
      </p>
      <hr />
      <p className="mb-0">
        Whatever you need to, contact us with the link below!
      </p>
    </Alert>
    )
}

export default MyWelcome