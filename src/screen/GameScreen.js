import { Text, View, StyleSheet, Button, ScrollView, Alert } from "react-native";
import {useState} from 'react';

function GameScreen(props) {
  const [leftNb, setLeftNb] = useState(1);
  const [rightNb, setRightNb] = useState(99);
  const [numberRandom, setNumberRandom] = useState(getRndInteger(1, 99));
  const [listText, setListText] = useState([]);
  const [timeNumber,setTimeNumber] = useState(0)
  console.log(timeNumber,numberRandom);

  if(numberRandom == props.number){
    props.onOver(true)
  } else if(timeNumber == 2){
    props.onOver(false)
  }


  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function CaoHon() {
     let txt;
    if (props.number > numberRandom) {
      setTimeNumber(timeNumber+1)
      txt = 'Bạn đã gợi ý ' + (timeNumber+1)+' lần.';
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

       // setNumberRandom(getRndInteger(leftNb, rightNb));
    }

  }
  function ThapHon() {
     let txt;
    if (props.number < numberRandom) {
      setTimeNumber(timeNumber+1)
      txt = 'Bạn đã gợi ý ' + (timeNumber+1)+' lần.';
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
      <View style={styles.title}>
        <Text style={styles.text}>Game Đoán Số</Text>
      </View>
      <View style={styles.Vnumber}>
        <Text style={styles.nber}>{numberRandom}</Text>
      </View>
        <View style={styles.body}>
          <Text style={styles.hbody}>Số đúng lớn hoặc nhỏ hơn ?</Text>
          <View style={styles.Vbtn}>
            <View style={styles.btn}>
              <Button title={'Lớn'} onPress={CaoHon} />
            </View>
            <View style={styles.btn}>
              <Button title={'Nhỏ'} onPress={ThapHon} />
            </View>
        </View>
          <ScrollView><Text>Bạn đươc phép gợi ý tối đa 5 lần.</Text>
            {listText.map(items => {
              return <Text key={items}>{items}</Text>;
            })}
          </ScrollView>
      </View>
    </View>
  );
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
  Vnumber: {
    width: 250,
    height: 100,
    marginLeft: 10,
    marginTop: 30,
    paddingTop: 35,
    borderWidth: 2,
    borderColor: '#574040',
    alignItems: 'center',
  },

  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
  },
  nber: {
    color: '#574040',
    fontSize:22,
  },
  body: {
    width: 270,
    height: 400,
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
