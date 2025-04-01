import React from 'react'
import { LaBallTrainglePath, PreloaderBlock, PreLoaderContainer, PreloaderStatus } from './styles'
const Preloader = () => {
  return (
    <React.Fragment>
        <PreLoaderContainer>
            <PreloaderStatus className={`${LaBallTrainglePath}`}>
                <PreloaderBlock/>
                <PreloaderBlock/>
                <PreloaderBlock/>
            </PreloaderStatus>
        </PreLoaderContainer>
    </React.Fragment>
  )
}

export default Preloader