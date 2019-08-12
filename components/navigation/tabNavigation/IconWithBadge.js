import React from 'react';
import { Text, View } from 'react-native';

export default class IconWithBadge extends React.Component {
  
  constructor(props) {
    super(props)

}
    render() {
      const { name, color, size, IconMoon, IconFontello} = this.props;

      return (
        <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: "center" }}>
          <IconMoon name={name} size={size} color={color} />
        </View>
      );
    }
  }