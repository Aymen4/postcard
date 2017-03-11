/**
 * Created by Aymen on 2017-03-02.
 */
import React, { Component }  from 'react';
import NavigationBar from 'react-native-navigation-bar';
import NavigationBarRouteMapper from './NavigationBarRouteMapper';

import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    TouchableHighlight,

}from 'react-native';

class MyNavbar extends Component {

    constructor(props) {
        super(props);
    }


    render(){
    return (
            <View>
                <Navigator
                    navigationBar={
                        <Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}
                />
                }
                />
            </View>
        );
    }
}



export default MyNavbar;