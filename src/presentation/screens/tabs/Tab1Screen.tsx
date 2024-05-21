import { Text, View } from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

// import Icon from 'react-native-vector-icons/Ionicons';
import { IonIcon } from '../../components/shared/IonIcon';


export const Tab1Screen = () => {

  // const navigation = useNavigation();





  return (
    <View>
      <HamburgerMenu />


      <Text>Tab1Screen</Text>

      {/* <Icon name="rocket-outline" size={100} /> */}
      <IonIcon name='rocket-outline' size={100} color='red' />

    </View>
  );
};