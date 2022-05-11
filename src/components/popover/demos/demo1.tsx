import React, { useEffect, useState } from 'react';
import { Popover, Button } from 'antd-mobile';
import { DemoBlock } from '../../../demos';
import { PopoverProps } from 'antd-mobile/es/components/popover';

export default () => {
  const [placement, setPlacement] =
    useState<PopoverProps['placement']>('top-start');

  return (
    <>
      <DemoBlock title='基本的气泡'>
        <Popover
          content='Hello World'
          trigger='click'
          placement='right'
          defaultVisible
        >
          <Button>点我</Button>
        </Popover>
      </DemoBlock>
    </>
  );
};
