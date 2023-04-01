import { StyledResults } from "./style"

export const Results = ({ state }) => {
    return (
        <StyledResults>
            Resultados para: <span>{state}</span>
        </StyledResults>
    )
}