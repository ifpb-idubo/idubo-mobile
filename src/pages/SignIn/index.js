import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Login from '~/assets/login.svg';
import { Input, Button } from '~/components';

import { metrics } from '~/theme/constants';
import styles from './styles';

const SignIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const nameInput = useRef(null);
  const passwordInput = useRef(null);

  return (
    <View style={styles.container}>
      <Login
        style={styles.loginTitle}
        height={150}
        width={metrics.width - metrics.pagePadding * 2}
      />
      <Input
        reference={nameInput}
        label="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
        type="TEXT"
        next={passwordInput}
      />
      <Input
        reference={passwordInput}
        label="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        type="PASSWORD"
      />
      <View style={styles.registerContainer}>
        <Text style={styles.inactiveText}>NÃO POSSUI UMA CONTA?</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.activeText}>CADASTRE-SE</Text>
        </TouchableOpacity>
      </View>
      <Button label="ENTRAR" onPress={() => {}} enabled={name && password} />
    </View>
  );
};

export default SignIn;
