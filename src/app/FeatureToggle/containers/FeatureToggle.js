import PropTypes from 'prop-types';

import { useFeatureToggle } from 'layout';

const FeatureToggle = ({ feature, children }) => {
  const render = useFeatureToggle(feature);

  return render ? children : false;
};
FeatureToggle.propTypes = {
  feature: PropTypes.symbol.isRequired,
  children: PropTypes.node.isRequired,
};

export default FeatureToggle;
