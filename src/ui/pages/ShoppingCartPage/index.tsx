import {Button, Container} from "react-bootstrap";
import TopNavBar from "../../components/TopNavBar";
import ShoppingCartTable from "./components/ShoppingCartTable.tsx";

// import mockData from "./response.json";
import {useContext, useEffect, useState} from "react";
import type {CartItemDto} from "../../../data/cartItem/cartItem.type.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.tsx";
import {useNavigate} from "@tanstack/react-router";
import {getUserCart} from "../../../api/cartItem/cartItemApi.ts";
import LoadingContainer from "../../components/LoadingContainer";

export default function ShoppingCartPage() {

  const [dtoList , setDtoList] = useState<CartItemDto[] | undefined>(undefined);

  const loginUser = useContext(LoginUserContext);
  const navigate = useNavigate({from:"/shoppingcart"})

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        const responseData = await getUserCart();
        setDtoList(responseData)
        setIsLoading(false);
      } catch {
        navigate({to: "/error"})
      }
    }

    if(loginUser){
      fetchUserCart();
    } else if (loginUser === null) {
      navigate({to:"/login"})
    }
  }, [loginUser]);


  const caltotal = (dtoList: CartItemDto[]) =>{

    const addPrice = (total:number ,dto:CartItemDto) => (
      total + dto.cartQuantity * dto.price
    )

    return dtoList.reduce(addPrice, 0)
  }

  const renderShoppingCart = () => {
    if(!isLoading && dtoList){

      if(dtoList.length === 0) {
        return <h1>Your shopping cart is empty~</h1>
      } else {
        return (
          <>
            <ShoppingCartTable dtoList={dtoList}/>
            <h2>Total : $ {caltotal(dtoList).toLocaleString()}</h2>
            {/*<Button>Submit!!</Button>*/}
            <Button><h3>Submit!!</h3></Button>
          </>
        )
      }
    } else {
      return <LoadingContainer/>
    }
  }

  return(
    <>
    <TopNavBar/>
      <Container className="mb-5">
        <h1 className="mb-3">Shopping Cart</h1>
        {
          renderShoppingCart()
        }
      </Container>
    </>
  )
}