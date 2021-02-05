import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-paper';

import styles from './styles';

const Input = ({ value, onChangeText, label, type, reference, next }) => {
  const [inputProps, setInputProps] = useState({ label });

  useEffect(() => {
    switch (type) {
      case 'PASSWORD':
        setInputProps({
          ...inputProps,
          autoCompleteType: 'password',
          secureTextEntry: true,
          textContentType: 'password',
        });
        break;
    }
    if (next) {
      setInputProps({
        ...inputProps,
        returnKeyType: 'next',
        blurOnSubmit: false,
        onSubmitEditing: () => {
          next.current.focus();
        },
      });
    }
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

export default Input;
