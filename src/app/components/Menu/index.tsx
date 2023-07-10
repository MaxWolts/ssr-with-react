import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuButton, MenuContainer } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
type colors = 'pink' | 'lightBlue' | 'blue'
type Props = {
  setThemeColor: (color:colors) => void,
  themeColor: colors
}

export const Menu = ({ setThemeColor, themeColor }: Props) => {
  const [menuIsVisible, setMenuVisibility] = useState(false)
  const openMenu = () => setMenuVisibility(true)
  const closeMenu = () => {
    setMenuVisibility(false)
  }

  return (
    <>
      <MenuButton hidden={menuIsVisible} onClick={openMenu} color={themeColor}>
        <FontAwesomeIcon icon={faBars} />
      </MenuButton>
      <MenuContainer hidden={!menuIsVisible} color={themeColor}>
        <button onClick={closeMenu} aria-label="cerrar">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/galaxias" onClick={closeMenu}>
              Galaxias
            </Link>
          </li>
        </ul>
        <ul className='themeButtons'>
          <li>
            <button className='button-color blue' aria-label='select color blue' onClick={() => {setThemeColor('blue')}}></button>
          </li>
          <li>
            <button className='button-color pink' aria-label='select color pink' onClick={() => {
              setThemeColor('pink')
              }}></button>
          </li>
          <li>
            <button className='button-color lightBlue' aria-label='select color light blue' onClick={() => {setThemeColor('lightBlue')}}></button>
          </li>
        </ul>
      </MenuContainer>
    </>
  )
}