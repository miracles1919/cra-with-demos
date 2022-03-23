import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.css';

const links = [
  {
    path: '/popover/demo1',
    name: 'popover demo1',
  },
];

function App() {
  return (
    <div className='App'>
      {links.map((item) => {
        return (
          <div key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </div>
        );
      })}
      <Outlet />
    </div>
  );
}

export default App;
