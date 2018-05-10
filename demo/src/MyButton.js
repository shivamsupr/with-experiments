import React from 'react';
import withExperiment from '../../src';

const MyBlueButton = () =>
    <button style={{ backgroundColor: 'blue' }}>Im blue</button>;
const MyRedButton = () =>
    <button style={{ backgroundColor: 'red' }}>Im red</button>;

export default withExperiment('MY_EXPERIMENT', {
    A: MyBlueButton,
    B: MyRedButton,
}, 'A');
