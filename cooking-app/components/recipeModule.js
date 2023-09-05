import { 
  StyleSheet, 
  View,
  Text,
  FlatList,
} from "react-native";

import {
  Card,
  Icon,
} from "react-native-elements";

const Cards = ({recipe}) => (
  <Card>
    <Card.Image style={{height: 200, width: 200}} source={{uri: recipe.imageUri}} />
    <Card.Divider/>
    <Card.Title>{recipe.name}</Card.Title>
    <View style={styles.recipeDescriptionRow}>
      {/* Here will be the rating and how many ingredients it needs */}
      <Text style={styles.recipeReviews}>
        <Icon
          name="heart"
          type="ionicon"
        />
        {recipe.likes}
      </Text>
      <Text style={styles.recipeIngredientCount}>
        <Icon
          name="cart"
          type="ionicon"
        />
        {recipe.ingredientCount}
      </Text>
    </View>
  </Card>
);

const RecipeModule = props => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.headerTitle}</Text>
        <Text style={styles.seeAllOpt}>See all</Text>
      </View>
      <View>
        <FlatList
          data={props.recipes}
          renderItem={({item}) => <Cards recipe={item}/>}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  headerTitle: {
    flex: 2,
    fontWeight: 'bold',
  },
  seeAllOpt: {
    flex: 1,
    textDecorationLine: 'underline',
    textAlign: 'right'
  },
  recipeDescriptionRow: {
    flexDirection:'row',
  },
  recipeReviews: {
    flex: 1,
    textAlign: 'center'
  },
  recipeType: {
    flex: 1,
    textAlign: 'center'
  },
});

export default RecipeModule;