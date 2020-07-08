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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import SearchbarElement from "./SearchbarElement";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.btn_group_container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="user" color="dodgerblue" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="home" color="dodgerblue" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="star" color="dodgerblue" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="plus-circle" color="dodgerblue" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchbar_container}>
        <SearchbarElement />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 50,
  },
  btn_group_container: {
    paddingTop: 2,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  searchbar_container: {
    paddingTop: 10,
  },
});
