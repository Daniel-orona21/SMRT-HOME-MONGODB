
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SuperScreen from "../screens/super";
import ServiciosScreen from "../screens/servicios";
import CasaScreen from "../screens/casa";
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export function Home() {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator
    initialRouteName="Casa"
    screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: '#494949',
      tabBarStyle: {
        backgroundColor: 'black',
        position: 'absolute', 
        opacity: 0.5, 
      },
      tabBarIconStyle: {
        marginTop: 10,
    },
    tabBarLabelStyle: {
        marginTop: 5, 
    },
    }}
>
            <Tab.Screen 
                name="Super" 
                component={SuperScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="shoppingcart" size={size} color={color} />
                    ),
                    
                    
                    headerTransparent: true,
                
                }}
            />
            <Tab.Screen
                name="Casa" 
                component={CasaScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                    headerTransparent: true,
                    headerShown: false,
                }}

            />
            <Tab.Screen 
                name="Servicios" 
                component={ServiciosScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="lightning-bolt" size={size} color={color} />
                    ),
                    tabBarBadge: 5,
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}


export default Home;