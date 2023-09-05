import { 
  StyleSheet, 
  View,
  Text,
  FlatList,
} from "react-native";

import {
  Card
} from "react-native-elements";

const Cards = ({recipe}) => (
  <Card>
    {console.log(recipe)}
    {/* <Card.Title>{recipe.name}</Card.Title> */}
    <Card.Title>Title</Card.Title>
    <Card.Divider/>
    {/* <Card.Image source={require(recipe.image)} /> */}
    <Card.Image style={{height: 200, width: 200}} source={{uri: recipe}} />
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
});

export default RecipeModule;