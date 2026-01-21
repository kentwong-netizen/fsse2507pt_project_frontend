import axios from "axios";
import type {CartItemDto} from "../../data/cartItem/cartItem.type.ts";
import {getAuthConfig} from "../../authService/FirebaseAuthService.ts";

export async function getUserCart() {
  const response = await axios.get<CartItemDto[]>(
    `http://localhost:8080/cart/items`,
    await getAuthConfig()
  );
  return response.data
}

export async function putCartItem(pid:number,number:number) {
  const response = await axios.put(
    `http://localhost:8080/cart/items/${pid}/${number}`,
    undefined,
    await getAuthConfig()
  );
  return response.data;
}