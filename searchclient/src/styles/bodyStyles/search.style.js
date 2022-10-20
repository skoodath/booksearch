import styled from "styled-components";

export const Search = {
  Wrapper: styled.section`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #d1d1d1;
    padding: 1rem;
  `,
  Form: styled.form`
    display: flex;
  `,
  SearchWrapper: styled.div`
    margin: 1rem 0;
  `,
  Input: styled.input`
    padding: 0.5rem;
    margin: 0 0.5rem 0 0;
    border-radius: 5px;
    border: ${({ error }) => (!error ? "1px solid #ddd" : "1px solid #d50000")};
    outline: ${({ error }) =>
      !error ? "1px solid #ddd" : "1px solid #d50000"};
  `,
  ResetButton: styled.button`
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    background-color: #1e1192;
    color: #fff;
    border-radius: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    &:hover {
      background-color: #2314b1;
    }
  `,
};
