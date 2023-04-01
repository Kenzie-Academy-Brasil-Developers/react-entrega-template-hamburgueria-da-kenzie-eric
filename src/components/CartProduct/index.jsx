import { toast } from "react-toastify"
import { StyledCartProduct } from "./style"


export const CartProduct = ({ object, index, callback }) => {
    return (
        <StyledCartProduct>
            <img src={object.img} alt={object.name} />
            <div>
                <h3>{object.name}</h3>
                <p>{object.category}</p>
                <button id={index} onClick={(e) => {
                    {
                        toast.error("Item Removido")
                        callback(index)
                    }
                }}>Remover</button>
            </div>
        </StyledCartProduct>
    )
}