import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class Gauge extends Component {
  constructor() {
      super();
      
      this.state = {
        value: null
      }
  }

  componentWillMount() {
    setInterval(() => {
        this.setState({
            value: this.state.value + 1
        })
    },1000)
  }

  render() {
    return (
      <View>
          <Text style={styles.meter}>{this.state.value}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    meter: {
      textAlign: 'center',
      color: '#333333',
      fontSize: 45,
      fontWeight: 'bold',
      color: 'teal',
      marginBottom: 5,
    },
});  

export default Gauge
