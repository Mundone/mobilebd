import React, { useContext, useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  ImageBackground,
  theme
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const PlayScreen = ({ navigation, route}) => {
  return (
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
      >
        Асуултын төрлүүд
      </Text>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
        <View style={styles.subContainer}>
        <TouchableOpacity style={styles.componentContainer} onPress={() => navigation.navigate('Play1', {singer: 'LanaDelRey'})}>
            <ImageBackground
              source={require("../assets/lana1.jpg")}
              style={styles.imgback}
            >
              <View style={{backgroundColor:'#000000'}}></View>
              <Text style={styles.containerText}>Lana Del Rey</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.componentContainer} onPress={() => navigation.navigate('Play1', {singer: 'Bold'})}>
          <ImageBackground
              source={require("../assets/bold.jpg")}
              style={styles.imgback}
            >
              <Text style={styles.containerText}>Bold</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
        <TouchableOpacity style={styles.componentContainer} onPress={() => navigation.navigate('Play1', {singer: 'Serchmaa'})}>
          <ImageBackground
              source={require("../assets/serchmaa.jpg")}
              style={styles.imgback}
            >
              <Text style={styles.containerText}>Serchmaa</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.componentContainer} onPress={() => navigation.navigate('Play1', {singer: 'NationalComposers'})}>
          <ImageBackground
              source={require("../assets/ay.jpg")}
              style={styles.imgback}
            >
              <Text style={styles.containerText}>Ардын хөгжим</Text>
            </ImageBackground>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default PlayScreen;

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
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    height: 100,
    width: 350,
    margin: 5,
    borderRadius: 10,
  },
  containerText: {
    color:'#fff', 
    fontSize:30, 
    textAlign:'right', 
    marginTop:60,
    marginRight:10,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 20,
    textShadowColor: 'black',
  },
  icon: {
    padding: 10,
    color: "#2D2B79",
  },
});