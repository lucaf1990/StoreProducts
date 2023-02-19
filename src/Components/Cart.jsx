import { Table, Image, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
const Cart = () => {
  const selectedProds = useSelector((store) => store?.cart.selectedProds);

  return (
    <Container className="mt-5">
      <Table className="bg-light" striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {selectedProds.map((prod) => (
            <tr key={prod.id}>
              <td>
                <Image
                  style={{ width: "100px" }}
                  src={prod.images[0]}
                  alt={prod.title}
                  thumbnail
                />
              </td>
              <td>
                <h5>{prod.title}</h5>
                {"    "}
                <h3>{prod.description}</h3>
              </td>
              <td style={{ width: "100px" }}>{prod.price} $ </td>
            </tr>
          ))}
          <tr>
            <td colSpan="2">Total:</td>
            <td>
              {selectedProds.reduce((total, prod) => total + prod.price, 0)} €
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;
