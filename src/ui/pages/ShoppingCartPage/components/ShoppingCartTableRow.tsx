import QuantitySelector from "../../../components/QuantitySelector";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import type {CartItemDto} from "../../../../data/cartItem/cartItem.type.ts";

interface Props {
  dto: CartItemDto
}

export default function ShoppingCartTableRow({dto}:Props) {
  return(
    <tr>
      <td>
        <img height="120" src={dto.imageUrl} alt="pic"/>
      </td>
      <td>
        {dto.name}
      </td>
      <td>
        ${dto.price.toLocaleString()}
      </td>
      <td>
        <QuantitySelector
          quantity={dto.cartQuantity}
          handleQuantityMinusOne={() =>{}}
          handleQuantityPlusOne={()=>{}}
        />
      </td>
      <td>
        ${(dto.price*dto.cartQuantity).toLocaleString()}
      </td>
      <td>
        <Button variant="danger">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  )
}