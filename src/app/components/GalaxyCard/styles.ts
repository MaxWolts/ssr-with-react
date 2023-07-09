import styled from 'styled-components';

export const GalaxyCardContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 8px;
  color: #f9f9f9;
  padding: 0 1rem;
  background: rgba(28, 94, 198, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(28, 94, 198, 0.3);
  
  & > .title {
    font-size: 2rem;
    text-align: center;
    letter-spacing: .1rem;
  }
  
  & > img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 5%;
  }

  & > .info-container {
    margin: 1rem;

    & > .icon {
      margin-bottom: 0.5rem;
      & > span {
        font-family: sans-serif;
        font-size: 1rem;
      }
    }

    & > .keyword-container {
      display: flex;
      flex-direction: row;
      column-gap: 0.25rem;
      flex-wrap: wrap;
      row-gap: 0.25rem;

      & > .keyword {
        background: #2646A6;
        color: white;
        padding: 0.5rem;
        border-radius: 8px;
        font-size: 1rem;
        font-family: sans-serif;
      }
    }

    & > .description {
      font-family: sans-serif;
      display: block;
      text-overflow: ellipsis;
      word-wrap: break-word;
      overflow: hidden;
      max-height: 3.6em;
      line-height: 1.8em;
      font-size: 1.5rem;
    }
  }

 



`