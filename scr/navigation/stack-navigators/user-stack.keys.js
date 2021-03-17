import UserStackNavigator from './user-stack';
import UserScreen from '../../screens/user';

export default {
  key: 'UserStack',
  component: UserStackNavigator,
  initialRouteName: 'UserStack.UserScreen',
  screens: {
    UserScreen: {
      component: UserScreen,
      key: 'UserStack.UserScreen',
    },
  },
};
