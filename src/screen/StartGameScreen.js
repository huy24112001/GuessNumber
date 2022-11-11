import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';
import {useState} from 'react';

function StartGameScreen(props) {
  const [inputNumber, setInputNumber] = useState('');

  function XacNhan() {
    const number = parseInt(inputNumber);
    if (inputNumber === '') {
      Alert.alert('Không hợp lệ', 'Bạn chưa nhập số', [
        {text: 'Đồng ý', style: 'destructive', onPress: DatLai},
      ]);
    } else if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert('Không hợp lệ', 'số phải có giá trị từ 1 đến 99', [
        {
          text: 'Đồng ý',
          style: 'destructive',
          onPress: DatLai,
        },
      ]);
    } else {
      props.onPick(number);
    }
  }

  function DatLai() {
    setInputNumber('');
  }

  return (
    <View style={styles.startGame}>
      <TextInput
        style={styles.input}
        placeholder={'Nhập vào một số'}
        maxLength={2}
        placeholderTextColor={'#948e8e'}
        keyboardType={'numeric'}
        value={inputNumber}
        onChangeText={setInputNumber}
      />
      <View style={styles.btn}>
        <Button color={'#734747'} title={'Xác nhận'} onPress={XacNhan} />
      </View>
      <View style={styles.btn}>
        <Button color={'#734747'} title={'Đặt lại'} onPress={DatLai} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  startGame: {
    flexDirection: 'column',
    width: 250,
    height: 180,
    backgroundColor: '#442e2e',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 8,
  },
  input: {
    color: 'black',
    height: 45,
    width: 200,
    fontSize: 17,
    // marginLeft:15,
    // borderWidth: 1,
    borderBottomColor:'orange',
    borderBottomWidth: 1,

    textAlign: 'center',
    borderRadius: 5,
  },
  btn: {
    marginTop: 10,
    width: 90,
    marginLeft: 10,
  },
  Vbtn: {
    flexDirection: 'row',
  },
});

export default StartGameScreen;
