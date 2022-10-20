import styled from "styled-components";

export const Content = {
  Wrapper: styled.section`
    height: 100%;
    position: relative;
  `,
  ErrorWrapper: styled.div`
    position: relative;
    height: 80px;
    overflow: hidden;
  `,
  Inner: styled.div`
    display: flex;
    flex-flow: row wrap;
    flex-grow: 1;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    padding: 0;
  `,
  Card: styled.article`
    background-color: #f1f3ff;
    width: 250px;
    margin: 0 1rem 1rem 0;
    padding: 1rem;
    border-radius: 5px;
    transition: all 0.3s ease-in;
  `,
  Title: styled.h2`
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0 0 0.5rem 0;
  `,
  Error: styled.div`
    background-color: #d50000;
    position: absolute;
    opacity: ${({ error }) => (error ? 1 : 0)};
    transform: ${({ error }) =>
      error ? "translateY(0%)" : "translateY(-100%)"};
    transition: ${({ error }) =>
      error ? "all 0.4s ease-in" : `opacity 0.1s ease-out`};
    transform-origin: top left;
    color: #ffffff;
    padding: 1rem 2rem;
    width: 100%;
    box-shadow: 1px 1px 2px #888888ab, -1px -1px 2px #888888ab;
    top: 0;
    display: flex;
    align-items: center;
    z-index: 1;
  `,
  Close: styled.span`
    position: absolute;
    right: 0;
    margin: 0 2rem 0 0;
    padding: 0.2rem;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #fff;
  `,

  AuthorWrapper: styled.div`
    font-size: 0.9rem;
    margin: 0 0 0.5rem 0;
  `,

  SubCategory: styled.div`
    font-weight: 400;
    font-size: 0.8rem;
    margin: 0 0 0.5rem 0;
    span {
      font-weight: bold;
    }
  `,
};
const { SubCategory } = Content;
export const Author = styled(SubCategory)``;
export const Year = styled(SubCategory)``;
export const Category = styled(SubCategory)``;
