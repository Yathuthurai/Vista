import React, { useCallback, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  FlatList,
} from "react-native";

import { Avatar } from "react-native-paper";

import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import SearchbarElement from "../MainpageComponents/SearchbarElement";
import ArticleCard from "../shared/ArticleCard";
import { setArticles, fetchFavorite } from "../Store/Actions/articles";

import { useSelector, useDispatch } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const article_data = useSelector((state) => state.article.allPosts);

  const clickHandler = (id) => {
    navigation.navigate("ArticleCardFullView", { id });
  };

  const dispatch = useDispatch();

  const loadArticles = useCallback(async () => {
    await dispatch(setArticles());
    await dispatch(fetchFavorite());
  }, [dispatch]);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  return (
    <View style={styles.container}>
      <Animatable.View animation="bounceIn" style={styles.btn_group_container}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <FontAwesome name="user" color="dodgerblue" size={33} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FontAwesome name="home" color="dodgerblue" size={33} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Favourites")}>
          <FontAwesome name="star" color="dodgerblue" size={33} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
          <FontAwesome name="plus-circle" color="dodgerblue" size={33} />
        </TouchableOpacity>
      </Animatable.View>
      <View style={styles.searchbar_container}>
        <SearchbarElement />
      </View>
      <FlatList
        data={article_data}
        renderItem={({ item }) => (
          <ArticleCard
            clickHandler={() => clickHandler(item.id)}
            avatar={item.avatar}
            name={item.owner}
            time={item.moment}
            title={item.title}
            image={item.imgUrl}
            id={item.id}
          />
        )}
      />
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
    paddingBottom: 5,
    paddingTop: 50,
  },
  btn_group_container: {
    paddingTop: 2,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
  },
  searchbar_container: {
    paddingTop: 10,
  },
});
