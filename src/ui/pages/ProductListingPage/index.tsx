import TopNavBar from "../../components/TopNavBar";
import ProductCardContainer from "./components/ProductCardContainer.tsx";
import {useEffect, useState} from "react";
import type {GetAllProductDto} from "../../../data/product/product.type.tsx";

import mockdata from "./response.json";
import LoadingContainer from "../../components/LoadingContainer";


export default function ProductListingPage() {

  const [getAllProductDtolist, setGetAllProductDtolist] = useState<GetAllProductDto[] | undefined > (undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setGetAllProductDtolist(mockdata);
    setIsLoading(false);
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