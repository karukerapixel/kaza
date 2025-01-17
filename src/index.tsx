import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import StyledProvider from './contexts/StyledContext';
import App from './App';

// Routes config
const router = createHashRouter([
  {
    path: '/*',
    element: <App />,
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <StyledProvider>
      <RouterProvider router={router} />
    </StyledProvider>
  </React.StrictMode>
);
