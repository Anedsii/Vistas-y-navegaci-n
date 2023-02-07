import { NavigationContainer } from '@react-navigation/native';
import ShopNavigator from './shops';

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <ShopNavigator/>
    </NavigationContainer>
  );
};

export default AppNavigator;