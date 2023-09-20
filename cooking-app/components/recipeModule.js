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
    <Card.Image style={{height: 200, width: 200}} source={{uri: recipe.image}} />
    <Card.Divider/>
    <Card.Title>{recipe.title}</Card.Title>
  </Card>
);

const RecipeModule = props => {
  return (
    <>
      <View style={styles.moduleContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{props.headerTitle}</Text>
        </View>
        <View>
          <FlatList
            style={{marginVertical: 10}}
            data={props.recipes}
            renderItem={({item}) => <Cards recipe={item}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: '3%',
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
  moduleContainer: {
  },
});

export default RecipeModule;