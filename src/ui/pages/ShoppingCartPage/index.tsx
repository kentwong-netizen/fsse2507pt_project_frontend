import {Button, Container} from "react-bootstrap";
import TopNavBar from "../../components/TopNavBar";
import ShoppingCartTable from "./components/ShoppingCartTable.tsx";

import mockData from "./response.json";
import {useEffect, useState} from "react";
import type {CartItemDto} from "../../../data/cartItem/cartItem.type.ts";

export default function ShoppingCartPage() {

  const [dtoList , setDtoList] = useState<CartItemDto[] | undefined>(undefined);

  useEffect(() => {
    setDtoList(mockData);
  }, []);

  const caltotal = (dtoList: CartItemDto[]) =>{

    const addPrice = (total:number ,dto:CartItemDto) => (
      total + dto.cartQuantity * dto.price
    )

    return dtoList.reduce(addPrice, 0)
  }


  return(
    <>
    <TopNavBar/>
      <Container className="mb-5">
        <h1 className="mb-3">Shopping Cart</h1>
        {
          dtoList &&
          <>
          <ShoppingCartTable dtoList={dtoList}/>

          <h2>Total : $ {caltotal(dtoList).toLocaleString()}</h2>
          </>
        }


        {/*<Button>Submit!!</Button>*/}
        <Button><h3>Submit!!</h3></Button>
      </Container>
    </>
  )
}