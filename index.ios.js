'use strict';
var React = require('react-native');
var {Component, PropTypes, View, Text, TouchableHighlight,AppRegistry} = React;

var AlphabetListView = require('react-native-alphabetlistview');

class SectionHeader extends Component {
  render() {
    // inline styles used for brevity, use a stylesheet when possible
    var textStyle = {
      textAlign:'center',
      color:'#fff',
      fontWeight:'700',
      fontSize:16
    };

    var viewStyle = {
      backgroundColor: '#ccc'
    };
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

class SectionItem extends Component {
  render() {
    return (
      <Text style={{color:'#f00'}}>{this.props.title}</Text>
    );
  }
}

class Cell extends Component {
  render() {
    return (
      <View style={{height:30}}>
        <Text>{this.props.item}</Text>
      </View>
    );
  }
}

class reactnativeAlphabeticalListView extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      data: {
        A: ['asome','aentries','are here'],
        B: ['bbsome','bebntries','bare here'],
        C: ['csome','centries','care here'],
        D: ['dsome','dentries','dare here'],
        E: ['esome','eentries','eare here'],
        F: ['fsome','fentries','are here'],
        G: ['gsome','gentries','gare here'],
        H: ['hsome','hentries','hare here'],
        I: ['isome','ientries','iare here'],
        J: ['jsome','jentries','jare here'],
        K: ['ksome','kentries','kare here'],
        L: ['lsome','lentries','lare here'],
        M: ['msome','mentries','mare here'],
        N: ['nsome','nentries','nare here'],
        O: ['osome','oentries','oare here'],
        P: ['psome','pentries','pare here'],
        Q: ['qsome','qentries','qare here'],
        R: ['rsome','rentries','rare here'],
        S: ['some','sentries','sare here'],
        T: ['tsome','tentries','tare here'],
        U: ['usome','uentries','uare here'],
        V: ['vsome','ventries','vare here'],
        W: ['wsome','wentries','ware here'],
        X: ['xsome','xentries','xare here'],
        Y: ['ysome','yentries','yare here'],
        Z: ['zsome','zentries','zare here'],
      }
    };
  }

  render() {
    return (
      <AlphabetListView
        data={this.state.data}
        cell={Cell}
        cellHeight={30}
        sectionListItem={SectionItem}
        sectionHeader={SectionHeader}
        sectionHeaderHeight={22.5}
      />
    );
  }
}

AppRegistry.registerComponent('reactnativeAlphabeticalListView', () => reactnativeAlphabeticalListView);