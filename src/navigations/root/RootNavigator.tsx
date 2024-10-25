import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "../stack/AuthStackNavigator";

const RootNavigator: React.FC = () => {
  let navigatorToShow: JSX.Element;

  navigatorToShow = <AuthStackNavigator/>;

  return <NavigationContainer>{navigatorToShow}</NavigationContainer>
}

export default RootNavigator