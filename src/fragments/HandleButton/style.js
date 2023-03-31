import styled, {css} from "styled-components";

export const StyledButton = styled.button`
  width: 6.625rem;
  height: 2.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  background-color: var(--color-primary);
  color: #fff;
  font-weight: 600;
  font-size: var(--body);
  :hover {
    background-color: var(--color-primary-hover)
  }
  ${({position}) => {
    if(position === true) {
      return css`
      position: absolute;
      right: 10%;
      `
    }
  }}
`;
