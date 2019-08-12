import React from 'react';
import { StyleSheet, Button, Text,View,ImageBackground, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default class topNavigation extends React.Component {
  
  constructor(props) {
    super(props)

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
        style={styles.topNavigation}>
            <View style={styles.lineIcons}>
                <View style = {styles.lineIcon}> 
                    <IconMoon  color= {"#A0A7C2"} size={24} name="light"/>
                    <View style = {[styles.lineIconBorder, styles.lineIconBorderOff]}></View>
                </View>

                <View style = {styles.lineIcon}>
                    <IconMoon  color= {"#1098D8"} size={24} name="temp"/>
                    <View style = {[styles.lineIconBorder]}></View>
                </View>

                <View style = {styles.lineIcon}>
                    <IconMoon  color= {"#A0A7C2"} size={24} name="lock"/>
                    <View style = {[styles.lineIconBorder, styles.lineIconBorderOff]}></View>
                </View>                

                <View style = {styles.lineIcon}>
                    <IconMoon  color= {"#A0A7C2"} size={24} name="window"/>
                    <View style = {[styles.lineIconBorder, styles.lineIconBorderOff]}></View>
                </View>
            </View>
        </LinearGradient>
      );
    }
  }

  const styles = StyleSheet.create({
    topNavigation: {
      width: "100%",
      height: 85,
      backgroundColor: '#161A25',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#363946",
      

    },
    lineIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 46
    },
    lineIcon: {
        position: 'relative',
        width: "25%",        
        alignItems: 'center',
        paddingBottom: 13
    },
    lineIconBorder: {
        width: 100,
        position: 'absolute',
        zIndex: 5,
        bottom: -1,
        borderBottomColor: "#1098D8",
        borderBottomWidth: 1
    },
    lineIconBorderOff: {
        opacity: 0
    }
  });
