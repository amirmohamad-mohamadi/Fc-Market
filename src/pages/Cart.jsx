import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, ListGroup, Image, Button } from "react-bootstrap";

import { cartAction } from "../action/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  useEffect(() => {
    dispatch(cartAction(id));
  }, [dispatch, id]);

  const removeFromCartHandler = (id) => {
    console.log("REMOVE");
  };

  return (
    <div>
      <Row>
        <Col md={8}>
          <h2>سبد خرید</h2>
          {cartItems.lenght === 0 ? (
            <h2>سبدخرید خالی است</h2>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid />
                    </Col>
                    <Col md={3}>{item.name}</Col>
                    <Col md={2}>{item.price}</Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        onClick={() => removeFromCartHandler(item.product)}
                        variant="light"
                      >
                        <i className="fa fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
};

export default Cart;
