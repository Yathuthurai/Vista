import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";

import { Avatar } from "react-native-paper";

import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>
          Welcome to{" "}
          <Text style={{ color: "#ffd700", fontStyle: "italic" }}>
            LankaTutor!
          </Text>
        </Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.container_profile}>
          <Avatar.Image
            size={200}
            source={require("../../assets/profile.png")}
          />
          <Text style={styles.text_footer1}>Thurairajah Yathurshan</Text>
          <Text style={styles.text_footer2}>yathurshan@gmail.com</Text>
        </View>
        <View style={styles.container_profile_other}>
          <TouchableOpacity
            style={styles.edit_profile}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={{ color: "dodgerblue" }}>Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_go}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.goBtntxt}>GO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.signUpBtntxt}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  container_profile: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 50,
    flex: 2,
  },
  container_profile_other: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer1: {
    color: "#05375a",
    fontSize: 25,
    fontFamily: "sans-serif-medium",
  },
  text_footer2: {
    color: "#05375a",
    fontSize: 14,
    fontStyle: "italic",
    fontFamily: "Roboto",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  button: {
    width: 350,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    backgroundColor: "dodgerblue",
    marginTop: 30,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  button_go: {
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    borderColor: "dodgerblue",
    backgroundColor: "dodgerblue",
    borderWidth: 1,
    marginTop: 20,
  },
  signUpBtntxt: {
    color: "whitesmoke",
    fontSize: 16,
    fontWeight: "bold",
  },
  goBtntxt: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});
