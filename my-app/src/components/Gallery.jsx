import {Container,Row,Col} from 'react-bootstrap'


function Gallery(){
  return (
    <div className="DivGalleryMain">
      
      <h1 className="TitleGallery">Galeria</h1>
      <Container>
        <Row>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row>

        <Row>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row>
      </Container>


    </div>
  );
};

export default Gallery;
