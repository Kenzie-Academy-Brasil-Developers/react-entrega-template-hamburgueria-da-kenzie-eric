import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: 5.625rem;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: var(--color-primary);
  color: #fff;
  font-weight: 600;
  font-size: var(--body);
  :hover {
    background-color: var(--color-primary-hover);
  }
  ${({ position }) => {
    if (position === true) {
      return css`
        position: absolute;
        right: 10%;
        bottom: 18%;
        @media (min-width: 768px) {
          width: 6.65rem;
          padding: 0.5rem 1.25rem;
          right: 13%;
          bottom: 25%;
        }
        @media (min-width: 1024px) {
          width: 6.65rem;
          padding: 0.5rem 1.25rem;
          right: 6.25rem;
          bottom: 1.8rem;
        }
        @media (min-width: 1440px) {
          bottom: 3.125rem;
        }
      `;
    }
  }}
`;
