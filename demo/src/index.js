import React from 'react';
import {render} from 'react-dom';

import { experiments } from '../../src';
import MyButton from './MyButton';

import experimentsConfig from './config';

const getExperiment = bucket => experiments(experimentsConfig, {
  my_experiment_name: { bucket },
});

const Demo = () => (
  <div>
    <MyButton experiment={getExperiment('A')} />
    <MyButton experiment={getExperiment('B')} />
  </div>
);

render(<Demo/>, document.querySelector('#demo'));
