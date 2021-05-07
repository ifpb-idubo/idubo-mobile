import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Chip } from 'react-native-paper';

import styles from './styles';

const AnnounceCard = ({ title, distance, composition, publishedDate }) => (
  <View style={styles.cardContainer}>
    <View style={styles.cardTitleContainer}>
      <Text numberOfLines={1} style={styles.cardTitle}>
        {title}
      </Text>
      <Text style={styles.cardDistance}>{distance} km</Text>
    </View>
    <View style={styles.cardDescriptionContainer}>
      <View style={styles.cardChipContainer}>
        {composition.map((item, index) => (
          <Chip key={String(index)} style={styles.cardChip} mode="outlined">
            {item}
          </Chip>
        ))}
      </View>
    </View>
    <View style={styles.cardFooterContainer}>
      <Text style={styles.cardPublishedDate}>Anunciado: 05/10/2020</Text>
      <TouchableOpacity style={styles.cardAddToCartButton}>
        <Text style={styles.cardAddToCartText}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default AnnounceCard;
