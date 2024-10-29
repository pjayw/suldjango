import tw from 'twrnc';
import { SafeAreaView, View } from 'react-native';
import HomeBanner from '@/components/Home/HomeBanner';
import MyRefBanner from '@/components/Home/MyRefBanner';

const HomeScreen = () => {
 return (
 <SafeAreaView style={tw``}>
  <HomeBanner />
  <MyRefBanner />
 </SafeAreaView>
 );
};

export default HomeScreen;