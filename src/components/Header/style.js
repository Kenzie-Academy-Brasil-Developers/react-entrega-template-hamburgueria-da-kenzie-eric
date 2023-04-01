import styled from "styled-components";

export const StyledHeader = styled.header`
    @media(min-width: 319px) {
        position: relative;
        width: 100%;
        height: 25vh;
        background-color: var(--gray-0);
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: .5rem;
    }
    @media(min-width: 768px) {
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: nowrap;
        height: 15vh;
        padding: 0 5.1875rem;
    }
`