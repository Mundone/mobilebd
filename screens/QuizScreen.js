import React, { useContext, useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar, Button
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Quiz from "./Quiz";



const QuizScreen = ({ navigation, route }) => {
    return (
      // <View><Text onPress={() => navigation.navigate('Quiz')}>hha</Text>
      //   <Button
      //   onPress={() => navigation.navigate('Quiz')}
      //   title="Learn More"
      //   color="#841584"
      //   accessibilityLabel="Learn more about this purple button"
      // />
      // </View>
      <SafeAreaView
        style={[
          styles.container,
          { marginTop: -25, zIndex: 1, backgroundColor: "#fff" },
        ]}
      >
      <Text
        style={{
          color: "#2D2B79",
          fontWeight: "500",
          fontSize: 25,
          textAlign: "center",
          padding: 15
        }}
        onPress={() => navigation.navigate('Quiz')}
      >
        Асуултын төрлүүд
      </Text>
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
        <View style={styles.subContainer}>
        <TouchableOpacity style={styles.componentContainer} onPress={() => navigation.navigate('Quiz', {year: '2020'})}>
            {/* <ImageBackground
              source={require("../assets/lana1.jpg")}
              style={styles.imgback}
            > */}
              <View style={{backgroundColor:'#000000'}}></View>
              <Text style={styles.containerText}>1-р асуултын сан</Text>
            {/* </ImageBackground> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.componentContainer} onPress={() => navigation.navigate('Quiz', {year: '2021'})}>
          {/* <ImageBackground
              source={require("../assets/bold.jpg")}
              style={styles.imgback}
            > */}
              <Text style={styles.containerText}>2-р асуултын сан</Text>
            {/* </ImageBackground> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.componentContainer}>
              <Text style={styles.containerText}>3-р асуултын сан</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.componentContainer}>
              <Text style={styles.containerText}>4-р асуултын сан</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
      </SafeAreaView>
    );
  };
  export default QuizScreen;



  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingTop: StatusBar.currentHeight,
      flex: 1,
    },
    subContainer: {
      flexDirection: "column",
    },
    imgback:{
      resizeMode:'cover',
      flex: 1,  
      width: "100%", 
      borderRadius:10
    },
    componentContainer: {
      backgroundColor: "#2c2c7c",
      alignItems: "center",
      height: 100,
      width: 350,
      margin: 5,
      borderRadius: 10,
    },
    containerText: {
      color:'#fff', 
      fontSize:35, 
      textAlign:'right', 
      marginTop:50,
      marginRight:10,
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 20,
      textShadowColor: 'black',
      bottom: 30,
      // fontWeight: 'bold'
    },
    icon: {
      padding: 10,
      color: "#2D2B79",
    },
  });