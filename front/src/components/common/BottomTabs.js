import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'
import QuotesLiked from "../screens/Quotes/QuotesLiked"
import Moods from "../screens/Moods/MoodsList"
import Calendar from "../screens/Generic/Calendar"
import Profile from "../screens/Users/ProfileScreen"


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator initialRouteName='Dashboard'>
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
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={24} color="black" />
                        // <AntDesign name="calendar" size={24} color="black" />
                    ),
                }} />
        </Tab.Navigator>
    )
}

