import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { useAuth } from '~/contexts/auth';
import { colors } from '~/theme/constants';
import styles from './styles';

const ConsumerProfile = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, João Silva!</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ConnectTrashCan');
        }}
        style={styles.menuButton}
      >
        <Feather name="trash-2" color={colors.primary} size={32} />
        <Text style={styles.buttonText}>Conectar Lixeira</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signOut} style={styles.menuButton}>
        <Feather name="log-out" color={colors.primary} size={32} />
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConsumerProfile;
