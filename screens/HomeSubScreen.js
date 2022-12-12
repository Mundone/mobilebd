import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FormButton from '../components/FormButton';
import LoginScreen from './LoginScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../navigation/AuthProvider';
import { styles } from "../style/style";
import firestore from '@react-native-firebase/firestore';
import EditProfileScreen from './EditProfileScreen';
import SoundPlayer from 'react-native-sound-player'



const HomeSubScreen = ({navigation, route}) => {

    const {user, logout} = useContext(AuthContext);
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUser = async() => {
      await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then((documentSnapshot) => {
        if( documentSnapshot.exists ) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      })
    }

    useEffect(() => {
        getUser();
        navigation.addListener("focus", () => setLoading(!loading));
      }, []);

      return (
      <View style={styles.containerMain}>

      <Image
       style={{justifyContent: 'flex-start', alignItems: 'flex-start', height: 200, width: '100%',}}
       source = {require('../assets/back.jpg')}
       />

      <Text style={styles.text}>Тавтай морил {userData.fname}</Text>
        <View style={{justifyContent: 'space-around', alignContent: 'center', flex: 1, flexDirection: 'column', width: '90%'}}>
        <View style={{justifyContent: 'space-around', flexDirection: 'row', width: 400}}>
          <View style={{backgroundColor: '#A09DD5', justifyContent: 'center', alignContent: 'center', paddingHorizontal: 30, paddingVertical: 20, flexDirection: 'row'}}>
            <Text style={{fontSize: 22}}>АЛДАРТАЙ ДУУНУУД</Text>
            {/* <FormButton style={{color: '#000000'}} buttonTitle='->' onPress={() => navigation.navigate('QuizSingleChoiceApp')} /> */}

          </View></View>
          <View style={{justifyContent: 'space-around', flexDirection: 'row', width: 400}}>
            <View style={{backgroundColor: '#A09DD5', justifyContent: 'center', alignContent: 'center', paddingHorizontal: 30, paddingVertical: 20, flexDirection: 'row'}}>
            <Text style={{fontSize: 22}}>       ПОП ДУУНУУД      </Text>
          </View></View>
          <View style={{justifyContent: 'space-around', flexDirection: 'row', width: 400}}>
            <View style={{backgroundColor: '#A09DD5', justifyContent: 'center', alignContent: 'center', paddingHorizontal: 30, paddingVertical: 20, flexDirection: 'row'}}>
            <Text style={{fontSize: 22}}>        РОК ДУУНУУД       </Text>
          </View></View>
          <View style={{justifyContent: 'space-around', flexDirection: 'row', width: 400}}>
            <View style={{backgroundColor: '#A09DD5', justifyContent: 'center', alignContent: 'center', paddingHorizontal: 30, paddingVertical: 20, flexDirection: 'row'}}>
            <Text style={{fontSize: 22}}>      ЖАЗЗ ДУУНУУД     </Text>
          </View></View>
          
      </View>
      
      </View>

       
      );
  }
  
  export default HomeSubScreen;
