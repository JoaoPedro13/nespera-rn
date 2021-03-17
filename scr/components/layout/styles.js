import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import dimensions from '../../constants/dimensions';

export default StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingTop: 0,
  },
  containerBody: {
    flex: 1,
    margin: dimensions.defaultMargin,
  },
  containerBodyNoMargin: {
    margin: 0,
  },
  keyboardView: {
    flex: 1,
  },
});
