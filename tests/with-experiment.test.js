/* eslint-disable */

import React from 'react';
import { renderToString } from 'react-dom/server';

import withExperiment from '../src/';

describe('withExperiment', () => {

  const MyFirstComponent = jest.fn(() => <div></div>);
  const MySecondComponent = jest.fn(() => <div></div>);

  afterEach(() => {
    MyFirstComponent.mockClear();
    MySecondComponent.mockClear();
  });

  it('should render the component corresponding to the A bucket', () => {

    const MyComp = withExperiment('SOME_EXPERIMENT', {
      A: MyFirstComponent,
      B: MySecondComponent,
    }, '');

    renderToString(<MyComp experiment={{
      SOME_EXPERIMENT: {
        bucket: 'A',
      },
    }} />);

    expect(MyFirstComponent).toBeCalled();
    expect(MySecondComponent).not.toBeCalled();
  });

  it('should render the component corresponding to the B bucket', () => {

    const MyComp = withExperiment('SOME_EXPERIMENT', {
      A: MyFirstComponent,
      B: MySecondComponent,
    }, '');

    renderToString(<MyComp experiment={{
      SOME_EXPERIMENT: {
        bucket: 'B',
      },
    }} />);

    expect(MyFirstComponent).not.toBeCalled();
    expect(MySecondComponent).toBeCalled();
  });

  it('should render fallbackBucket for invalid bucket', () => {

    const MyComp = withExperiment('SOME_EXPERIMENT', {
      A: MyFirstComponent,
      B: MySecondComponent,
    }, 'A');

    renderToString(<MyComp experiment={{
      SOME_EXPERIMENT: {
        bucket: 'L',
      },
    }} />);

    expect(MyFirstComponent).toBeCalled();
    expect(MySecondComponent).not.toBeCalled();
  });

  it('should render fallbackBucket for invalid experiment', () => {

    const MyComp = withExperiment('SOME_EXPERIMENT', {
      A: MyFirstComponent,
      B: MySecondComponent,
    }, 'B');

    renderToString(<MyComp experiment={{}} />);

    expect(MyFirstComponent).not.toBeCalled();
    expect(MySecondComponent).toBeCalled();
  });
});

