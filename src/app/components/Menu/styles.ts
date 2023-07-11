import styled from 'styled-components';

const ThemeColors = {
  'pink': '#DD42B6',
  'blue': '#2646A6',
  'lightBlue': '#28B3DD'
}
const ThemeColorsButton = {
  'pink': 'linear-gradient(315deg,#a71ca3,#DD42B6)',
  'lightBlue': 'linear-gradient(315deg,#2646A6,#28B3DD)',
  'blue': 'linear-gradient(315deg,#2646A6,#0C87F2)',
}
const ThemeColorsShadow= {
  'pink': '-3px 6px 0px 7px rgb(245 188 235)',
  'lightBlue': '-3px 6px 0px 7px rgb(213 225 237);',
  'blue': '-3px 6px 0px 7px rgb(133 194 250)',
}

export const MenuButton = styled.button`
  display: ${({ hidden }) => hidden ? 'none' : 'grid'};
  place-content: center;
  border: none;
  background: ${({theme}) => ThemeColorsButton[theme]};
  font-size: 1.5rem;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: fixed;
  top: 32px;
  right: 32px;
  z-index: 1;
  cursor: pointer;
`

export const MenuContainer = styled.menu`
  z-index: 2;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 2rem;
  width: calc(300px - 4rem);
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${({hidden}) => hidden ? 'calc(-300px - 4rem)' : '0px'};
  /* z-index: 1; */
  transition: right linear 200ms;
  background: ${({theme}) => ThemeColors[theme]};
  box-shadow: ${({theme}) => ThemeColorsShadow[theme]};

  button {
    display: grid;
    justify-content: center;
    align-self: end;
    border: none;
    background: transparent;
    color: white;
    font-size: 1.5rem;
    width: 40px;
    cursor: pointer;
  }

  ul {
    color: white;
    font-size: 2rem;
    letter-spacing: .1rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    row-gap: 1rem;

    a {
      text-decoration: none;
      color: white;
    }
    button {
      height: 44px;
      width: 44px;
      
      border-radius: 50%;
      border: 3px solid white;
    }
    .lightBlue {
      background-color: ${ThemeColors['lightBlue']};
    }
    .blue {
      background-color: ${ThemeColors['blue']};
    }
    .pink {
      background-color: ${ThemeColors['pink']};
    }
  }
  .themeButtons {
    flex-direction: row;
    gap: 1rem;
  }
`