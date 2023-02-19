import { useSelector } from "react-redux";

const Cart = () => {
  const detailsw = useSelector((store) => store?.product.selected);
  console.log(detailsw);
};
export default Cart;
