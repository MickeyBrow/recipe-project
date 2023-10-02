import { 
  StyleSheet, 
  View,
  Text,
  FlatList,
  Image,
} from "react-native";

import {
  Card,
  Icon,
} from "react-native-elements";

const Cards = ({recipe}) => (
  <View style={styles.card}>
    <View>
      <Image
        style={{width: 200, height: 200}}
        source={{uri: recipe.image}}
      />
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <Text style={{backgroundColor: 'grey', color: 'white', textShadowColor: 'black', textShadowRadius: 7}}>{recipe.title}</Text>
      </View>
    </View>
  </View>
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
  card: {
    marginBottom: 5,
    paddingRight: 40,
  },
});

export default RecipeModule;