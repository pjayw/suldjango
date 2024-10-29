import tw from 'twrnc';
import { ImageBackground, View } from 'react-native';
import CustomFont from '../common/CustomFont';
import bannerImage from '@/assets/banner.png'

const HomeBanner = () => {
 return (
  <ImageBackground
    source={bannerImage}
    style={tw`w-[415px] h-[200px] rounded-[20px] overflow-hidden`}
    resizeMode='cover'>
    <View style={tw`p-4`}>
      <CustomFont style={tw`text-black text-[28px] ml-8 mt-10`}>여기는</CustomFont>
      <CustomFont style={tw`text-black text-[28px] ml-8`}>알코홀릭!</CustomFont>
    </View>
  </ImageBackground>
 );
};

export default HomeBanner;

