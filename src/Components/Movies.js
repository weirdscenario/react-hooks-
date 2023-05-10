import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Movies = ({ title, year, genre, poster}) => {
 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={poster} style={{ objectFit: 'cover', height: '400px' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{genre}</ListGroup.Item>
        <ListGroup.Item>{year}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
  <Card.Link href='#' class="trailer-button" >Watch trailer</Card.Link>
  <Card.Link href="#" class="revenues-button">Revenues</Card.Link>
</Card.Body>
    </Card>
  );
}

export default Movies; 
