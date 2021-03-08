import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  NativeModules,
  NativeEventEmitter,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import BleManager from 'react-native-ble-manager';
import Config from 'react-native-config';

import { BluetoothStatus } from 'react-native-bluetooth-status';

import { Loading, Input, Button, Header } from '~/components';
import { useAlerts } from '~/contexts/alerts';
import toUTF8Array from '~/utils/utf8Convertor';
import { trashCan } from '~/constants/inputs';

import styles from './styles';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const ConnectTrashCan = () => {
  const [status, setStatus] = useState('unauthorized');
  const [peripheral, setPeripheral] = useState(null);
  const [inputs, setInputs] = useState([]);

  const { newError, newAlert } = useAlerts();

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

  function startScan() {
    if (status !== 'scanning') {
      BleManager.scan([], 3, false)
        .then(() => {
          setStatus('scanning');
        })
        .catch((error) => {
          newError({
            message:
              'Não foi possível escanear a lixeira. Certifique-se que o Bluetooth e Localização estão ligados.',
            onCloseCallback: () => startScan(),
          });
          throw new Error(error);
        });
    }
  }

  function checkPeripheral() {
    if (!peripheral) {
      setStatus('error');
    } else {
      setStatus('foundPeripheral');
    }
  }

  function handleStopScan() {
    setStatus('stoppedScan');
  }

  function handleDiscoverPeripheral(scannedPeripheral) {
    if (scannedPeripheral.name === 'Lixeira Idubo') {
      if (!peripheral) {
        setPeripheral(scannedPeripheral);
      }
    }
  }

  function submitForm() {
    BleManager.connect(peripheral.id)
      .then(() => {
        const [ssid, password] = inputs;
        BleManager.retrieveServices(peripheral.id).then(() => {
          BleManager.write(
            peripheral.id,
            Config.SERVICE_UUID_SSID,
            Config.CHARACTERISTIC_UUID_SSID,
            toUTF8Array(ssid.value),
            20
          )
            .then(() => {
              BleManager.write(
                peripheral.id,
                Config.SERVICE_UUID_PASSWORD,
                Config.CHARACTERISTIC_UUID_PASSWORD,
                toUTF8Array(password.value),
                20
              ).then(() => {
                setStatus('dataSent');
              });
            })
            .catch((error) => {
              setStatus('error');
              newError({
                message:
                  'Não foi possível enviar as informações para a lixeira.',
              });
              throw new Error(error);
            });
        });
      })
      .catch((error) => {
        setStatus('error');
        newError({
          message: 'Não foi possível conectar-se à lixeira.',
        });
        throw new Error(error);
      });
  }

  function checkPermissions() {
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ).then((alreadyAccepted) => {
        if (alreadyAccepted) {
          setStatus('authorized');
        } else {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          ).then((result) => {
            if (result) {
              setStatus('authorized');
            } else {
              newError({
                message:
                  'Você precisa nos dar permissão de localização para fazer a conexão com a lixeira!',
                onCloseCallback: () => checkPermissions(),
              });
            }
          });
        }
      });
    }
  }

  function initializeBluetooth() {
    checkPermissions();

    BleManager.start({ showAlert: false });

    bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      handleDiscoverPeripheral
    );
    bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan);
  }

  async function checkBluetooth() {
    const isEnabled = await BluetoothStatus.state();
    if (isEnabled) {
      initializeBluetooth();
    } else {
      newAlert({
        title: 'Oops...',
        message: 'Você precisa antes ativar o seu bluetooth!',
        confirmBtn: 'ATIVAR',
        onCloseCallback: async () => {
          await BluetoothStatus.enable();
          initializeBluetooth();
        },
      });
    }
  }

  useEffect(() => {
    checkBluetooth();

    return () => {
      bleManagerEmitter.removeListener(
        'BleManagerDiscoverPeripheral',
        handleDiscoverPeripheral
      );
      bleManagerEmitter.removeListener('BleManagerStopScan', handleStopScan);
    };
  }, []);

  useEffect(() => {
    if (status === 'authorized') {
      startScan();
    } else if (status === 'stoppedScan') {
      checkPeripheral();
    }
  }, [status]);

  useEffect(() => {
    const inputsCopy = trashCan.map((item, index) => ({
      ...item,
      index,
    }));
    setInputs(inputsCopy);
  }, []);

  if (status === 'scanning') {
    return (
      <View style={styles.container}>
        <Header title="CONFIGURAÇÃO DA LIXEIRA" />
        <View style={styles.instructionsContainer}>
          <Text style={styles.text}>
            Vamos fazer a configuração inicial da sua Lixeira Idubo!
          </Text>
          <Text style={styles.text}>
            Para começar, ligue o dispositivo acoplado e aguarde o escaneamento
          </Text>
        </View>
        <Loading />
      </View>
    );
  }
  if (status === 'foundPeripheral') {
    return (
      <View style={styles.container}>
        <Header title="CONFIGURAÇÃO DA LIXEIRA" />
        <View style={styles.contentContainer}>
          <Text style={styles.formTitle}>
            Insira os dados da sua rede de internet que deseja que a lixeira se
            conecte.
          </Text>
          {inputs.map((item, index) => (
            <Input
              value={item.value}
              key={item.name}
              props={item.props}
              onChangeText={(text) => onChangeText(text, index)}
            />
          ))}
          <Button
            label="CONFIRMAR"
            onPress={() => submitForm()}
            enabled={inputs[0].value && inputs[1].value}
          />
        </View>
      </View>
    );
  }
  if (status === 'error') {
    return (
      <View style={styles.container}>
        <Header title="CONFIGURAÇÃO DA LIXEIRA" />
        <View style={styles.contentContainer}>
          <Text style={styles.error}>Ocorreu um erro</Text>
          <Button
            label="TENTAR NOVAMENTE"
            onPress={() => startScan()}
            enabled
          />
        </View>
      </View>
    );
  }
  if (status === 'dataSent') {
    return (
      <View style={styles.container}>
        <Header title="CONFIGURAÇÃO DA LIXEIRA" />
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Lixeira configurada com sucesso!</Text>
        </View>
      </View>
    );
  }

  return (
    <>
      <Header title="CONFIGURAÇÃO DA LIXEIRA" />
      <Loading />
    </>
  );
};

export default ConnectTrashCan;
