import TopNavBar from "../../components/TopNavBar";
import ProductCardContainer from "./components/ProductCardContainer.tsx";
import {useEffect, useState} from "react";
import type {GetAllProductDto} from "../../../data/product/product.type.ts";

//import mockdata from "./response.json";
import LoadingContainer from "../../components/LoadingContainer";
import {getAllProduct} from "../../../api/product/productApi.ts";
import {useNavigate} from "@tanstack/react-router";


export default function ProductListingPage() {

  const [getAllProductDtolist, setGetAllProductDtolist] = useState<GetAllProductDto[] | undefined > (undefined);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate(({from:"/"}));

  useEffect(() => {
  const fetchAllProduct = async () => {
    try{
      const responseData = await getAllProduct();
      setGetAllProductDtolist(responseData);
      setIsLoading(false);
    } catch {
      navigate({to:"/error"});
    }
  }
    fetchAllProduct();
  }, []);

  return (
    <>
      <TopNavBar/>
      {
        getAllProductDtolist && !isLoading
        ? <ProductCardContainer getAllProductDtoList={getAllProductDtolist}/>
          : <LoadingContainer/>
      }
    </>
  )
}