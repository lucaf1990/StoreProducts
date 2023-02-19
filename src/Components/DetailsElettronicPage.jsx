import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DetailsElectronicPage = () => {
  const details = useSelector((store) => store?.products?.selected);
  console.log(details);
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();

  for (const product in details) {
    const element = details[product];
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={element.images[0]} />
          <Card.Body>
            <Card.Title>{element.title} </Card.Title>
            <Card.Text>{element.description}</Card.Text>
            <Link>
              {" "}
              <Button
                onClick={() => {
                  dispatch({
                    type: "INCREASE_BY_ONE",
                    payload: 0,
                  });
                }}
                variant="primary"
              >
                {element.price} $
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </>
    );
  }
};

export default DetailsElectronicPage;
