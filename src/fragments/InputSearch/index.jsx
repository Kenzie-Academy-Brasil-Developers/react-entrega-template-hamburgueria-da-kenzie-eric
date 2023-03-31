import { HandleButton } from "../HandleButton"
import { StyledInput } from "./style"


export const InputSearch = ({state, callback}) => {

    return (
        <>
            <StyledInput type="text" placeholder="Digite sua Pesquisa" onChange={(e) => callback(state, e.target.value)}/>
            <HandleButton content={"Pesquisar"} position={true} />
        </>
    )
}