import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import Quiz from '../screens/Quiz';
import QuizScreen from '../screens/QuizScreen';
import Play1 from '../screens/Play';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false,}}/>
      <Stack.Screen name='EditProfileScreen' component={EditProfileScreen} options={{
          headerTitle: 'Бүртгэл засварлах хэсэг',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff', 
            shadowColor: '#fff', 
            elevation: 0,
          },
        }}/>
      {/* <Stack.Screen name='QuizScreen' component={QuizScreen} options={{ headerShown: false,}}/> */}
      <Stack.Screen name='Quiz' component={Quiz} options={{ headerShown: false,}}/>
      <Stack.Screen name='Play1' component={Play1} options={{ headerShown: false,}}/>

    </Stack.Navigator>
    
  );
}

export default AppStack;