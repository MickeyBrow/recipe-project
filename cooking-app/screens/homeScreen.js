import { 
  StyleSheet, 
  TextInput, 
  View,
  Text, 
  FlatList,
  SafeAreaView,
} from "react-native";

import RecipeModule from "../../cooking-app/components/recipeModule";

export default function HomeScreen({navigation}) {
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

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="Enter Ingredients"
        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={Object.keys(data)}
          renderItem={({item}) => {
            switch(item){
              case "Picture Tab Ad":
                return; //Take an image of the fridge and return recipes that can be made with that
              case "Random Ad":
                return; //Ad for a random recipe.
              default:
                return <RecipeModule headerTitle={item} recipes={data[item]}/>;
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
    margin: 12,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
  },

  body: {
    margin: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});