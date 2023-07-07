import styled from 'styled-components';

export const GalaxyCardContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 8px;
  color: #f9f9f9;
  
  & > .title {
    font-size: 2rem;
    text-align: center;
    letter-spacing: .1rem;
  }
  
  & > img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    
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