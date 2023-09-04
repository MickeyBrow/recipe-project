import { 
  StyleSheet, 
  View,
  Text, 
} from "react-native";

const RecipeModule = props => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.headerTitle}</Text>
        <Text style={styles.seeAllOpt}>See all</Text>
      </View>
      <View style={styles.cardCarousel}>
        {/* {props.recipes.map((recipe) => {
          return(
            <Card>
              <Card.Title>{recipe.name}</Card.Title>
              <Card.Divider/>
              <Card.Image source={require(recipe.image)} />
            </Card>
          );
        })} */}
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