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
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../Store/Actions/auth";

import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const ProfileScreen = ({ navigation }) => {
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    await dispatch(logout());
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>
          Welcome to{" "}
          <Text style={{ color: "powderblue", fontStyle: "italic" }}>
            Vista
          </Text>
          {"\n"}
          <Text style={styles.text_header}>Knowledge sharing center</Text>
        </Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.container_profile}>
          <Avatar.Image
            size={200}
            source={require("../../assets/profile.png")}
          />
          <Text style={styles.text_footer1}>{firstName + " " + lastName}</Text>
          <Text style={styles.text_footer2}>{email}</Text>
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
          <TouchableOpacity onPress={logoutHandler} style={styles.button}>
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
    flex: 4,
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
    color: "lavender",
    fontWeight: "bold",
    fontSize: 27,
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
