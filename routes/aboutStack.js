import React from 'react';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/header';
import {Image} from 'react-native';

const Stack = createStackNavigator();

export const AboutStack = ({ navigation }) => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e'
                },
                headerTintColor: '#fff',
                height: 60,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <Stack.Screen
             name="About"
                component={About}
                options={{
                    headerTitle: props => <Header navigation={navigation} title='About Gamezone' />,
                    headerBackground: () => <Image style={{height:80}} source={require('../assets/game_bg.png')} />
                }}
            />

        </Stack.Navigator>

    );
}
