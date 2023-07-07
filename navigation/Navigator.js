import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import MainContainer from './MainContainer';
import RegisterScreen from './RegisterScreen';
import DetailScreen from './screens/DetailScreens';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={MainContainer} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default Navigator;
