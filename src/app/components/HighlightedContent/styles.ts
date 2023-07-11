import styled from 'styled-components';

export const StyledHighlitedContent = styled.section`
  margin: 4rem 2rem;

  & > h2 {
    font-weight: bold;
    font-size: 2.5rem;
    color: #f9f9f9;
  }
  
  & > .message {
    margin-top: 2rem;
    font-size: 2rem;
    line-height: 150%;
    color: #a6ccfa;
  }

  & > .cards-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3rem;
    overflow-x: auto;
    margin-top: 4.5rem;
    padding: 1.5rem 0;
  }

  @media screen and (min-width: 1024px) {
    margin: 9.375rem auto;
    max-width: 1024px;

    & > .cards-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      justify-content: center;
      margin-top: 4.5rem;
      width: 100%;
      overflow-x: none;
    }
  }
`