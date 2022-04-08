import React from 'react';
import { Button, Modal, Space } from 'antd-mobile-with-react18';
import { DemoBlock } from '../../../demos';

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space direction='vertical' block>
          <Button
            block
            onClick={() =>
              Modal.alert({
                content: '人在天边月上明',
                onConfirm: () => {
                  console.log('Confirmed');
                },
              })
            }
          >
            最简单的弹窗
          </Button>
          <Button
            block
            onClick={() => {
              Modal.alert({
                content: '点击遮罩关闭',
                closeOnMaskClick: true,
              });
            }}
          >
            点击遮罩关闭
          </Button>
          <Button
            block
            onClick={() => {
              Modal.alert({
                title: '带关闭图标的弹窗',
                content: '右上角有个关闭的小图标，点击它也可以关闭弹窗',
                showCloseButton: true,
              });
            }}
          >
            显示关闭图标
          </Button>
        </Space>
      </DemoBlock>
    </>
  );
};
