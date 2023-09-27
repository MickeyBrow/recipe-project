import { useEffect, useState } from "react";
import { 
  StyleSheet, 
  TextInput, 
  View,
  Text, 
  FlatList,
  SafeAreaView,
} from "react-native";

import RecipeModule from "../../cooking-app/components/recipeModule";
import PictureFunctionalityAd from "../components/pictureFunctionalityAd";
import RandomRecipeAd from "../components/randomRecipeAd";
import IngredientSearchBar from "../components/ingredientSearchBar";

export default function HomeScreen({navigation}) {

  const [homePageData, setHomePageData] = useState();

  useEffect(() => {
    fetch('http://127.0.0.1:5000/test')
      .then(response => response.json())
      .then(data => setHomePageData(data))
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

  const data = {
    "Picture Tab Ad": [],
    "Popular Recipes": recipeSeed,
    "Healthy Options": recipeSeed,
    "Desserts": recipeSeed,
    "Random Ad": [],
    "Quick Meals": recipeSeed
  };

  if(!homePageData) return <Text>Loading...</Text>

  return (
    <SafeAreaView style={{height: '95%'}}>
      <View style={styles.header}>
        <IngredientSearchBar/>
      </View>
      <View style={styles.body}>
        <FlatList
          data={Object.keys(homePageData)}
          renderItem={({item}) => {
            switch(item){
              case "Picture Tab Ad":
                return <PictureFunctionalityAd navigation={navigation}/>; //Take an image of the fridge and return recipes that can be made with that
              case "Random Ad":
                return <RandomRecipeAd navigation={navigation}/>; //Ad for a random recipe.
              default:
                return <RecipeModule headerTitle={item} recipes={homePageData[item]}/>;
            }
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 12,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
  },
  body: {
    margin: 12,
    marginBottom: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});