import {createContainer } from 'react-native-meteor';
import React, { Component, PropTypes }  from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    TouchableHighlight,

}from 'react-native';

class Second extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.largeText}>your mama </Text>
            </View>

        )
    }
} 
const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'white'
        },
        largeText:{
            fontSize:52,
            paddingTop:40,
            paddingRight:20,
            paddingLeft:20,
        }

    });

export default Second;