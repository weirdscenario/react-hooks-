import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">FAVOURITE MOVIES</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navbar1;