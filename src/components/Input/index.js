import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';

import styles from './styles';

const Input = ({ value, onChangeText, label, type, reference, next }) => {
  const [inputProps, setInputProps] = useState({ label });

  useEffect(() => {
    let propsCopy = { ...inputProps };
    switch (type) {
      case 'PASSWORD':
        propsCopy = {
          ...propsCopy,
          autoCompleteType: 'password',
          secureTextEntry: true,
          textContentType: 'password',
        };
        break;
      case 'EMAIL':
        propsCopy = {
          ...propsCopy,
          autoCompleteType: 'email',
          textContentType: 'emailAddress',
          keyboardType: 'email-address',
        };
    }
    if (next) {
      propsCopy = {
        ...propsCopy,
        returnKeyType: 'next',
        blurOnSubmit: false,
        onSubmitEditing: () => {
          next.current.focus();
        },
      };
    }
    setInputProps(propsCopy);
  }, []);

  return (
    <TextInput
      ref={reference}
      style={styles.container}
      value={value}
      onChangeText={onChangeText}
      {...inputProps}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ component: PropTypes.instanceOf(React.Component) }),
  ]).isRequired,
  next: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ component: PropTypes.instanceOf(React.Component) }),
  ]),
};

export default Input;
