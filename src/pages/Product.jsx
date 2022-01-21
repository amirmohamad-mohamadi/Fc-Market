import React from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";

import products from "../products";

const Product = () => {
  const { id } = useParams();
  const product = products.find((item) => {
    return item._id === id;
  });

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        بازگست به صفحه اصلی
      </Link>
      <Row>
        <Col lg={6}>
          <Image src={product.image} />
        </Col>
        <Col lg={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col ls={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Button>افزودن به سبد خرید</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
