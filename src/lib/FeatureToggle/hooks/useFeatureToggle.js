import { useContext } from 'react';
import { FeatureToggleContext } from 'layout/context/LayoutContextProvider';

const useFeatureToggle = (featureSymbol) => {
  const feature = Symbol.keyFor(featureSymbol);
  const featureToggle = useContext(FeatureToggleContext);

  if (!featureToggle) {
    throw new Error('Cannot Find FeatureToggleContext');
  }

  return Object.prototype.hasOwnProperty.call(featureToggle, feature) &&
    featureToggle[feature] !== null
    ? featureToggle[feature]
    : true;
};

export default useFeatureToggle;
