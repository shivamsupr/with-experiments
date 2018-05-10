/* eslint-disable */
import { experiments } from '../src/';

describe('experiments', () => {

  it('should return with A bucket for an A bucket user', () => {
    
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



  it('should return with A bucket for a B bucket user', () => {
    
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
          bucket: 'B',
        }
      }
    );

    expect(result.SEND_INTEREST_TEXT.bucket).toEqual('A');
  });


  it('should return with C bucket for a C bucket user', () => {
    
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
          bucket: 'C',
        }
      }
    );

    expect(result.SEND_INTEREST_TEXT.bucket).toEqual('C');
  });
});
