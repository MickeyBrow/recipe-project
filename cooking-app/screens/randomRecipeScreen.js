import { useState, useEffect } from "react";
import { 
  StyleSheet, 
  TextInput, 
  View,
  Text, 
  Button,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import AllRecipeFlatList from "../components/allRecipeFL";

export default function RandomRecipeScreen({navigation}) {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    fetch('http://127.0.0.1:5000/randomPage')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.log(error))
  }, []);

  const recipeSeed = [
    {
      name: "naruto",
      imageUri: "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png/revision/latest/scale-to-width-down/1200?cb=20210223094656",
      likes: 3,
      ingredientCount: 3,
    },
    {
      name: "kakashi",
      imageUri: "https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest/scale-to-width-down/1200?cb=20230803224121",
      likes: 4,
      ingredientCount: 31,
    },
    {
      name: "itachi",
      imageUri: "https://sportshub.cbsistatic.com/i/2021/03/18/8efc04dc-59f0-47c2-8653-4ea8d3b42da5/naruto-itachi-uchiha-anime-tribute-1239755.jpg?width=1200",
      likes: 32,
      ingredientCount: 93,
    },
    {
      name: "gaara",
      imageUri: "https://static.wikia.nocookie.net/naruto/images/2/20/Gaara_in_Part_I.png/revision/latest/scale-to-width-down/1200?cb=20221010023824",
      likes: 0,
      ingredientCount: 1,
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.fullContainer}>
        <AllRecipeFlatList data={recipes} title="Random Recipe"/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    margin: 12,
    flexDirection: 'column',
  },
});