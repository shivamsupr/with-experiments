import React, {Component} from 'react';
import {render} from 'react-dom';

import MyButton from './MyButton';

const Demo = () => (
  <div>
    <MyButton experiment={{
      MY_EXPERIMENT: {
        bucket: 'A',
      },
    }} />
    <MyButton experiment={{
      MY_EXPERIMENT: {
        bucket: 'B',
      },
    }} />
  </div>
);

render(<Demo/>, document.querySelector('#demo'));
