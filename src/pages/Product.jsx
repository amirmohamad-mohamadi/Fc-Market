import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

import productDetilAction from "../action/productAction";

const Product = () => {
  const dispatch = useDispatch();

  const productDetail = useSelector((state) => state.productDetail);
  const { loading, product } = productDetail;
  const { id } = useParams();

  useEffect(() => {
    dispatch(productDetilAction(id));
  }, [dispatch, id]);

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        بازگست به صفحه اصلی
      </Link>
      {loading ? (
        <h2>درحال پردازش</h2>
      ) : (
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
      )}
    </div>
  );
};

export default Product;
