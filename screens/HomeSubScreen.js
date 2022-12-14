import React, { useState, useContext, useEffect } from "react";
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
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FormButton from "../components/FormButton";
// import QuizSingleChoiceApp from "../screens/QuizSingleChoiceApp";
import LoginScreen from "./LoginScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../navigation/AuthProvider";
import firestore from "@react-native-firebase/firestore";
import EditProfileScreen from "./EditProfileScreen";
import Styles, { styles } from "../style/style";

const HomeSubScreen = ({ navigation, route }) => {
  const { user, logout } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    await firestore()
      .collection("users")
      .doc(user.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          // console.log("User Data", documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getUser();
    navigation.addListener("focus", () => setLoading(!loading));
  }, []);

  return (
    <View
      style={{
        zIndex: 1,
        flex: 1,
        backgroundColor: "#ADABCE",
        alignItems: "center",           
        borderRadius: 20

      }}
    >
      <Image
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          height: 240,
          width: "100%",
        }}
        source={require("../assets/back.jpg")}
      />
                      <Text style={styles.text}>Тавтай морил {userData.fname}</Text>

      <SafeAreaView
        style={[
          style.container,
          {
            flex: 1,
            backgroundColor: "#fff",
            borderWidth: 3,
            borderColor: "#2D2B79",
            position: "absolute",
            marginTop: 300,
            alignItems: "center",
          },
        ]}
      >

        <View style={style.subContainer}>

          <View style={style.componentContainer}>
            <Text style={style.containerText}>Таны дуу зөв таасан оноо</Text>
            <Text style={styles.pointUser}>{userData ? userData.songPoints || 'Оноогүй.' : ''}</Text>
          </View>
          <View style={style.componentContainer}>
            <Text style={style.containerText}>Таны дуу зөв таасан хувь</Text>
            <Text style={styles.pointUser}>{userData ? Math.floor(100 * Number(userData.songPoints)/ Number(userData.songDefaultPoint)) +'%'|| 'Оноогүй.' : ''}</Text>
          </View>
        </View>
        <View style={style.subsubContainer}>
          <View style={style.componentContainer}>
            <Text style={style.containerText}>Асуултанд зөв хариулсан оноо</Text>
            <Text style={styles.pointUser}>{userData ? userData.textPoints || 'Оноогүй.' : ''}</Text>
          </View>
          <View style={style.componentContainer}>
            <Text style={style.containerText}>Асуултанд зөв хариулсан хувь</Text>
            <Text style={styles.pointUser}>{userData ? Math.floor(100 * Number(userData.textPoints)/ Number(userData.textDefaultPoint))+'%'|| 'Оноогүй.' : ''}</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeSubScreen;

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "90%",
    height: "47%",
    backgroundColor: "#2D2B79",
    borderRadius: 20,
    paddingTop: StatusBar.currentHeight,
  },
  subContainer: {
    flexDirection: "row",
    marginTop:-50
  },
  subsubContainer: {
    flexDirection: "row",
    marginTop:30
  },
  imgback: {
    resizeMode: "cover",
    flex: 1,
    width: "100%",
    borderRadius: 10,
  },
  componentContainer: {
    alignItems: "center",
    height: 100,
    width: 150,
  },
  containerText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    marginRight: 10,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 20,
    textShadowColor: "white",
  },
  icon: {
    padding: 10,
    color: "#2D2B79",
  },
});
