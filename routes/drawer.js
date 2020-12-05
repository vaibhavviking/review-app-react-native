import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import {AppNavigator} from './homeStack';
// import About from '../screens/About';
import {AboutStack} from './aboutStack';
const Drawer = createDrawerNavigator();

export const DrawerNavigator=()=>(
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={AppNavigator} />
            <Drawer.Screen name='About' component={AboutStack} />
        </Drawer.Navigator>
    </NavigationContainer>
)