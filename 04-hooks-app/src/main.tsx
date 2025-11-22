import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './useState/TraffictLight';
// import { TrafficLightWithEffect } from './useEffect/TraffictLightWithEffect';

import './index.css';
// import { TrafficLightWithHook } from './useEffect/TraffictLightWithHook';
import { PokemonPage } from './examples/PokemonPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight/> */}
    {/* <TrafficLightWithEffect/> */}
    {/* <TrafficLightWithHook/> */}
    <PokemonPage/>
  </StrictMode>,
)
