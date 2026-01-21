import TopNavBar from "../../components/TopNavBar";
import {Button, Container, Stack} from "react-bootstrap";
import QuantitySelector from "../../components/QuantitySelector";
import {useContext, useEffect, useState} from "react";
import type {ProductDto} from "../../../data/product/product.type.ts";

import LoadingContainer from "../../components/LoadingContainer";
import {useNavigate, useParams} from "@tanstack/react-router";
import {getProductByPid} from "../../../api/product/productApi.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.tsx";
import {putCartItem} from "../../../api/cartItem/cartItemApi.ts";

export default function ProductDetailPage() {

  const [productDto, setProductDto] = useState<ProductDto | undefined>(undefined);
  const [isLoading] = useState(true);

  const loginUser = useContext(LoginUserContext);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isAddSuccess, setIsAddSuccess] = useState(false);

  const {productId} = useParams({from: "/product/$productId"});
  const navigate = useNavigate({from: "/product/$productId"});

  const [quantity, setQuantity] = useState(1);
  const handleQuantityMinusOne = () => {
    if (quantity > 1) {
      setQuantity((prevState) => (prevState - 1))
    }
  }
  const handleQuantityPlusOne = () => {
    if (productDto && quantity < productDto.stock) {
      setQuantity((prevState) => (prevState + 1))
    }
  }

  const handlePutCartItem = async () => {
    if(loginUser === null) {
      navigate({to:"/login"})
    } else if (loginUser){
      try{
        if(productDto){
          setIsAddingToCart(true);
          await putCartItem(productDto.pid, quantity);
          setIsAddingToCart(false);
          setIsAddSuccess(true);

          setTimeout(
            () => {
              setIsAddSuccess(false);
            }, 2000
          )
        }
      } catch {
        navigate({to:"/error"})
      }
    }
  }

  useEffect(() => {

    const fetchProductByPid = async () => {
      try {
        const responseData = await getProductByPid(productId);
        // @ts-ignore
        setProductDto(responseData);
      } catch {
        navigate({to: "/error"});
      }
    }
      fetchProductByPid();
    }, []);

    const renderAddToCartBtn = () => {
      if(productDto && productDto.stock > 0){

        if(isAddSuccess){
          return(
            <Button className="ms-2" variant="success" disabled> 搞掂啦!!</Button>
          )
        }

        if(isAddingToCart){
          return (
            <Button className="ms-2" disabled> 幫緊你 ~~ </Button>
          )
        }


        return (
          <Button className="ms-2" onClick={handlePutCartItem} > 加入購物車 </Button>
        )
      } else {
        return (
          <Button variant="danger" disabled className="ms-2">賣哂啦!!</Button>
        )
      }
    }

    return (
      <>
        <TopNavBar/>
        {
          productDto && !isLoading
            ? (
              <Container>
                <img src={productDto.imageUrl}
                />
                <h3>{productDto.name}</h3>
                <h5>{productDto.price.toLocaleString()}</h5>
                <h5 style={{whiteSpace: "pre-line"}}>
                  {productDto.description}
                </h5>

                <Stack direction="horizontal">
                  <QuantitySelector quantity={quantity}
                                    handleQuantityPlusOne={handleQuantityPlusOne}
                                    handleQuantityMinusOne={handleQuantityMinusOne}
                  />
                  {renderAddToCartBtn()}
                </Stack>

              </Container>

            ) : (
              <LoadingContainer/>
            )
        }
      </>
    )
  }