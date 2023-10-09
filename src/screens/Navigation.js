import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Screen1 from "./LoginScreen";
import Screen2 from "./SecondScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
    )
}

const Navigation = () =>{
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Screen1" >
                <Drawer.Screen name="Screen1" component={ Screen1 } />
                <Drawer.Screen name="Screen2" component={ Screen2 } />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


export default Navigation;