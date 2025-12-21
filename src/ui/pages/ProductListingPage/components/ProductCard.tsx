import {Button, Card} from "react-bootstrap";
import type {GetAllProductDto} from "../../../../data/product/product.type.ts";
import {Link} from "@tanstack/react-router";

interface Props {
  getAllProductDto : GetAllProductDto;
}

export default function ProductCard({getAllProductDto}: Props) {
  return (
    <Card style={{ width: '18rem' }}>
      <div className="d-flex justify-content-center">
        <div
          style={{
          width: 250,
          height: 200,
          backgroundImage:`url(${getAllProductDto.imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain"
        }}
      >
      </div>
      </div>
      <Card.Body>
        <Card.Title style={{height:"6rem"}}>{getAllProductDto.name}</Card.Title>
        <Card.Text style={{height:"3rem"}}>
          ${getAllProductDto.price.toLocaleString()}<br/>
          {getAllProductDto.hasStock?"有貨":"賣曬啦"}
        </Card.Text>
        <Link to={"/product/$productId"} params={{productId: getAllProductDto.pid.toString()}}></Link>
        <Button variant="primary">Detail</Button>

      </Card.Body>
    </Card>
  );
}