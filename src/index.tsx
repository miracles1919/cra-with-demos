import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

// TODO 路由优化
import Popover1 from './components/popover/demos/demo1';
import Form1 from './components/form/demos/demo1';
import Toast1 from './components/toast/demos/demo1';
import Picker1 from './components/picker/demos/demo1';
import Modal1 from './components/modal/demos/demo1';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='popover'>
            <Route path='demo1' element={<Popover1 />} />
          </Route>
          <Route path='form'>
            <Route path='demo1' element={<Form1 />} />
          </Route>
          <Route path='toast'>
            <Route path='demo1' element={<Toast1 />} />
          </Route>
          <Route path='picker'>
            <Route path='demo1' element={<Picker1 />} />
          </Route>
          <Route path='modal'>
            <Route path='demo1' element={<Modal1 />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
