import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard.tsx";

export default function ProductCardContainer() {
  return (
    <>
      <Row>
        {
          Array.from({length:11}).map(() =>(
            <Col
                className="d-flex justify-content-center my-2"
                xs={12} md={6} lg={4} xl={3}>
              <ProductCard/>
            </Col>
            )
          )
        }
      </Row>
    </>
  )
}