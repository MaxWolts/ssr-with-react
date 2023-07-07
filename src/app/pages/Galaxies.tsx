import React from 'react';
import styled from 'styled-components';
import { GalaxiesLayout } from '../components/GalaxiesLayout';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { LOADING_STATUS, ERROR_STATUS, useFetchGalaxiesInfo } from '../hooks/useFetchGalaxiesInfo';

const GalaxiesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 3rem;
  width: calc(100% - 6rem);
  min-height: 100vh;

  & >h1 {
    color: #f9f9f9;
    font-size: 3rem;
    letter-spacing: .2rem;
  }
`

type Props = {
  galaxies: []
}

export const Galaxies = (props: Props) => {

  const renderLayout = () => {
    if (props.galaxies.length === 0) return <LoadingSpinner />
    // if (requestStatus === ERROR_STATUS) return <h1>Error</h1>
    return <GalaxiesLayout galaxies={props.galaxies} />
  }

  return (
    <GalaxiesPageWrapper>
      <h1>Galaxias</h1>
      {renderLayout()}
    </GalaxiesPageWrapper>
  );
}

Galaxies.defaultProps = {
  galaxies: []
}