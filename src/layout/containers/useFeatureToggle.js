import { useContext } from 'react';
import { FeatureToggleContext } from '../context/LayoutContextProvider';

const useFeatureToggle = (featureSymbol) => {
  const feature = Symbol.keyFor(featureSymbol);
  const featureToggle = useContext(FeatureToggleContext);

  console.log(feature, featureToggle, featureToggle[feature]);
  return Object.prototype.hasOwnProperty.call(featureToggle, feature) && featureToggle[feature] !== null
    ? featureToggle[feature]
    : true;
};

export default useFeatureToggle;
