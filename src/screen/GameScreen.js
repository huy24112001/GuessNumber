import { Text, View, StyleSheet, Button, ScrollView, Alert } from "react-native";
import { useEffect, useState } from "react";
import TittleScreen from "../components/TittleScreen";
import ItemsGame from "../components/ItemsGame";

function GameScreen(props) {
  const [leftNb, setLeftNb] = useState(1);
  const [rightNb, setRightNb] = useState(99);
  const [numberRandom, setNumberRandom] = useState(getRndInteger(1, 99));
  const [listText, setListText] = useState([]);
  const [timeNumber,setTimeNumber] = useState(0)

  useEffect(() => {

    if(numberRandom === props.number){
      props.onOver(true,timeNumber)
    }
  }, [numberRandom, timeNumber])


  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function CaoHon() {
     let txt;
    if (props.number > numberRandom) {
      setTimeNumber(timeNumber+1)
      txt = ' #' +(timeNumber+1)+'             Điện thoại bạn đoán: '+numberRandom;
      setListText([txt,...listText]);
      setLeftNb(numberRandom+1);
      setNumberRandom(getRndInteger(numberRandom+1, rightNb));
    } else if (props.number <= numberRandom) {

      Alert.alert('Bạn đang nói dối ', 'Gợi ý lớn hơn là không chính xác:', [
        {
          text: 'Đồng ý',
          style: 'destructive',

        },
      ]);


    }

  }
  function ThapHon() {
     let txt;
    if (props.number < numberRandom) {
      setTimeNumber(timeNumber+1)
      txt = ' #' +(timeNumber+1)+'             Điện thoại bạn đoán: '+numberRandom;
      setListText([txt,...listText])
      setRightNb(numberRandom-1);
      setNumberRandom(getRndInteger(leftNb, numberRandom-1));
    } else if (props.number >= numberRandom) {
      // txt = 'Lựa chọn nhỏ hơn là không chính xác: ' + numberRandom;
      Alert.alert('Bạn đang nói dối ', 'Gợi ý nhỏ hơn là không chính xác:', [
        {
          text: 'Đồng ý',
          style: 'destructive',

        },
      ]);
       // setNumberRandom(getRndInteger(leftNb, rightNb));
    }

  }

  return (
    <View>
      <TittleScreen name={'Game đoán số'}/>
      <View style={styles.Vnumber}>
        <Text style={styles.nber}>{numberRandom}</Text>
      </View>
        <View style={styles.body}>
          <Text style={styles.hbody}>Số đúng lớn hoặc nhỏ hơn ?</Text>
          <View style={styles.Vbtn}>
            <View style={styles.btn}>
              <Button color={'#734747'} title={'Lớn'} onPress={CaoHon} />
            </View>
            <View style={styles.btn}>
              <Button color={'#734747'} title={'Nhỏ'} onPress={ThapHon} />
            </View>
        </View>
          <Text style={
            {
              textAlign:'center'
            }
          }>Bạn sẽ thắng nếu phải gợi ý trên 5 lần.</Text>
        </View>
          <ScrollView>
            {listText.map((items) => {
              return <ItemsGame key={items} name={items}   />
              })}
          </ScrollView>

    </View>
  );
}
const styles = StyleSheet.create({

  Vnumber: {
    width: 250,
    height: 100,
    marginLeft: 10,
    marginTop: 30,
    paddingTop: 35,
    borderWidth: 2,
    borderColor: '#c9a93d',
    alignItems: 'center',
  },

  nber: {
    color: '#c9a93d',
    fontSize:22,
  },
  body: {
    width: 270,
    height: 165,
    backgroundColor: '#342424FF',
    marginTop: 50,
    paddingTop: 35,
    borderWidth: 2,
    borderColor: '#574040',
  },
  hbody: {
    textAlign: 'center',
    marginLeft: 5,
  },
  btn: {
    marginTop: 30,
    width: 75,

    marginLeft: 37,
  },
  Vbtn: {
    flexDirection: 'row',
    marginBottom:10,
  },
});
export default GameScreen;
