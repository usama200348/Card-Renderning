import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../assets/cuore'

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Cuore For Sale</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maiores.
        </Card.Text>
        <Button variant="primary">Search</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;