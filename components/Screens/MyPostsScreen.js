import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";

import { useTheme } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Avatar } from "react-native-paper";
import ArticleCard from "../shared/ArticleCard";
import { setArticles } from "../Store/Actions/articles";

import { useSelector, useDispatch } from "react-redux";

const MyPostsScreen = ({ navigation }) => {
  const [image, setImage] = useState(
    "https://api.adorable.io/avatars/80/abott@adorable.png"
  );
  const { colors } = useTheme();

  const article_data = useSelector((state) => state.article.myPosts);

  const clickHandler = (id) => {
    navigation.navigate("ArticleCardFullView", { id });
  };

  const updateHandler = (id) => {
    navigation.navigate("UpdateArticle", { id });
  };

  const dispatch = useDispatch();

  const loadArticles = useCallback(() => {
    dispatch(setArticles());
  }, [dispatch]);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.goback_btn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.gobackButtonTitle}>Back</Text>
      </TouchableOpacity>
      <View>
        {article_data.length !== 0 ? (
          <FlatList
            data={article_data}
            renderItem={({ item }) => (
              <ArticleCard
                clickHandler={() => clickHandler(item.id)}
                updateHandler={() => updateHandler(item.id)}
                avatar={item.avatar}
                name={item.owner}
                time={item.moment}
                title={item.title}
                image={item.imgUrl}
                editable={true}
                id={item.id}
              />
            )}
          />
        ) : (
          <View style={styles.centered}>
            <Text style={styles.noPost_txt}>You haven't post anything yet</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default MyPostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 25,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "50%",
  },
  noPost_txt: {
    color: "red",
    fontSize: 16,
  },
  noPost_icon: {
    fontSize: 30,
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
  nothing: {
    height: 200,
    width: 300,
    alignSelf: "center",
  },
});

/*

*/
