import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import OverlayContainer from '../overlay-container';
import styles from './styles';

const defaultBackground = require('../../assets/images/cherries-pattern.png');

const Dilema = ({dilema}) => {
  const {background, description, optionA, optionB} = dilema;
  return (
    <>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.image}
            source={!!background ? {uri: background} : defaultBackground}
          >
            <OverlayContainer>
              <Text style={styles.description}>
                <>{description}</>
              </Text>
            </OverlayContainer>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.optionsTitle}>Preferias ?</Text>
        <TouchableOpacity
          style={styles.optionsButton}
          onPress={() => {
            alert('option A');
          }}
        >
          <Text style={styles.buttonText}>{optionA}</Text>
        </TouchableOpacity>
        <Text style={styles.optionsTitle}>ou</Text>
        <TouchableOpacity
          style={styles.optionsButton}
          onPress={() => {
            alert('option B');
          }}
        >
          <Text style={styles.buttonText}>{optionA}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

Dilema.propTypes = {
  dilema: PropTypes.shape({
    background: PropTypes.string,
    description: PropTypes.string.isRequired,
    optionA: PropTypes.string.isRequired,
    optionB: PropTypes.string.isRequired,
  }),
};

Dilema.defaultProps = {
  dilema: {
    description: 'O grande dilema que ninguém esperava !?',
    optionA: 'ser anão durante um ano',
    optionB: 'ser o Nuno Markl',
  },
};

export default Dilema;
