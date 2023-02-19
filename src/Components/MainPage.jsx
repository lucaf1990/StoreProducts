import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs={9}>
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Link to="/OurShop">
        <Container className="mt-5 mb-5">
          <Row>
            <Col xs={12}>
              <Card className="bg-dark text-white ">
                <Card.Img
                  src="https://media.istockphoto.com/id/1208196500/it/vettoriale/set-orizzontale-di-schizzi-bianchi-e-colorati-di-vari-elettrodomestici.jpg?b=1&s=170667a&w=0&k=20&c=wSlP9e2-9nBS3xsuvObdJA0HnxBG8IfvDCidk0CFEHU="
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title
                    className="mt-3 ms-3"
                    style={{ color: "black", fontSize: "2rem" }}
                  >
                    Visit our Store
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </Link>
      <Container>
        <Row>
          <Col xs={9}>
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MainPage;
