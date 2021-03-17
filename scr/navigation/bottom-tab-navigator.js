import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import dashboardStack from './stack-navigators/dashboard-stack';
import userStack from './stack-navigators/user-stack';

const Tab = createBottomTabNavigator();

const TabBarIcon = (props) => {
  return (
    <MaterialCommunityIcons
      size={30}
      style={{marginBottom: -3}}
      {...props}
    />
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        component={dashboardStack}
        name={'Home'}
        options={{
          tabBarLabel: () => {},
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                name="fruit-cherries"
                color={focused ? '#881A1A' : '#8E8E8F'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        component={userStack}
        name={'Perfil'}
        options={{
          tabBarLabel: () => {},
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              name="face-profile"
              color={focused ? '#881A1A' : '#8E8E8F'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
