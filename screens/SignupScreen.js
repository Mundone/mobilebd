import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

import { AuthContext } from '../navigation/AuthProvider';


const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [about, setAbout] = useState();
  const [userData, setUserData] = useState(null);



  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Хаяг үүсгэх</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="И-мейл"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

    <FormInput
        onChangeText={(lastname) => setLastname(lastname)}
        placeholderText="Овог "
        iconType="user"
        autoCorrect={false}
      />

    <FormInput
        onChangeText={(firstname) => setFirstname(firstname)}
        placeholderText="Нэр"
        iconType="user"
        autoCorrect={false}
      />

    {/* <Ionicons name="ios-clipboard-outline" color="#333333" size={20} /> */}
    <FormInput
        onChangeText={(about) => setAbout(about)}
        placeholderText="Танилцуулга"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Нууц үг"
        iconType="lock"
        secureTextEntry={true}
      />
      
      {/* <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Нууц үгээ давтан оруулна уу"
        iconType="lock"
        secureTextEntry={true}
      /> */}
      

      <FormButton
        buttonTitle="Бүртгүүлэх"
        onPress={() => register(email, password, firstname, lastname, about)}
      />

      {/* <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Terms of service</Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Privacy Policy</Text>
      </View> */}
      <Text style={{color: '#000000', paddingBottom: 20, paddingTop: 20, fontSize: 20}}>
          эсвэл
        </Text>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>
          Бүртгэлтэй юу? Нэвтрэх
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A09DD5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 36,
    marginBottom: 10,
    color: '#000000',
    fontWeight: 'bold'
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2c2c7c',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});

