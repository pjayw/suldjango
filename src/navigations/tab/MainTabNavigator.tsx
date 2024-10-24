import React from 'react';
import { TouchableOpacity } from 'react-native';
// import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { mainNavigations, colors } from '@/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '@/screens/home/HomeScreen' // 각 화면은 예시로 사용 중
import RecommendScreen from '@/screens/recommend/RecoHomeScreen';
import RecipeScreen from '@/screens/cocktails/CocktailSearch';
import MyRefScreen from '@/screens/refrigerator/MyRefScreen';
import MyPageScreen from '@/screens/home/MyPageScreen';

type MainTabParamList = {
  [mainNavigations.HOME] : undefined;
  [mainNavigations.RECOMMEND] : undefined;
  [mainNavigations.MYSTORAGE] : undefined;
  [mainNavigations.RECIPE] : undefined;
  [mainNavigations.MYPAGE] : undefined;  
}

const Tab = createBottomTabNavigator();

function TabBarIcons(routeName: keyof MainTabParamList, focused: boolean) {
  let iconName = '';

  switch (routeName) {
    case mainNavigations.HOME: {
      iconName= focused ? 'home' : 'home-outline';
      break
    }
    case mainNavigations.RECOMMEND: {
      iconName= focused ? 'thumb-up' : 'thumb-up-outline';
      break
    }
    case mainNavigations.MYSTORAGE: {
      iconName = focused ? 'bottle-wine' : 'glass-wine';
      break
    }
    case mainNavigations.RECIPE: {
      iconName = focused ? 'glass-cocktail' : 'glass-cocktail-off';
      break
    }
    case mainNavigations.MYPAGE: {
      iconName = focused ? 'account' : 'account-outline';
      break
    }
  }

  return (
    <Ionicons name={iconName} color={focused ? colors.BLACK : colors.GRAY_300} size={30} />
  )
}

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: `${colors.BLACK}`,
        tabBarInactiveTintColor: `${colors.GRAY_300}`,
        headerStyle: {
          backgroundColor: colors.WHITE,
          shadowColor: colors.GRAY_200,
        },
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Hakgyoansim Dunggeunmiso OTF B',
        },
        tabBarButton(props) {
          return <TouchableOpacity {...props} />;
        },
        headerShown: false,
        tabBarIcon: ({ focused }) => TabBarIcons(route.name as keyof MainTabParamList, focused),
      })}>
        <Tab.Screen name={mainNavigations.HOME} component={HomeScreen} options={{ title: '홈' }} />
      <Tab.Screen name={mainNavigations.RECOMMEND} component={RecommendScreen} options={{ title: '추천' }} />
      <Tab.Screen
        name={mainNavigations.MYSTORAGE}
        component={MyRefScreen}
        options={{ title: '내 술장고' }}
      />
      <Tab.Screen
        name={mainNavigations.RECIPE}
        component={RecipeScreen}
        options={{ title: '레시피' }}
      />
      <Tab.Screen
        name={mainNavigations.MYPAGE}
        component={MyPageScreen}
        options={{ title: '내 정보' }}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator;