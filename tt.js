import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createIconSetFromIcoMoon, createIconSetFromFontello  } from '@expo/vector-icons';
import AppNavigator from './components/navigation/navigation';
import Temperature from './components/screens/temperature';
import icoMoonConfig from './fonts/icomoon/selection.json';
import fontelloConfig from './fonts/fontello-d19e7043/config.json';
import Navigator from './components/navigation/navigation';
import * as Font from 'expo-font';

export default class App extends React.Component {

state = {
  ready: false
};
  
async componentDidMount() {
      await Font.loadAsync({
        fontello: require('./fonts/fontello-d19e7043/font/fontello.ttf')
      });

      await Font.loadAsync({
        "icoMoon": require('./fonts/icomoon/fonts/icomoon.ttf')
      });

      await Font.loadAsync({
        "MontserratLight": require('./fonts/montserrat/montserratlight.ttf')
      });

      await Font.loadAsync({
        "MontserratNormal": require('./fonts/montserrat/montserrat.ttf')
      });
      console.log('***************************************');

      this.setState({
        ready: true
      })
  }


render() {

    if(this.state.ready ===true) {
      const expoAssetId = require("./fonts/icomoon/fonts/icomoon.ttf");
      const iconMoon = createIconSetFromIcoMoon(icoMoonConfig, 'icoMoon', expoAssetId);
      const iconFontello = createIconSetFromFontello(fontelloConfig);
          return (
      <View style={styles.container}>
        <Temperature iconMoon={iconMoon} iconFontello={iconFontello}/>
        <Navigator/>
      </View>
    );

    } else {
      return (
        <View style={styles.container}>

        </View>
      );

    }


  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  black: {
    backgroundColor: 'black'
  },
  posAbs: {
    position: 'absolute',
    top: 50,
    left: 50,
    zIndex: 1
  },
  navigation: {
    backgroundColor: 'black'
  }

});
