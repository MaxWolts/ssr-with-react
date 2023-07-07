import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(315deg,#2646A6,#0C87F2);
  color: white;
  text-align: center;
  font-size: 2rem;
  letter-spacing: .1rem;
  margin-top: 6.4rem;

  & > p > a {
    color: cyan;
  }
  & > p {
    margin: 0;
  }
`