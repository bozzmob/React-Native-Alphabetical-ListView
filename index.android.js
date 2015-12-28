/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var {AppRegistry} = React;

var reactnativeAlphabeticalListView = require('./components/SelectableSectionsListView');

module.exports = reactnativeAlphabeticalListView;

AppRegistry.registerComponent('reactnativeAlphabeticalListView', () => reactnativeAlphabeticalListView);