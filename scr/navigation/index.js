import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigator from './bottom-tab-navigator';

const NavigationWrapper = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default NavigationWrapper;
