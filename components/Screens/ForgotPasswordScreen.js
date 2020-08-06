import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const ForgotPasswordScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    check_textInputChange: false,
    error: null,
  });

  const textInputChange = (val) => {
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

  const submitHandler = async () => {
    setData({
      ...data,
      error: null,
      isLoading: true,
    });
    try {
      await dispatch(logIn(data.email, data.password));
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
        <Text style={styles.text_header}>Forgot your password?</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>
          To reset your password, submit your email address below. If we can
          find your email, an email will be sent to your email address, with
          instructions how to get access again.
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back_txt}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back_txt}>Back</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default ForgotPasswordScreen;

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
    textAlign: "justify",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  back_txt: {
    paddingVertical: 25,
    color: "dodgerblue",
    fontWeight: "700",
    fontSize: 15,
  },
});
