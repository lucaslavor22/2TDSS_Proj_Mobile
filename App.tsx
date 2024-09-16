import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/login/LoginScreen';
import Tabs from './app/(tabs)/index';
import { RootStackParamList } from './app/types'; 

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Catalog" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
