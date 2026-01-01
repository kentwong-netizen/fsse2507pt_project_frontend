import QuantitySelector from "../../../components/QuantitySelector";

export default function ShoppingCartTableRow() {
  return(
    <tr>
      <td>
        <img src="https://www.price.com.hk/space/product/188000/188938_9oujbm_4.jpg" alt="pic"/>
      </td>
      <td>
        SmartTV
      </td>
      <td>
        $1800.00
      </td>
      <td>
        <QuantitySelector
          quantity={5}
          handleQuantityMinusOne={() =>{}}
          handleQuantityPlusOne={()=>{}}
        />
      </td>
      <td>
        $9000.00
      </td>
    </tr>
  )
}