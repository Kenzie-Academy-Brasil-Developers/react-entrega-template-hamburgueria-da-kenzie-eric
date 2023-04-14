import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  height: 23.75rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;
  overflow-y: auto;
  padding: 0 0.5rem;

  @media (min-width: 768px) {
    overflow: unset;
    height: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 3.5ch 0.5ch;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 3ch 1ch;
  }
  @media (min-width: 1440px) {
    grid-gap: 1ch .25ch;
  }
`;
