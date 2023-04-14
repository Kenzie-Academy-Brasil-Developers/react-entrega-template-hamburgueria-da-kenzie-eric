import styled from "styled-components";

export const StyledProduct = styled.li`
  width: 70%;
  height: 100%;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
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
    gap: 0.5rem;
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
    transition: .75s ease-out;
    cursor: pointer;
    width: 95%;
    height: 95%;
    margin: 0.25rem;
  }
  @media (min-width: 768px) {
    height: 100%;
    transition: 0.5s ease-in;
  }
  @media (min-width: 425px) {
    height: 100%;
    width: 60%;
    transition: 0.5s ease-in;
  }
  @media (min-width: 768px) {
    width: 100%;
    > div {
      height: 50%;
      gap: 1rem;
      padding: 0.5rem 1rem;
    }
  }
  @media (min-width: 1440px) {
    width: 95%;
  }
`;
