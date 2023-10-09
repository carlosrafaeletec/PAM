import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import Screen1 from "./LoginScreen";
import Screen2 from "./SecondScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Segunda Tela" component={SecondScreen} />
                <Stack.Screen name='Menu' component={Navigation} />
                <Stack.Screen name='Tela1' component={Screen1} />
                <Stack.Screen name='Tela2' component={Screen2} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Navigation = () =>{
    return(
        <MainStack>
            <Drawer.Navigator initialRouteName="Screen1" >
                <Drawer.Screen name="Screen1" component={ Screen1 } />
                <Drawer.Screen name="Screen2" component={ Screen2 } />
            </Drawer.Navigator>
        </MainStack>
    )
}


export default Navigation;