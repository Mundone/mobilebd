import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FormButton from '../components/FormButton';
import Quiz from './Quiz';
import QuizScreen from './QuizScreen';
import LoginScreen from './LoginScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import { styles } from "../style/style";
import PlayScreen from '../screens/PlayScreen';
import HomeSubScreen from '../screens/HomeSubScreen';
// import Track from '../screens/Track';

import { AuthContext } from '../navigation/AuthProvider';

const Tab = createBottomTabNavigator();

const HomeScreenWithNavigator = (navigation) => {
  
  return (
    <Tab.Navigator 
    initialRouteName={'Home'}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          // iconName = focused ? 'home' : 'home-outline';
          iconName = 'home';
        } else if (route.name === 'QuizScreen') {
          // iconName = focused ? 'help-circle' : 'help';
          iconName = 'help';
        } else if (route.name === 'Play') {
          iconName = 'play';
        } else if (route.name === 'Profile') {
          iconName = 'person';
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#ffffff',
      tabBarInactiveTintColor: '#ffffff',
      tabBarActiveBackgroundColor: '#000000',
      tabBarInactiveBackgroundColor: '#2c2c7c',
      tabBarShowLabel: false,
    })}
    >
         <Tab.Screen name="Home"
          component={HomeSubScreen}
          options={{
            headerTitle: 'Үндсэн хэсэг',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff', 
              shadowColor: '#fff', 
              elevation: 0,
            },
          }}
        />
         <Tab.Screen name="QuizScreen"
          component={QuizScreen} 
          options={{
            headerShown: false,
          }}
        />
         <Tab.Screen name="Play"
          component={PlayScreen}
          options={{
            headerShown: false,
          }}
        />
         <Tab.Screen name="Profile"
          component={ProfileScreen}
          options={{
            headerTitle: 'Хэрэглэгчийн бүртгэл',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff', 
              shadowColor: '#fff', 
              elevation: 0,
            },
          }}
        />
    </Tab.Navigator>
  );
}
export default HomeScreenWithNavigator;


{/* <Tab.Screen style={{position: 'absolute', display: 'none'}}
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{
            headerTitle: 'EditProfileScreen',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            // tabBarStyle: { display: "none" },
            headerStyle: {
              backgroundColor: '#fff', 
              shadowColor: '#fff', 
              elevation: 0,
              
            },
          }}
        /> */}



 // <View style={styles.container}>
    //   <Text style={styles.text}>Тавтай морил {user.uid}</Text>
    //   <FormButton buttonTitle='Logout' onPress={() => logout()} />

    //   <Text style={styles.text1}>Quiz бөглөх</Text>
    //   <FormButton buttonTitle='Quiz' onPress={() => navigation.navigate('QuizSingleChoiceApp')} />
      
    //   <Text style={styles.text1}>Navigate to tabs</Text>
    //   <FormButton buttonTitle='Tabs' onPress={() => navigation.navigate('Tabs')} />
    // </View>















// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//   );
// }