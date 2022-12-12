import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

import { AuthContext } from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext);


  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Нэвтрэх</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="И-мэйл"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Нууц үг"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Нэвтрэх"
        onPress={() => login(email, password)}
        // style={{cursor:'hand'}}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Нууц үгээ мартсан уу?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText2}>
        Шинэ хаяг үүсгэх
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A09DD5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#000000',
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 20
  },
  navButton: {
    marginTop: 15,
  },
 
  forgotButton: {
    marginVertical: 35,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color : '#000000',
    fontFamily: 'Lato-Regular',
  },
  navButtonText2: {
    fontSize: 18,
    fontWeight: '500',
    color : '#000000',
    fontFamily: 'Lato-Regular',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1
  },
});