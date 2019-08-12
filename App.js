import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createIconSetFromIcoMoon, createIconSetFromFontello  } from '@expo/vector-icons';
import icoMoonConfig from './fonts/icomoon/selection.json';
import fontelloConfig from './fonts/fontello-d19e7043/config.json';
import Navigator from './components/navigation/tabNavigation/navigation';
import TopNavigator from './components/navigation/topNavigation/topNavigation';
import * as Font from 'expo-font';
import HorizontalSlider from './components/slider'
import { LinearGradient } from 'expo-linear-gradient';

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
            <LinearGradient
            colors={['#1D212C','#161A25']}
            start={[0, 0]}
            end={[1, 1]}
            location={[1.42, 34.45, 1]}
            style={styles.topNavigation}>
      <View style={styles.container}>

        <HorizontalSlider style={styles.slider}/>
        <TopNavigator iconMoon={iconMoon} iconFontello={iconFontello}/>
        <Navigator iconMoon={iconMoon} iconFontello={iconFontello}/>
      </View>
      </LinearGradient>

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
    height: "100%"
    }
});
