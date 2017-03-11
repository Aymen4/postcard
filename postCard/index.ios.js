/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry, Navigator } from 'react-native';
import React, { Component}  from 'react';

import App from './app/index.js';
import Second from './app/second.js';

class start extends Component {
    render() {
        return (
            <Navigator
                initialRoute = {{
                id: 'first'
            }}
                renderScene={
                    this.navigatorRenderScene
                }
            />
        )
    };

    navigatorRenderScene(route, navigator){
        _navigator = navigator;
        switch (route.id){
            case'first' :
                return (<App navigator = {navigator}  title = 'First' />);
            case'second' :
                return (<Second navigator = {navigator}  title = 'Second' />);
        }
    }
}
AppRegistry.registerComponent('brum', () => start);
