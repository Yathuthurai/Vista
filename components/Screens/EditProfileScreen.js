import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from "react-native";

import { useTheme } from "react-native-paper";
import { useSelector } from "react-redux";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import ImagePickerExample from "../shared/ImagePickerExample";

const Profile = ({ navigation }) => {
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const email = useSelector((state) => state.auth.email);

  const [image, setImage] = useState(
    "https://api.adorable.io/avatars/80/abott@adorable.png"
  );
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.goback_btn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.gobackButtonTitle}>Back</Text>
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <View style={{ paddingTop: 30, alignItems: "center" }}>
          <ImagePickerExample />
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: "bold",
              color: "dimgray",
            }}
          >
            {firstName + " " + lastName}
          </Text>
        </View>
      </View>
      <View style={{ paddingTop: 40 }}>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            value={firstName}
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            value={lastName}
            placeholder="Last Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={colors.text} size={20} />
          <TextInput
            value={email}
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
        <View
          style={{
            paddingTop: 7,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("MyPosts")}>
            <Text style={styles.profileFooterText}>My Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ChangePwd")}>
            <Text style={styles.profileFooterText}>Change password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  containero: {
    paddingTop: 20,
  },
  commandButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 11,
    borderRadius: 50,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    marginVertical: 7,
  },
  goback_btn: {
    padding: 11,
    borderRadius: 50,
    alignItems: "flex-start",
    marginVertical: 1,
  },
  myPost_btn: {
    padding: 11,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 1,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },

  myPost_text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },

  gobackButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "dodgerblue",
  },
  profileFooterText: {
    fontSize: 15,
    fontWeight: "600",
    color: "dodgerblue",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
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
});

/* <TouchableOpacity>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 80,
            }}
          >
            <ImageBackground
              source={{
                uri: image,
              }}
              style={{ height: 100, width: 100 }}
              imageStyle={{ borderRadius: 15 }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="camera"
                  size={35}
                  color="#fff"
                  style={{
                    opacity: 0.7,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "#fff",
                    borderRadius: 10,
                  }}
                />
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity> */
/*
<View style={styles.action}>
          <Feather name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
*/
