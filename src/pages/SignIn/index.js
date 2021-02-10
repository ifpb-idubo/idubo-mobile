import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Login from '~/assets/login.svg';
import { Input, Button } from '~/components';
import { login } from '~/constants/inputs';

import { metrics } from '~/theme/constants';
import styles from './styles';

const SignIn = () => {
  const [inputs, setInputs] = useState([]);

  const navigation = useNavigation();

  function handleNavigateToSignUp() {
    navigation.navigate('SignUp');
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
    const inputsCopy = login.map((item, index) => ({
      ...item,
      index,
    }));
    setInputs(inputsCopy);
  }, []);

  return (
    <View style={styles.container}>
      <Login height={150} width={metrics.titleWidth} />
      {inputs.map((item, index) => (
        <Input
          value={item.value}
          key={item.name}
          props={item.props}
          onChangeText={(text) => onChangeText(text, index)}
        />
      ))}
      <View style={styles.registerContainer}>
        <Text style={styles.inactiveText}>NÃO POSSUI UMA CONTA?</Text>
        <TouchableOpacity onPress={handleNavigateToSignUp}>
          <Text style={styles.activeText}>CADASTRE-SE</Text>
        </TouchableOpacity>
      </View>
      <Button label="ENTRAR" onPress={() => {}} enabled />
    </View>
  );
};

export default SignIn;
