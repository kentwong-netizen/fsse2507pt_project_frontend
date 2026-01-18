import {Table} from "react-bootstrap";
import ShoppingCartTableRow from "./ShoppingCartTableRow.tsx";
import type {CartItemDto} from "../../../../data/cartItem/cartItem.type.ts";

interface Props {
  dtoList: CartItemDto[];
}

export default function ShoppingCartTable({dtoList}:Props) {
  return(
    <Table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
      {
        dtoList.map(
          (dto) => (
            <ShoppingCartTableRow dto={dto}/>
          )
        )
      }
      </tbody>
    </Table>
  )
}