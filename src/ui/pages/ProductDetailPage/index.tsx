import TopNavBar from "../../components/TopNavBar";
import {Button, Container, Stack} from "react-bootstrap";
import QuantitySelector from "../../components/QuantitySelector";
import {useEffect, useState} from "react";
import type {ProductDto} from "../../../data/product/product.type.ts";

import LoadingContainer from "../../components/LoadingContainer";
import {useNavigate, useParams} from "@tanstack/react-router";
import {getProductByPid} from "../../../api/product/productApi.ts";

export default function ProductDetailPage() {

  const [productDto, setProductDto] = useState<ProductDto | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {

    const fetchProductByPid = async () => {
      try {
        const responseData = await getProductByPid(productId);
        // @ts-ignore
        setProductDto(responseData);
        setIsLoading(false);
      } catch {
        navigate({to: "/error"});
      }
    }


      fetchProductByPid();
    }, []);

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
                  <Button disabled={productDto.stock <= 0}> 加入購物車 </Button>
                </Stack>
              </Container>

            ) : (
              <LoadingContainer/>
            )
        }
      </>
    )
  }