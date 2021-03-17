import DashboardStackNavigator from './dashboard-stack';
import DashboardScreen from '../../screens/dashboard';

export default {
  key: 'DashboardStack',
  component: DashboardStackNavigator,
  initialRouteName: 'DashboardStack.DashboardScreen',
  screens: {
    DashboardScreen: {
      component: DashboardScreen,
      key: 'DashboardStack.DashboardScreen',
    },
  },
};
