import react from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './TabNavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component = {BottomTabNavigator}></Drawer.Screen>
            <Drawer.Screen name="Profile" component = {Profile}></Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;