import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions = {({route})=> ({
                tabBarIcon:({focused,color,size}) => {
                    let iconName;
                    if (route.name=== 'Feed') {
                        iconName = focused ? 'book':'book-outline';
                    } else if(route.name=== 'CreatePost') {
                        iconName = focused ?  'create': 'create-outline';
                    }
                    return<Ionicons name={iconName} size={size} color={color}/>;
                },
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
               
            })}>
            <Tab.Screen name='Feed' component={Feed} />  
            <Tab.Screen name='CreatePost' component={CreatePost} />
        </Tab.Navigator>
    );
};



export default BottomTabNavigator;