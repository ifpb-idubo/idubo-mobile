import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import { colors } from '~/theme/constants';
import styles from './styles';

const Button = ({ enabled, label, onPress }) => {
  const gradientColor = enabled
    ? [colors.initialGradient, colors.finalGradient]
    : [colors.grayInitialGradient, colors.grayFinalGradient];

  return (
    <TouchableOpacity
      disabled={!enabled}
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <LinearGradient style={styles.linearGradient} colors={gradientColor}>
        <Text style={styles.text}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  enabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default Button;
