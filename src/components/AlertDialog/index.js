import React from 'react';
import { View, Modal, Text } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../Button';

import styles from './styles';

const AlertDialog = ({ alert, dismissAlert }) => {
  const { title, message, confirmBtn, cancelBtn, isCancelable } = alert;

  return (
    <Modal animationType="fade" transparent visible={alert !== null}>
      <View style={styles.container}>
        <View style={styles.centeredView}>
          <Text style={styles.modalTitle}>{title}</Text>
          <View style={styles.modalDescriptionContainer}>
            <Text style={styles.modalDescription}>{message}</Text>
          </View>
          {isCancelable ? (
            <View style={styles.row}>
              <View style={styles.buttonContainer}>
                <Button
                  label={cancelBtn}
                  enabled
                  onPress={() => dismissAlert(false)}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  label={confirmBtn}
                  enabled
                  onPress={() => dismissAlert(true)}
                />
              </View>
            </View>
          ) : (
            <Button
              label={confirmBtn}
              enabled
              onPress={() => dismissAlert(true)}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

AlertDialog.propTypes = {
  alert: PropTypes.shape({
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    confirmBtn: PropTypes.string.isRequired,
    cancelBtn: PropTypes.string.isRequired,
    isCancelable: PropTypes.bool.isRequired,
  }).isRequired,
  dismissAlert: PropTypes.func.isRequired,
};

export default AlertDialog;
