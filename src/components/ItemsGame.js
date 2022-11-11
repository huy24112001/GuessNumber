import { Text, View,StyleSheet } from "react-native";

function ItemsGame(props){
  return<View style={styles.vitem}>
    <Text style={styles.item} >{props.name}</Text>
  </View>;

}
const styles = StyleSheet.create({
  item:{

  },
  vitem:{
    width: 250,
    height: 50,
    marginLeft: 10,
    marginTop: 15,
    paddingTop: 10,
    borderWidth: 2,
    borderColor: '#342424FF',
    borderRadius:5,
    backgroundColor:'#574040'

  }
})
export default ItemsGame;
