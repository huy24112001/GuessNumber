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
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './src/screen/GameScreen';
import GameOverScreen from "./src/screen/GameOverScreen";

const App = () => {

  const [userNumber, setUserNumber] = useState<number>();
  const [gameOver,setGameOver] = useState({nextScreen : false, timePlay: 0})
  let screen = <StartGameScreen onPick={PickNumber} />;
  function PickNumber(nb: number) {
    setUserNumber(nb);
  }
function setResetApp(){
    setUserNumber(undefined)
    setGameOver({nextScreen : false, timePlay: 0})
}
  function GameOver(b: boolean, a: number){
    setGameOver( { nextScreen: b,timePlay: a});
  }

  if(gameOver.nextScreen) screen = <GameOverScreen  number={userNumber} timNb={gameOver.timePlay} RestartApp = {setResetApp} />;
  else if (userNumber) {
    screen = <GameScreen number={userNumber} onOver={GameOver} />;
  }

  return (
     <LinearGradient style={styles.main}  colors={['#605940','#7a6e43','#7c57a1']}>

    <ImageBackground
      source={require('./src/image/background.jpg')}
      resizeMode={'cover'}
      style={{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      imageStyle={{
        opacity:0.25
      }}
    >
      {screen}
    </ImageBackground>

     </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,

  },
});

export default App;
