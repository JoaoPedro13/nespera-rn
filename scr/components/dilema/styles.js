import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    height: 250,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    borderRadius: 5,
  },
  image: {
    height: 250,
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
  },
  description: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 27,
    color: '#DEDEDE',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 2,
      height: 4,
    },
  },
  optionsContainer: {
    flex: 1,
    marginTop: 6,
  },
  optionsTitle: {
    textAlign: 'center',
    color: '#000',
  },
  optionsButton: {
    position: 'relative',
    zIndex: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 3,
    borderRadius: 5,
    padding: 5,
    color: '#DEDEDE',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
