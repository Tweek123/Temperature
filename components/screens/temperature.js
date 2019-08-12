import React from 'react';
import { StyleSheet, Button, Text,View,ImageBackground, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress'; 

// const imageStyle = { width: 320, height: 320 }
// const expoAssetId = require("./fonts/fontello.ttf");
class HomeScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            fill: 0,

        }  
    }


    onPlusPressIn() {
        if(this.state.fill < 100) {
            this.setState({fill: this.state.fill+2.4})

            this.holdTimer = setTimeout(() => {
                this.holdInterval = setInterval(() => {   
                    if(this.state.fill < 100) {
                        this.setState({fill: this.state.fill+2.4})
                    }
                     
                 }, 150);
            }, 400);
        }
        
    }

    onPlusPressOut() {
        clearTimeout(this.holdTimer);
        clearInterval(this.holdInterval);
    }

    onMinusPressIn() {
        if(this.state.fill > 1) {        
            this.setState({fill: this.state.fill-2.4})

            this.holdTimer = setTimeout(() => {
                this.holdInterval = setInterval(() => {   
                    if(this.state.fill > 1) {    
                        this.setState({fill: this.state.fill-2.4})
                    }
                    
                 }, 150);
            }, 400);
        } 
            
}

    onMinusPressOut() {
        clearTimeout(this.holdTimer);
        clearInterval(this.holdInterval);
    }


    render() {


        const IconMoon = this.props.iconMoon;
        const IconFontello = this.props.iconFontello;
        return (
            
    <LinearGradient
    colors={['#1D212C','#161A25']}
    start={[0, 0]}
    end={[1, 1]}
    location={[1.42, 34.45, 1]}
    style={{width: '100%'}}>

        <View style = {styles.container}>
            <TouchableWithoutFeedback 
                onPressIn={this.onMinusPressIn.bind(this)} 
                onPressOut={this.onMinusPressOut.bind(this)}
            >
                <Text style = {styles.tempButton}>—</Text>
            </TouchableWithoutFeedback>
            
            <AnimatedCircularProgress
              size={173}
              width={2}
              fill={this.state.fill}
              tintColor="#1098D8"
              backgroundColor="#3d5875"
              rotation='270'
              styles={{position:'relative'}}
            >
                 {
                  () => (

                   <ImageBackground style = {styles.tempChangeRow} source={require('../../images/backgroundSetTemp.png')} style={{width: '100%', height: '100%', position: 'absolute', zIndex: 0}}>
                        <View style= {styles.setTempWrapper}>    
                            <Text style = {styles.setTempText}>
                               { Math.round(this.state.fill*0.42) }
                             </Text>
                        </View>
                   </ImageBackground>
                  )
                }
            </AnimatedCircularProgress>
            
            <TouchableWithoutFeedback 
                onPressIn={this.onPlusPressIn.bind(this)} 
                onPressOut={this.onPlusPressOut.bind(this)}
            >
                <Text style = {styles.tempButton}>＋</Text>
            </TouchableWithoutFeedback>
        </View>
        <View style = {styles.tempContainer}>
            <View style = {styles.tempIndicator}>
                <View style = {styles.tempIndicatorRow}>
                    <IconMoon style = {styles.tempNowIcon} color= {"#A0A7C2"} size={18} name="tempNow"/>
                    <Text style = {styles.tempNumber}>21</Text>
                    <IconMoon style = {styles.tempCelsiusIcon} color= {"#A0A7C2"} size={21} name="celsius"/>
                </View>
                <Text style = {styles.tempIdicatorText}>текущая</Text>
            </View>
            
            <View style = {styles.tempIndicator}>
                <View style = {styles.tempIndicatorRow}>
                    <IconMoon style = {styles.tempNowIcon} color= {"#A0A7C2"} size={18} name="rain"/>
                    <Text style = {styles.tempNumber}>11</Text>
                    <IconMoon style = {styles.tempCelsiusIcon} color= {"#A0A7C2"} size={21} name="celsius"/>
                </View>
                <Text style = {styles.tempIdicatorText}>Санкт Петербург</Text>
            </View>
        </View>
    </LinearGradient>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginTop: 51,
      marginBottom: 0,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 35
    },
    tempButton: {
        color: '#A0A7C2',
        fontSize: 20,
        fontWeight: "100",
        marginLeft: 45,
        marginRight: 45
    },
    white1: {
        color: 'white'
    },
    tempContainer: {
        margin: 0,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    tempIndicator: {
        height: 53,
        width: 103,
        marginRight: 36,
        marginLeft: 36,
        paddingTop: 8

    },
    tempIndicatorRow: {
        flexDirection: 'row'
    },
    tempChangeRow: {
        flexDirection: 'row'
    },
    tempNowIcon: {
        marginTop: 3,
        marginRight: 11

    },
    tempNumber: {
        fontFamily: 'MontserratLight',
        fontSize: 30,
        color: "#A0A7C2", 
        top: 0, 
        marginRight: 5,
        marginTop: -8,
    },
    tempIdicatorText: {
        fontFamily: 'MontserratNormal',
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '400'
    },
    setTempText: {
        fontFamily: 'MontserratLight',
        fontSize: 35,
        color: '#FFFFFF',
    },
    setTempWrapper: {
        position: 'absolute',
        left: 67,
        top: "36%",
        width: 60,
        height: 40
    }
  });

  export default HomeScreen;