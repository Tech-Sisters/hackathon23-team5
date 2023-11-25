// import * as React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'
import QuotesLiked from "../screens/Quotes/QuotesLiked"
import Moods from "../screens/Moods/MoodsList"
import Calendar from "../screens/Generic/Calendar"
import ProfileScreen from '../screens/Users/ProfileScreen';
import Dashboard from "../screens/Generic/Dashboard";

 
const dashboardName = "Dashboard"
const calendarName = "Calendar"
const likedName = "Liked"
const moodsName = "Moods"
const profilName = "Profil"

const Tab = createBottomTabNavigator();
export default function BottomTabs() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
            initialRouteName={Dashboard}
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;

                if (rn === Dashboard) {
                iconName = focused ? 'home' : 'home-outline';

                } else if (rn === likedName) {
                iconName = focused ? 'liked' : 'liked-outline';

                } else if (rn === moodsName) {
                iconName = focused ? 'moods' : 'moods-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}>
            <Tab.Screen
                name="Liked"
                component={QuotesLiked}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="hearto" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Moods"
                component={Moods}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="pluscircleo" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="calendar" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={24} color="black" />
                        // <AntDesign name="calendar" size={24} color="black" />
                    ),
                }} />
        </Tab.Navigator>
        </NavigationContainer>
    )
}

