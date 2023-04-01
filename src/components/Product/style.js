import styled from "styled-components";

export const StyledProduct = styled.li`
  width: 87%;
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
    gap: .5rem;
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
  @media (min-width: 768px) {
    height: 100%;
    transition: 0.5s ease-in;
  }
  @media (min-width: 768px) {
  > div {
    height: 50%;
    gap: 1rem;
    padding: .5rem 1rem;
  }
`;
