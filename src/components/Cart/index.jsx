import { ToastContainer } from "react-toastify"
import { CartProduct } from "../CartProduct"
import { StyledCart } from "./style"


export const Cart = ({ state, remove, total, set}) => {
    return (
        <StyledCart>
            <h3>Carrinho de Compras</h3>
            <ul>
                {state.length !== 0 ?
                    state.map((element, index) => <CartProduct key={index} index={index} object={element} callback={remove}/>)
                    :
                    <div>
                        <h3>Sua sacola está Vazia</h3>
                        <span>Adicione Itens</span>
                    </div>
                }
            </ul>
            {state.length !== 0 ?
                <div>
                    <div>
                        <span>Total: </span>
                        <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                    </div>
                    <button onClick={() => set()}>Remover Todos</button>
                </div>
                :  "" }
        </StyledCart>
    )
}