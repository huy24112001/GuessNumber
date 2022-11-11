import { StyleSheet, Text, View } from "react-native";

function TittleScreen(props) {
  return (<View style={styles.title}>
    <Text style={styles.text}>{props.name}</Text>
  </View>)
}
const styles = StyleSheet.create({
title: {
    width: 250,
    height: 50,
    marginLeft: 10,
    marginTop: 50,
    paddingTop: 10,
    borderWidth: 2,
    borderColor: '#ffffff',
},
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
  },
});
export default TittleScreen;
