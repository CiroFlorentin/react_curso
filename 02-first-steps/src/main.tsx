import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FirstStepsApp } from './firstStepsApp';
// import { MyAwesomeApp } from './MyAwesomeApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp />
    {/* <MyAwesomeApp /> */}
  </StrictMode>
);
