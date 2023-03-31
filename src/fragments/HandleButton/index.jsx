import { StyledButton } from "./style"


export const HandleButton = ({ content, position = false, callback, id, total, price }) => {
    return (
        <StyledButton position={position} onClick={(e) => {
            callback(id)
            total(price)
        }} >
            {content}
        </StyledButton>
    )
}