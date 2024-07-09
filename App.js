import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameCard from './app/screens/gameCard';
import Login from './app/screens/login';
import Details from './app/screens/details';
import StartChallenge from './app/screens/StartChallenge';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GameCard' screenOptions={{ headerTitleAlign: 'center'}} >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='GameCard' component={GameCard} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='JoinChallenge' component={StartChallenge} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
