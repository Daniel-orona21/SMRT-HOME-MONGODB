import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthProvider, useAuth } from './app/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/screens/Home';
import Login from './app/screens/Login';
import ProfileScreen from './app/screens/perfil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}

export const Layout = () => {
  const { authState, onLogout } = useAuth();
  return(
    <NavigationContainer>
      <Stack.Navigator>
      { authState?.authenticated ? (
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: '#fff', 
          headerRight: () => <Button onPress={onLogout} title="Sign out" />
        }}></Stack.Screen>
      ) : (
        <Stack.Screen name="Login" component={Login}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: '#fff',
        }}
        ></Stack.Screen>
        
        
      )}
      <Stack.Screen name="Perfil" component={ProfileScreen}
       /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};
