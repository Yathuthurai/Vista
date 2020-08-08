import React, { useState } from "react";
import { Button, Image, View, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Avatar } from "react-native-paper";
import { imagePick } from "../Store/Actions/auth";

import { useDispatch, useSelector } from "react-redux";

const ImagePickerExample = () => {
  const [image, setImage] = useState(
    useSelector((state) => state.auth.profilePicture)
  );

  const dispatch = useDispatch();

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const imagePickerHandler = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
        const response = await fetch(result.uri);
        const blob = await response.blob();
        await dispatch(imagePick(blob));
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {image ? (
        <Avatar.Image source={{ uri: image }} size={200} />
      ) : (
        <Avatar.Image source={require("../../assets/profile.png")} size={200} />
      )}
      <TouchableOpacity
        onPress={imagePickerHandler}
        style={{
          marginTop: 5,
          backgroundColor: "dimgray",
          width: 60,
          alignItems: "center",
          justifyContent: "center",
          height: 30,
          borderRadius: 30,
        }}
      >
        <FontAwesome name="camera-retro" color="white" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerExample;

/*
{image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
 */
