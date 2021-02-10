import React from 'react';
import { TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';

import styles from './styles';

const Input = ({ value, onChangeText, props }) => (
  <TextInput
    style={styles.container}
    value={value}
    onChangeText={onChangeText}
    {...props}
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default Input;
