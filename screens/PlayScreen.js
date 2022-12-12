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

// import Play1 from "./Play";



const PlayScreen = ({ navigation, route }) => {
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
          top: -10,
        }}
        >
        Асуултын төрлүүд - Дуу
      </Text>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.componentContainer} onPress={() => navigation.navigate('Play1', {singer: 'Bold'})}>
            <Text style={styles.containerText}>Болд</Text>
            <Ionicons style={styles.icon} name="heart" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.componentContainer} onPress={() => navigation.navigate('Play1', {singer: 'BX'})}>
            <Text style={styles.containerText}>BX</Text>
            <Ionicons style={styles.icon} name="heart" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.componentContainer}>
            <Text style={styles.containerText}>Prdess Here</Text>
            <Ionicons style={styles.icon} name="heart" />
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.componentContainer}>
            <Text style={styles.containerText}>Press Here</Text>
            <Ionicons style={styles.icon} name="heart" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.componentContainer}>
            <Text style={styles.containerText}>Prdess Here</Text>
            <Ionicons style={styles.icon} name="heart" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.componentContainer}>
            <Text style={styles.containerText}>Prdess Here</Text>
            <Ionicons style={styles.icon} name="heart" />
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.componentContainer}>
            <Text style={styles.containerText}>Press Here</Text>
            <Ionicons style={styles.icon} name="heart" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.componentContainer}>
            <Text style={styles.containerText}>Prdess Here</Text>
            <Ionicons style={styles.icon} name="heart" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.componentContainer}>
            <Text style={styles.containerText}>Prdess Here</Text>
            <Ionicons style={styles.icon} name="heart" />
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.componentContainer}>
            <Text style={styles.containerText}>Press Here</Text>
            <Ionicons style={styles.icon} name="heart" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.componentContainer}>
            <Text style={styles.containerText}>Prdess Here</Text>
            <Ionicons style={styles.icon} name="heart" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.componentContainer}>
            <Text style={styles.containerText}>Prdess Here</Text>
            <Ionicons style={styles.icon} name="heart" />
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
      flexDirection: "row",
    },
    componentContainer: {
      backgroundColor: "#D9D9D9",
      alignItems: "center",
      height: 100,
      width: 100,
      margin: 5,
      borderRadius: 10,
    },
    containerText: {
      fontSize: 25,
      color: "#2D2B79",
      fontWeight: "500",
    },
    icon: {
      padding: 10,
      color: "#2D2B79",
    },
  });
  