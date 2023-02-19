import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const FetchData = () => {
  const myProducts = useSelector((state) => state.products?.product);

  const dispatch = useDispatch();

  const myfetch = async () => {
    try {
      let res = await fetch("https://dummyjson.com/products/");
      if (res.ok) {
        let data = await res.json();

        dispatch({
          type: "PRODUCTS_WE_SELL",
          payload: data,
        });
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error, "catch error");
    }
  };
  useEffect(() => {
    myfetch();
  }, []);

  return (
    <>
      {myProducts?.products?.slice(0, 28).map((prod) => (
        <Col xs={3} className="mt-5" key={prod.id}>
          <Link
            to={`/Specific/${prod.id} `}
            onClick={() => {
              dispatch({
                type: "PRODUCT_ID",
                payload: [prod],
              });
            }}
            variant="dark"
          >
            <Card id="fetchCard" className="h-100 w-100">
              <Card.Img
                style={{
                  height: "10rem",
                  padding: "5px",
                  borderRadius: "20px",
                }}
                variant="top"
                src={prod.images[0]}
              />
              <Card.Body className="d-flex flex-column align-items-around justify-content-between">
                <Card.Title>{prod.title}</Card.Title>
                <Container className="d-flex flex-column align-items-start">
                  <Card.Text>{prod.brand}</Card.Text>
                  <Card.Text>{prod.category}</Card.Text>
                  <Card.Text>{prod.description}</Card.Text>
                </Container>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </>
  );
};
export default FetchData;
