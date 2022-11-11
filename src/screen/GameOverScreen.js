import { Button, Text, View,StyleSheet} from "react-native";
import App from "../../App";
import TittleScreen from "../components/TittleScreen";
import RNRestart from 'react-native-restart';


function GameOverScreen(props) {

function Reset(){
  props.RestartApp()
}


  function check() {
    if (props.timNb<=5) {
      return ((<>
        <View style={styles.body}><Text style={styles.hbody}>Điện  thoại của bạn cần {props.timNb} trên 5 lượt tối đa để đoán ra số {props.number}</Text>
        </View>
      </>))

    } else return (<>
      <View style={styles.body}><Text style={styles.hbody}>Điện thoại của bạn cần {props.timNb} trên 5 lượt tối đa để đoán ra số {props.number}</Text>
    </View></>)
  }

  return <View style={styles.main}><TittleScreen name={'Game Over !!'}/>
    {check()}
    <Button onPress={Reset} color={'#38381e'} title={'Bắt đầu game mới'}></Button>
  </View>
}

  const styles=StyleSheet.create({
    body: {
      width: 270,
      height: 100,
      backgroundColor: '#342424FF',
      marginTop: 50,
      paddingTop: 35,
      borderWidth: 2,
      borderColor: '#574040',
    },
    main:{
      flexDirection:'column',
      alignItems:'center',
      // justifyContent:'center'
    }
  }



  )


export default GameOverScreen;
