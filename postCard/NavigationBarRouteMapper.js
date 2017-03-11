import React, { Component }  from 'react';

import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    TouchableHighlight,

}from 'react-native';

class NavigationBarRouteMapper extends Component {

    constructor(props) {
        super(props);
    }

    Title(route, navigator, index, navState) {
        return <Text >Route map</Text>
    }

    LeftButton(route, navigator, index, navState) {
        if(route.id == 'first'){
            return(<TouchableOpacity onPress={()=>Utils.toggleMenu()}>
                <Icon name="menu" size={35} color="#1c8b6b"/>
            </TouchableOpacity>);
        }else{
            return(<TouchableOpacity onPress = {()=>navigator.pop()}>
                <Icon name="arrow-back" size={35} color="#1c8b6b"/>
            </TouchableOpacity>);
        }
    }

    // RightButton(route, navigator, index, navState) {
    //     var back = 'back';
    //     return(
    //         <TouchableOpacity onPress = {()=>navigator.pop()}>
    //             <Text style = {styles.right}>{route.right}</Text>
    //         </TouchableOpacity>);
    //
    //
    // }
}



export default NavigationBarRouteMapper;