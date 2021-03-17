import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import stackKeys from './user-stack.keys';

const Stack = createStackNavigator();

const UserStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={stackKeys.initialRouteName}>
      {Object.entries(stackKeys.screens).map(([key, value]) => (
        <Stack.Screen
          key={key + '_' + value.key}
          name={value.key}
          component={value.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default UserStackNavigator;
