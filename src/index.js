import React from 'react'

export const experiments = (experimentConfig, userExperiments) => {
  const { experiments: experimentMap, experimentList } = experimentConfig;

  const userExperimentBuckets = {};

  for (const userExperimentName of Object.keys(userExperiments)) {

    const experiment = userExperiments[userExperimentName];
    const experimentNameList = experimentMap[userExperimentName] || [];

    for (const experimentName of experimentNameList) {

      if (experimentName in experimentList) {

        const { status, buckets } = experimentList[experimentName] || {};
        const { bucket } = experiment || {};

        if (status) {
          userExperimentBuckets[experimentName] = {
            status,
            bucket: buckets[bucket] || 'A',
          };
        }
      }
    }
  }

  return userExperimentBuckets;
};


const withExperiment = (experimentName, Components, fallbackBucket) => props => {
  const { experiment } = props || {};
  const { bucket } = experiment[experimentName] || {};

  const Component = Components[bucket] || Components[fallbackBucket];

  return <Component {...props} />;
};

export default withExperiment;

