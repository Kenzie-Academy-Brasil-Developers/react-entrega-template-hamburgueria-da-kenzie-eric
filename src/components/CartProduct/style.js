import styled from "styled-components";


export const StyledCartProduct = styled.li`
    width: 100%;
    height: 20%;
    display: flex;
    gap: .5rem;
    >img {
        height: 90%;
        width: 30%;
        background: var(--gray-20);
        padding: .25rem;
        border-radius: 4px;
    }
    >div {
        width: 70%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 1rem;
        h3 {
            font-size: var(--heading-4);
            font-weight: 700;
            line-height: 1.5rem;
            color: var(--gray-100);
        }
        p {
            font-size: var(--caption);
            font-weight: 400;
            line-height: 1rem;
            color: var(--gray-50);
        }
        
        button {
            position: absolute;
            top:0;
            right: 0;
            font-size: .75rem;
            font-weight: 500;
            font-family: "Inter", sans-serif;
            line-height: .9063rem;
            color: #BDBDBD;
            background: transparent;
            :hover {
                color: var(--color-100);
                text-decoration: underline;
            }
        }
    }
`