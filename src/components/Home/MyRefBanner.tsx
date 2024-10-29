import tw from 'twrnc';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import CustomFont from '../common/CustomFont';
import pleaseregi from '@/assets/pleaseregi.png'
import { useNavigation } from '@react-navigation/native';

const MyRefBanner = () => {
  const navigation = useNavigation()

  const handlePress = () => {

  }

 return (
  <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
    <ImageBackground
      source={pleaseregi}
      style={tw`w-[415px] h-[200px] rounded-[20px] mt-10 overflow-hidden opacity-70`}
      resizeMode='cover'>
      <View style={tw`p-4`}>
        <CustomFont style={tw`text-black text-[28px] ml-10 mt-10`}>술장고를 등록해 주세요!</CustomFont>
      </View>
    </ImageBackground>
  </TouchableOpacity>
 );
};

export default MyRefBanner;