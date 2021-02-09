import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Detail from '../pages/Detail';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#FFF' },
      headerShown: false,
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="Detail" component={Detail} />
  </Auth.Navigator>
);

export default AuthRoutes;
