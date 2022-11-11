/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import StartGameScreen from './src/screen/StartGameScreen';
// import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './src/screen/GameScreen';
import GameOverScreen from "./src/screen/GameOverScreen";
import gameOverScreen from "./src/screen/GameOverScreen";
const App = () => {

  const [userNumber, setUserNumber] = useState<number>();
  const [gameOver,setGameOver] = useState({nextScreen : false, win : true})
  let screen = <StartGameScreen onPick={PickNumber} />;
  function PickNumber(nb: number) {
    setUserNumber(nb);
  }

  function GameOver(b: boolean){
    setGameOver( { nextScreen: true, win: b});
  }

  if(gameOver.nextScreen) screen = <GameOverScreen win={gameOver.win} />;
  else if (userNumber) {
    screen = <GameScreen number={userNumber} onOver={GameOver} />;
  }
  console.log(screen);
  return (
    // <LinearGradient   colors={['#ddb52f','#28285DFF','#4E2577FF']}>

    <ImageBackground
      source={require('./src/image/background.jpg')}
      resizeMode={'cover'}
      style={styles.main}>
      {screen}
    </ImageBackground>

    // </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;
