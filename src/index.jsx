import React from 'react';
import ReactDOM from 'react-dom/client';
import {NextUIProvider} from '@nextui-org/react'

import { Root } from '@/components/Root.jsx';
import './mockEnv.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NextUIProvider>
          <Root />
      </NextUIProvider>
  </React.StrictMode>,
);
