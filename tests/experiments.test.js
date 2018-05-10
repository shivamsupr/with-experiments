/* eslint-disable */
import { experiments } from '../src/';

describe('experiments', () => {

  it('should return with A bucket for an A bucket experiment', () => {
    
    const result = experiments(
      {
        experiments: {
          someRandomExperiment: [ 'SEND_INTEREST_TEXT' ],
        },
        experimentList: {
          SEND_INTEREST_TEXT: {
            status: true,
            buckets: {
              A: 'A',
              B: 'A',
              C: 'C',
            },
          },
        },
      },
      {
        someRandomExperiment: {
          bucket: 'A',
        }
      }
    );

    expect(result.SEND_INTEREST_TEXT.bucket).toEqual('A');
  });
});
