import type {GetAllProductDto} from "../../data/product/product.type.tsx";
import axios from "axios";

const baseUrl = "http://localhost:8080"


export async function getAllProduct() {
  const response = await axios.get<GetAllProductDto[]>(
    `${baseUrl}/public/products`
  );
  return response.data;
}