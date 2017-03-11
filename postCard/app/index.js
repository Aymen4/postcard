    import {createContainer } from 'react-native-meteor';
    import Meteor  from 'react-native-meteor';
    import MyNavbar from '../MyNavbar'
    import NavigationBarRouteMapper from '../NavigationBarRouteMapper';

    import React, { Component, PropTypes }  from 'react';
    import {
        StyleSheet,
        Text,
        View,
        Navigator,
        TouchableOpacity,
        TouchableHighlight,

    }from 'react-native';

    //if ios simulator is used!
    const SERVER_URL = 'ws://localhost:3000/websocket';
    
    class App extends Component {

        constructor(props) {
            super(props);
        }

        componentWillMount() {
            Meteor.connect(SERVER_URL);
        }
        
        render() {
            return (

            <View>
                <MyNavbar/>
              
                <Text>WOW</Text>

            </View> 
            );
        }
    };
    
    const styles = StyleSheet.create({
        // Removed for brevity
        button: {
            marginTop:100,
            padding: 10,
            backgroundColor: '#c5c5c5'
        },

        welcome: {
            marginTop:100,
            padding: 10,
            backgroundColor: '#c5c5c5'
        }
    });

    export default createContainer(() => {
        Meteor.subscribe('items');
        return {
            count: Meteor.collection('items').find().length
        };
    }, App);


    

