import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
  TextInput,
} from "react-native";

import { Avatar } from "react-native-paper";

import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import SearchbarElement from "../MainpageComponents/SearchbarElement";
import { Divider } from "react-native-paper";
import { updateArtricles } from "../Store/Actions/articles";
import { useDispatch, useSelector } from "react-redux";
//import TextInputArticle from "../shared/TextInputArticle";

const AddArticleScreen = ({ navigation, route }) => {
  const id = route.params.id;
  const article = useSelector((state) =>
    state.article.allPosts.find((post) => post.id === id)
  );

  const [text1, setText1] = React.useState(article.title);
  const [text2, setText2] = React.useState(article.imgUrl);
  const [text3, setText3] = React.useState(article.description);
  const [text4, setText4] = React.useState(article.referenceLink);

  const [formError, setFormError] = React.useState("");

  const dispatch = useDispatch();

  const updateHandler = () => {
    if (text1.trim().length === 0 || text3.trim().length === 0) {
      setFormError("Check your inputs");
      Alert.alert("Error", "Check your inputs...", [{ text: "OK" }]);
      return;
    }
    dispatch(updateArtricles(id, text1, text2, text3, text4));
    navigation.navigate("MyPosts");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.goback_btn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.gobackButtonTitle}>Back</Text>
      </TouchableOpacity>
      <View style={styles.add_article_container}>
        <ScrollView>
          <Text style={[styles.text_footer, { marginTop: 30 }]}>
            Add your article title
          </Text>
          <View style={styles.action}>
            <FontAwesome name="bookmark" color="#05375a" size={20} />
            <TextInput
              value={text1}
              placeholder="Article title"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text1) => setText1(text1)}
            />
          </View>
          <Text style={[styles.text_footer, { marginTop: 30 }]}>
            Add your Image url here
          </Text>
          <View style={styles.action}>
            <FontAwesome name="image" color="#05375a" size={17} />
            <TextInput
              value={text2}
              placeholder="Image url"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text2) => setText2(text2)}
            />
          </View>
          <Text style={[styles.text_footer, { marginTop: 30 }]}>
            Add your Article Content here
          </Text>
          <View style={styles.action}>
            <FontAwesome name="book" color="#05375a" size={20} />
            <TextInput
              value={text3}
              placeholder="Article content"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text3) => setText3(text3)}
              multiline
            />
          </View>
          <Text style={[styles.text_footer, { marginTop: 30 }]}>
            Add your Reference Links here
          </Text>
          <View style={styles.action}>
            <FontAwesome name="link" color="#05375a" size={20} />
            <TextInput
              value={text4}
              placeholder="References"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text4) => setText4(text4)}
            />
          </View>
          <View style={{ alignItems: "center", paddingVertical: 20 }}>
            <TouchableOpacity
              style={styles.button_go}
              onPress={() =>
                Alert.alert(
                  "Confirm",
                  "Are you going to update this Article ?",
                  [
                    { text: "Update", onPress: updateHandler },
                    { text: "Cancel" },
                  ]
                )
              }
            >
              <Text style={styles.goBtntxt}>UPDATE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddArticleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 15,
  },
  btn_group_container: {
    paddingTop: 2,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
  },
  add_article_container: {
    paddingTop: 5,
  },
  textInput: {
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 5,
    paddingTop: 8,
    color: "#05375a",
  },
  inputHeading: {
    fontSize: 16,
    color: "grey",
    fontWeight: "700",
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
  goBtntxt: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "slategray",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  goback_btn: {
    padding: 11,
    borderRadius: 50,
    alignItems: "flex-start",
    marginVertical: 1,
  },
  gobackButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "dodgerblue",
  },
});

/*
<View style={{ paddingTop: 50 }}>
            <Text style={styles.inputHeading}>Add your Article title here</Text>
            <View>
              <TextInput
                label="Title"
                value={text1}
                onChangeText={(text1) => setText1(text1)}
                underlineColor="dodgerblue"
                mode="outlined"
                dense="true"
                style={{ backgroundColor: "white" }}
              />
            </View>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={styles.inputHeading}>Add your Image url here</Text>
            <View>
              <TextInput
                label="ImgUrl"
                value={text2}
                onChangeText={(text2) => setText2(text2)}
                underlineColor="dodgerblue"
                mode="outlined"
                dense="true"
                style={{ backgroundColor: "white" }}
              />
            </View>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={styles.inputHeading}>
              Add your Article Content here
            </Text>
            <View>
              <TextInput
                label="Reference"
                value={text3}
                onChangeText={(text3) => setText3(text3)}
                mode="outlined"
                dense="true"
                multiline
                style={{ backgroundColor: "white" }}
              />
            </View>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={styles.inputHeading}>
              Add your Reference Links here
            </Text>
            <View>
              <TextInput
                label="Reference"
                value={text4}
                onChangeText={(text4) => setText4(text4)}
                mode="outlined"
                dense="true"
                style={{ backgroundColor: "white" }}
              />
            </View>
          </View>
*/
