import React, { FC } from 'react';
import './index.css';

interface Props {
  title: string;
  padding?: string;
  border?: string;
  background?: string;
  children?: React.ReactNode
}

export const DemoBlock: FC<Props> = (props) => {
  return (
    <div className='demoBlock'>
      <div className='title'>{props.title}</div>
      <div
        className='main'
        style={{
          padding: props.padding,
          background: props.background,
          border: props.border,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

DemoBlock.defaultProps = {
  padding: '12px 12px',
  background: '#ffffff',
};
