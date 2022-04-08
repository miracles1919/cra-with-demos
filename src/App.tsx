import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const links = [
  {
    path: '/popover/demo1',
    name: 'popover demo1',
  },
  {
    path: '/form/demo1',
    name: 'form demo1',
  },
  {
    path: '/toast/demo1',
    name: 'toast demo1',
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
