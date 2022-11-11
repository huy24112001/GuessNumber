import { Button, Text, View,StyleSheet} from "react-native";
import App from "../../App";

function GameOverScreen(props) {


  function check() {
    if (props.win) {
      return (<View style={styles.body}><Text style={styles.hbody}>Số đúng lớn hoặc nhỏ hơn ?</Text>


      </View>)
    } else return (<View style={styles.body}><Text style={styles.hbody}>Số đúng lớn hoặc nhỏ hơn ?</Text>
    </View>)
  }

  return <View style={styles.main}>
    <Text>{check()}</Text>
  </View>
}

  const styles=StyleSheet.create({
    body: {
      width: 270,
      height: 400,
      backgroundColor: '#342424FF',
      marginTop: 50,
      paddingTop: 35,
      borderWidth: 2,
      borderColor: '#574040',
    },
    main:{
      alignItems:'center'
    }
  }



  )


export default GameOverScreen;
