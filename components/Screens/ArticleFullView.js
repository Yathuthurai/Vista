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

import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import ArticleCardFullView from "../shared/ArticleCardFullView";
import { useSelector } from "react-redux";
const ArticleFullView = ({ navigation, route }) => {
  const articleId = route.params.id;
  const article = useSelector((state) =>
    state.article.allPosts.find((article) => article.id === articleId)
  );
  console.log(article);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back_txt}>Back</Text>
      </TouchableOpacity>
      <ArticleCardFullView
        avatar={article.avatar}
        name={article.owner}
        time={article.moment}
        title={article.title}
        image={article.imgUrl}
        description={article.description}
      />
    </View>
  );
};

export default ArticleFullView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  back_txt: {
    paddingVertical: 25,
    color: "dodgerblue",
    fontWeight: "bold",
    fontSize: 16,
  },
});
