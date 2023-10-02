import { 
  StyleSheet, 
  View,
  Text,
  FlatList,
  Button,
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
        resizeMode="contain"
        style={{width: 400, height: 300}}
        source={{uri: recipe.image}}
      />
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <Text style={{backgroundColor: 'grey', color: 'white', textShadowColor: 'black', textShadowRadius: 7}}>{recipe.title}</Text>
      </View>
    </View>
  </View>
);

const AllRecipeFlatList = ({data, title}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', marginBottom: 10}}>{title}</Text>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (<Cards recipe={item}/>);
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: '10%',
    alignItems: 'flex-start',
  },
  card: {
    marginBottom: 30,
  },
});

export default AllRecipeFlatList;