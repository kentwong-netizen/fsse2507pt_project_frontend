import {Button, Stack} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

interface Props{
  quantity: number;
  handleQuantityMinusOne: ()=> void;
  handleQuantityPlusOne: ()=> void;
}

export default function QuantitySelector({
                                            quantity,
                                            handleQuantityMinusOne,
                                            handleQuantityPlusOne
                                         }: Props) {
  return(
    <Stack direction="horizontal">
      <Button
        style={{height:30, width:30, padding:0}}
        onClick={handleQuantityMinusOne}>
        <FontAwesomeIcon icon={faMinus} fade />
      </Button>

      <div style={{height:30, width:30, textAlign: "center"}}> {quantity} </div>

      <Button
        style={{height:30, width:30, padding:0}}
        onClick={handleQuantityPlusOne}>

        <FontAwesomeIcon icon={faPlus} fade />
      </Button>
    </Stack>
  )
}