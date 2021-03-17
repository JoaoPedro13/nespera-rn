import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const OverlayContainer = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

OverlayContainer.propTypes = {
  children: PropTypes.element,
};

OverlayContainer.defaultProps = {
  children: <View />,
};

export default OverlayContainer;
