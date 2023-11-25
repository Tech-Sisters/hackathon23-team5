import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaunchScreen  from './src/components/screens/Generic/LaunchScreen';
import RegisterScreen  from './src/components/screens/Users/RegisterScreen';
import Login from './src/components/screens/Users/LoginScreen'
import Dashboard from './src/components/screens/Generic/Dashboard';
import BottomTabs from './src/components/common/BottomTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Launch">
            <Stack.Screen name="Launch" component={LaunchScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen
              name="BottomTabs"
              component={BottomTabs}
              options={{ headerShown: false }} 
          />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

