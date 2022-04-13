import * as React from 'react';
import App from '@routes/App';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
