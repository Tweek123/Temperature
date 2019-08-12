import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Temperature from '../../screens/temperature';
import HomeIconWithBadge from './HomeIconWithBadge';

  class Navigation extends React.Component {

    constructor(props) {
        super(props)
    }

  render() {
    const IconMoon = this.props.iconMoon;
    const IconFontello = this.props.iconFontello;
   
    function Temp() {
      return (
        <Temperature iconMoon={IconMoon} iconFontello={IconFontello}/>
      );
  }

  const TabNavigator = createBottomTabNavigator(
    {
      Home: Temp,
      Settings: Temp,
      Settings2: Temp,
      Settings3: Temp
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `home`;
            // Sometimes we want to add badges to some icons. 
            // You can check the implementation below.

          } else if (routeName === 'Settings') {
            iconName = `bell`; 
          }  else if (routeName === 'Settings2') {
            iconName = `basket`; 
          } else if (routeName === 'Settings3') {
            iconName = `user`; 
          }
          IconComponent = HomeIconWithBadge; 

          const IconMoon = this.props.iconMoon;
          const IconFontello = this.props.iconFontello;

          // You can return any component that you like here!
          return <IconComponent name={iconName} size={18} color={tintColor} IconMoon={IconMoon} IconFontello = {IconFontello}/>;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#1098D8',
        inactiveTintColor: '#80828E',
      },
      tabBarOptions: {
          showLabel: false,
          style: {
            backgroundColor: '#040814',
          }
      }
    }
  );

  Navigation = createAppContainer(TabNavigator);
    
    return (
      <Navigation/>
    );
  }
}

export default Navigation;