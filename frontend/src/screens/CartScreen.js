import { useEffect } from "react";
import {
  useDispatch,
  //    useSelector
} from "react-redux";
// import { Link } from "react-router-dom";
// import {
//   Card,
//   Row,
//   Col,
//   Image,
//   ListGroup,
//   Button,
//   Form,
// } from "react-bootstrap";

// import Message from "../components/Message";
import { addToCart } from "../actions/cartAction";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const dispatch = useDispatch();

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>Hello</div>;
};

export default CartScreen;
