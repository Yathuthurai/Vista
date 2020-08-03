import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import { signUp } from "../Store/Actions/auth";

import { useDispatch } from "react-redux";
import { color } from "react-native-reanimated";

const SignUpScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    check_textInputChange: false,
    secureTextEntry: true,
    error: null,
    emailError: null,
    firstNameError: null,
    lastNameError: null,
    passwordError: null,
    isLoading: false,
  });

  const emailInputChange = (val) => {
    if (val.length >= 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    }
  };

  const firstNameInputChange = (val) => {
    setData({
      ...data,
      firstName: val,
    });
  };

  const lastNameInputChange = (val) => {
    setData({
      ...data,
      lastName: val,
    });
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const dispatch = useDispatch();

  const submitHandler = async () => {
    setData({
      ...data,
      error: null,
      isLoading: true,
    });
    try {
      await dispatch(
        signUp(data.email, data.firstName, data.lastName, data.password)
      );
      navigation.navigate("Profile");
    } catch (e) {
      setData({
        ...data,
        error: e.message,
        isLoading: false,
      });
    }
  };

  useEffect(() => {
    if (data.error) {
      Alert.alert("An error occured", data.error, [{ text: "OK" }]);
    }
  }, [data.error]);
  if (data.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="dodgerblue" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="envelope" color="#05375a" size={17} />
          <TextInput
            placeholder="Your Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => emailInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 20 }]}>First Name</Text>
        <View style={styles.action}>
          <FontAwesome name="user" color="#05375a" size={20} />
          <TextInput
            placeholder="Your user name"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => firstNameInputChange(val)}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 20 }]}>Last Name</Text>
        <View style={styles.action}>
          <FontAwesome name="user" color="#05375a" size={20} />
          <TextInput
            placeholder="Your user name"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => lastNameInputChange(val)}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 20 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_footer, { marginTop: 20 }]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Confirm Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={submitHandler}>
            <Text style={styles.signInBtntxt}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.signUpBtntxt}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

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
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    width: 350,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    backgroundColor: "dodgerblue",
    marginTop: 40,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  signInBtntxt: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  signUpBtn: {
    width: 350,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    borderColor: "dodgerblue",
    borderWidth: 1,
    marginTop: 20,
  },
  signUpBtntxt: {
    color: "dodgerblue",
    fontSize: 20,
    fontWeight: "bold",
  },
});
