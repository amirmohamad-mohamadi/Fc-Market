import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import axios from "axios";
// import products from "../products";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const sendRequest = async () => {
      const response = axios.get(`http://localhost:8000/api/products/${id}`);

      setProduct((await response).data);
    };
    sendRequest();
  }, [id]);

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
