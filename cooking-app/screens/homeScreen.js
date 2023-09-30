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
  const [ingredientsList, setIngredientsList]= useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/test')
      .then(response => response.json())
      .then(data => setHomePageData(data))
      .catch(error => console.log(error))
  }, []);

  if(!homePageData) return <Text>Loading...</Text>

  return (
    <SafeAreaView style={{height: '95%'}}>
      <View style={styles.header}>
        <IngredientSearchBar
          ingredientsList = {ingredientsList}
          removeIngredient = {setIngredientsList}
        />
      </View>
      <View style={styles.body}>
        {ingredientsList && ingredientsList.length <= 0 ?
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
          :
          null
        }
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