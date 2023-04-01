import styled from "styled-components";

export const StyledCart = styled.div`
  width: 100%;
  height: 18.75rem;
  margin: .5rem 1rem;
  > h3 {
    display: flex;
    justify-content: flex-start;
    padding: 0 1rem;
    align-items: center;
    width: 100%;
    height: 4.0625rem;
    background: #27ae60;
    color: #fff;
    border-radius: 5px 5px 0px 0px;
    font-size: var(--heading-3);
    font-weight: 700;
  }
  > ul {
    height: 85%;
    overflow-y: auto;
    background-color: var(--gray-0);
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-bottom: 2px solid var(--gray-20);
    > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      h3 {
        font-size: 1.125rem;
        font-weight: 700;
      }
      span {
        font-size: .875rem;
        font-weight: 400;
        color: var(--gray-50);
      }
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem .5rem;
    gap: 16px;
    background-color: var(--gray-0);
    width: 100%;
    height: 7.625rem;
    > div {
      width: 100%;
      height: 30%;
      display: flex;
      padding: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
    }
    > button {
      width: 100%;
      height: 60%;
      background: var(--gray-20);
      border: 2px solid var(--gray-20);
      border-radius: 8px;
      padding: 1rem 1.25rem;
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      font-weight: 600;
      color: var(--gray-50);
      :hover {
        background: var(--gray-50);
        border: 2px solid var(--gray-50);
        color: var(--gray-20);
      }
    }
  }
  @media (min-width:768px) {
    height: 20.125rem;
  }
  @media (min-width:1024px) {
    
    height: 33.125rem;
  }
`;
