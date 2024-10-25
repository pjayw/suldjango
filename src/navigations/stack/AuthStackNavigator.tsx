import React from "react";
import { AuthNavigations } from "../../constants";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../../screens/home/LoginScreen'
import SplashScreen from "../../screens/home/SplashScreen";
import SignupScreen from "../../screens/home/SignupScreen";

export type AuthStackParamList = {
  [AuthNavigations.AUTH_HOME]: undefined;
  [AuthNavigations.SPLASH]: undefined;
  [AuthNavigations.SIGNUP]: undefined;
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={AuthNavigations.SPLASH} screenOptions={{ headerShown: false}}>
      <Stack.Screen name={AuthNavigations.SPLASH} component={SplashScreen} />
      <Stack.Screen name={AuthNavigations.AUTH_HOME} component={LoginScreen} />
      <Stack.Screen name={AuthNavigations.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator