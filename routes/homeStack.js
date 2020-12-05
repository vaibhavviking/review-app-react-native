import React from 'react';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/header';
import {Image} from 'react-native';

const Stack = createStackNavigator();

export const AppNavigator = ({navigation}) => {

    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor:'#eee'
            },
            headerTintColor:'black',
            height:60,
            headerTitleStyle:{
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen name="Home"
            component={Home} 
            options={{
                headerTitle:props => <Header navigation={navigation} title='Gamezone' />,
                headerBackground: () => <Image style={{height:80}} source={require('../assets/game_bg.png')} />
            }}
            />
            <Stack.Screen name="ReviewDetails" 
            component={ReviewDetails}
            options={{
                title:'Review Details',
                headerBackground: () => <Image style={{height:80}} source={require('../assets/game_bg.png')} />
            }}
            />
        </Stack.Navigator>
    
    );
        }
