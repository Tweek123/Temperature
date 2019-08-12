import React, { Component } from 'react';
import {  StyleSheet, ScrollView, ImageBackground, Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class scrollView extends React.Component {
  
  constructor(props) {
    super(props)

}

    render() {
        return (

        


 <LinearGradient
    colors={['#1D212C','#161A25']}
    start={[0, 0]}
    end={[1, 1]}
    location={[1.42, 34.45, 1]}
    style={styles.topNavigation}>
   <ScrollView  horizontal = { true } showsHorizontalScrollIndicator = { false } >
      <ImageBackground source={require('../images/room1.png')} style={styles.sliderItem}>
      </ImageBackground>
      <ImageBackground source={require('../images/room1.png')} style={styles.sliderItem}>
      </ImageBackground>
      <ImageBackground source={require('../images/room1.png')} style={styles.sliderItem}>
      </ImageBackground>      
      <ImageBackground source={require('../images/room1.png')} style={styles.sliderItem}>
      </ImageBackground>
   </ScrollView>
   </LinearGradient>
      );
    }
  }
    const styles = StyleSheet.create(
    {
       sliderItem:
       {
          width: 287, 
          height: 268,
          marginRight: 8,
          marginLeft: 8,
       },
       scrollViewHolder: 
        {
            paddingTop: 20,
            backgroundColor: 'black'
        }
    });