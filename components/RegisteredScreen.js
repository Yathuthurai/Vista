import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";

import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";

const RegisteredScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Animatable.Text animation="bounceIn" style={styles.txteffect}>
        Registered!
      </Animatable.Text>
    </View>
  );
};

export default RegisteredScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  txteffect: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
});
