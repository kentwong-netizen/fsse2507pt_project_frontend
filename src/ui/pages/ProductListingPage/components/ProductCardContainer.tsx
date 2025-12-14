import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard.tsx";
import type {GetAllProductDto} from "../../../../data/product/product.type.tsx";

interface Props{
  getAllProductDtoList: GetAllProductDto[];
}

export default function ProductCardContainer({getAllProductDtoList}:Props) {
  return (
    <>
      <Row>
        {
          getAllProductDtoList.map( (dto) =>(
            <Col
                className="d-flex justify-content-center my-2"
                xs={12} md={6} lg={4} xl={3}>
              <ProductCard getAllProductDto={dto}/>
            </Col>
            )
          )
        }
      </Row>
    </>
  )
}