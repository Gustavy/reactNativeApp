import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './components/button';
import { Input } from './components/input';
import { Typo } from './components/typo';
import { HomeScreen } from './screens/home';
import { LoginScreen } from './screens/login';
import { NewItemScreen } from './screens/newItem';
import { RegisterScreen } from './screens/register';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
          <AppNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

function AppNavigator(){
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='NewItem' component={NewItemScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
