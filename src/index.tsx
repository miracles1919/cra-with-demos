import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
// TODO 路由优化
import Popover1 from './components/popover/demos/demo1';
import Form1 from './components/form/demos/demo1';
import Form2 from './components/form/demos/demo2';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='popover'>
            <Route path='demo1' element={<Popover1 />} />
          </Route>
          <Route path='form'>
            <Route path='demo1' element={<Form1 />} />
            <Route path='demo2' element={<Form2 />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
