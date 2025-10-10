import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import { GifsApp } from './GifsApp';

import './index.css';
import { MyCounterApp } from './counter/components/MycounterApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <GifsApp /> */}
    <MyCounterApp />
  </StrictMode>
);
