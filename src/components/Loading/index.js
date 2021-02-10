import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import PropTypes from 'prop-types';

import loadingAnimation from '~/assets/loading_animation.json';

import styles from './styles';

const Loading = ({ topContent, bottomContent }) => (
  <View style={styles.container} testID="loading-container">
    {topContent}
    <LottieView
      source={loadingAnimation}
      autoPlay
      loop
      style={{ width: 100 }}
    />
    {bottomContent}
  </View>
);

Loading.propTypes = {
  topContent: PropTypes.element,
  bottomContent: PropTypes.element,
};

export default Loading;
