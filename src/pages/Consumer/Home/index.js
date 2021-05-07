import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FAB, Portal, Modal, Chip } from 'react-native-paper';

import { AnnounceCard, Button } from '~/components';

import { colors } from '~/theme/constants';
import styles from './styles';

const ConsumerHome = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
  };

  return (
    <View style={styles.container}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text style={styles.basket}>SACOLA</Text>
          <AnnounceCard
            title="1kg de resíduo orgânico"
            distance="15"
            composition={['Tomate', 'Cebola', 'Feijão', 'Arroz']}
            publishedDate={new Date()}
          />

          <Text style={styles.pickTime}>Escolha um horário para buscar</Text>
          <View style={styles.chipsContainer}>
            <Chip style={styles.cardChip} mode="outlined">
              13:30
            </Chip>
            <Chip style={styles.cardChip} mode="outlined">
              14:30
            </Chip>
            <Chip style={styles.cardChip} mode="outlined">
              15:30
            </Chip>
          </View>
          <View style={styles.chipsContainer}>
            <Chip style={styles.cardChip} mode="outlined">
              16:30
            </Chip>
            <Chip style={styles.cardChip} mode="flat">
              17:30
            </Chip>
            <Chip style={styles.cardChip} mode="outlined">
              18:30
            </Chip>
          </View>

          <Text style={styles.date}>Data: 21/04/2021</Text>
          <Button label="RESERVAR" onPress={() => {}} enabled />
        </Modal>
      </Portal>
      <View style={styles.addressContainer}>
        <Text numberOfLines={1} style={styles.addressText}>
          R. Etelvina Macedo de Mendonça
        </Text>
        <Feather size={24} color="white" name="chevron-down" />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} />
          <View>
            <Feather size={24} color={colors.primary} name="search" />
          </View>
        </View>

        <AnnounceCard
          title="1kg de resíduo orgânico"
          distance="15"
          composition={['Tomate', 'Cebola', 'Feijão', 'Arroz']}
          publishedDate={new Date()}
        />
        <AnnounceCard
          title="2kg de resíduo orgânico"
          distance="11"
          composition={['Tomate', 'Feijão', 'Arroz']}
          publishedDate={new Date()}
        />
      </View>
      <FAB style={styles.fab} icon="basket" onPress={showModal} color="white" />
    </View>
  );
};

export default ConsumerHome;
