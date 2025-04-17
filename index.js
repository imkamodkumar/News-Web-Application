import React from 'react';
import ReactDom from 'react-dom/client';

import App from './classComponent/App';
// import App from './FunctionalComponent/App';
// import App from './FunctionalComponent-1/App';


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
  </>
)