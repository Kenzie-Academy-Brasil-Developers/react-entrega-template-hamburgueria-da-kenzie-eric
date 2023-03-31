import { Product } from "../Product"
import { StyledList } from "./style"


export const ProductList = ({ state, callback, calc }) => {
    return (
        <StyledList>
            {state.map((element, index) => <Product object={element} key={index} index={index +1} callback={callback} calctotal={calc} />)}
        </StyledList>
    )
}