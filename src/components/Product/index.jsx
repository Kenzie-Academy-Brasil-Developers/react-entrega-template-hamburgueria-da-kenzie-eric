import { HandleButton } from "../../fragments/HandleButton"
import { StyledProduct } from "./style"


export const Product = ({object, callback, calctotal}) => {
    return (
        <StyledProduct>
            <img src={object.img} alt={object.name} />
            <div>
                <h3>{object.name}</h3>
                <p>{object.category}</p>
                <span>{object.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL" })}</span>
                <HandleButton content={"Adicionar"} position={false} id={object.id} callback={callback} price={object.price} total={calctotal}/>
            </div>
        </StyledProduct>
    )
}