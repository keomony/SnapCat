import React from 'react';
import { StyleSheet, Platform, StatusBar, Text, View } from 'react-native';
import Camera from 'react-native-snap-camera';
import Emoji from 'react-native-snap-emoji';
import SnapText from 'react-native-snap-text';


const HEADER_MARGIN = Platform.select ({
  ios: 0,
  andoid: 24
})

export default class App extends React.Component {
state = {
  emojiIsVisible: false,
  textStateVisible: false
}
changeEmojiState() {
  this.setState({
    emojiIsVisible: !this.state.emojiIsVisible
  })
}
changeTextState() {
  this.setState({
    textStateVisible: !this.state.textStateVisible
  })
}
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={styles.header}>
          <Text style={styles.title}>
            SnapApp
          </Text>
          <Text
            style={styles.button}
            onPress={this.changeTextState.bind(this)}
          >
            💋
          </Text>
          <Text
                style={styles.button}
                onPress={this.changeEmojiState.bind(this)}
          >
            🦋
          </Text>
        </View>
        <Emoji isVisible={this.state.emojiIsVisible}>
          <SnapText isVisible={this.state.textStateVisible}>
            <Camera type="back" />
          </SnapText>
        </Emoji>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 25
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'pink',
    height: 80,
    borderRadius: 25,
    padding: 24

  },

  title: {
    fontSize: 30,
    color: 'white'
  }

});
