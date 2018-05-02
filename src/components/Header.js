import React from 'react';
import {View, Text } from 'react-native';


const styles = {
    viewStyle: {
    backgroundColor: 'violet',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
    };
    

const Header =() => {
    const{textStyle,viewStyle}= styles;
    return(
        <View style={viewStyle}>
            <Text style={textStyle}> Indeks Masa Tubuh </Text>
        </View>
    )
}

export default Header;