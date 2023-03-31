import styled from "styled-components";

export const StyledProduct = styled.li`
  width: 90%;
  height: 21.625rem;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  transition: 0.5s ease-in;
  img {
    width: 100%;
    height: 50%;
    background-color: var(--gray-0);
    align-self: center;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0.25rem 1rem;
    width: 100%;
    height: 45%;
    h3 {
      font-size: var(--heading-3);
      font-weight: 700;
      color: var(--gray-100);
    }
    p {
      font-size: var(--caption);
      font-weight: 400;
      color: var(--gray-50);
    }
    span {
      font-weight: 600;
      font-size: var(--body);
      color: var(--color-primary);
    }
  }
  :hover {
    transform: scale(1.1);
    transition: 1s ease-out;
    cursor: pointer;
    margin: 0.5rem;
  }
`;
