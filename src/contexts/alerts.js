import React, { createContext, useContext, useState } from 'react';

import { AlertDialog } from '~/components';

const AlertsContext = createContext({});

const AlertsProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  function newAlert({
    title,
    message,
    confirmBtn = 'OK',
    cancelBtn = 'CANCEL',
    isCancelable = false,
    onCloseCallback = () => {},
  }) {
    setAlert({
      title,
      message,
      confirmBtn,
      cancelBtn,
      isCancelable,
      onCloseCallback,
    });
  }

  function newError({ message, onCloseCallback = () => {} }) {
    setAlert({
      title: 'Whoops...',
      message,
      confirmBtn: 'OK',
      cancelBtn: '',
      isCancelable: false,
      onCloseCallback,
    });
  }

  function dismissAlert(value = false) {
    if (alert.onCloseCallback) {
      alert.onCloseCallback(value);
    }

    setAlert(null);
  }

  return (
    <AlertsContext.Provider value={{ alert, newAlert, dismissAlert, newError }}>
      {alert && <AlertDialog alert={alert} dismissAlert={dismissAlert} />}
      {children}
    </AlertsContext.Provider>
  );
};

const useAlerts = () => {
  const context = useContext(AlertsContext);

  if (!context) {
    throw new Error('useAlerts must be used within an AlertsProvider.');
  }

  return context;
};

export { AlertsProvider, useAlerts, AlertsContext };
