import { Image, SafeAreaView ,Text } from 'react-native';
import styled from 'styled-components/native';
import main_logo from '@/assets/main_logo.png'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigations/stack/AuthStackNavigator';
import { AuthNavigations } from '@/constants';
import CustomFont from '@/components/common/CustomFont';
import CustomButton from '@/components/common/CustomButton';

type AuthHomeProps = NativeStackScreenProps<
  AuthStackParamList,
  typeof AuthNavigations.AUTH_HOME
>

const LoginScreen = ( {navigation} : AuthHomeProps) => {
 return (
  <SafeAreaView>
    <LoginScreenBlock>
      <CustomFont
        fontSize={35}
        fontWeight='bold'>
          알코홀릭 ! 
      </CustomFont>
      <MainImageStyle
      resizeMode='contain'
      source={main_logo}
      />
      <CustomButton 
        label='로그인'
        size='large'
        onPress={() => console.log('로그인')}
      />
    </LoginScreenBlock>
 </SafeAreaView>
 );
};

const LoginScreenBlock = styled.View`
  align-items: center;
  height: 100%;
  marginTop: 70px;
`;

const MainImageStyle = styled(Image)`
  align-items: center;
`

export default LoginScreen;
