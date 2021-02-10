import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Register from '~/assets/register.svg';
import { Input, Button } from '~/components';
import { register } from '~/constants/inputs';

import { metrics } from '~/theme/constants';
import styles from './styles';

const SignUp = () => {
  const [inputs, setInputs] = useState([]);

  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  function onChangeText(newValue, changeIndex) {
    const inputsCopy = inputs.map((item, index) => {
      if (index === changeIndex) {
        return {
          ...item,
          value: newValue,
        };
      }
      return item;
    });
    setInputs(inputsCopy);
  }

  useEffect(() => {
    const inputsCopy = register.map((item, index) => ({
      ...item,
      index,
    }));
    setInputs(inputsCopy);
  }, []);

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      extraHeight={100}
      enableOnAndroid
    >
      <Register height={150} width={metrics.titleWidth} />
      {inputs.map((item, index) => (
        <Input
          value={item.value}
          key={item.name}
          props={item.props}
          onChangeText={(text) => onChangeText(text, index)}
        />
      ))}
      <View style={styles.loginContainer}>
        <Text style={styles.inactiveText}>JA POSSUI CONTA?</Text>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Text style={styles.activeText}>FAZER LOGIN</Text>
        </TouchableOpacity>
      </View>
      <Button label="CADASTRAR" onPress={() => {}} enabled />
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
