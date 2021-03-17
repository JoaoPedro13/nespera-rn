import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';

import OverlayContainer from '../overlay-container';
import styles from './styles';

const Layout = ({center, clickable, children, loading, noMargin}) => {
  const renderContent = () => {
    return (
      <KeyboardAvoidingView style={styles.keyboardView} behavior="padding">
        <View
          style={
            noMargin
              ? [styles.containerBody, styles.containerBodyNoMargin]
              : styles.containerBody
          }
        >
          {children}
        </View>
      </KeyboardAvoidingView>
    );
  };

  return (
    <SafeAreaView
      style={center ? [styles.container, styles.center] : styles.container}
    >
      {loading && (
        <OverlayContainer>
          <Text>...espera</Text>
        </OverlayContainer>
      )}
      {clickable ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {renderContent()}
        </TouchableWithoutFeedback>
      ) : (
        renderContent()
      )}
    </SafeAreaView>
  );
};

Layout.propTypes = {
  center: PropTypes.bool,
  clickable: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  loading: PropTypes.bool,
  noMargin: PropTypes.bool,
};

Layout.defaultProps = {
  children: <View />,
};

export default Layout;
