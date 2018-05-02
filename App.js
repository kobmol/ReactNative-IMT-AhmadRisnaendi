
import React, { Component } from 'react';
import {  View, Text, TextInput, TouchableHighlight, Button } from 'react-native';
import Header from './src/components/Header';


export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      nilaiPertama: '',
      nilaiDua: '',
      sum: 0,
    };
  }
  
  calculateSum = () => {
    const { nilaiPertama, nilaiDua } = this.state;
  
    this.setState({
      sum: Number(nilaiPertama) / Math.pow(Number(nilaiDua/100),2)
    });
  }

  
  render() {
    let BB ;
    if (this.state.sum == 0){
      this.state.BB = '';
    }else if (this.state.sum<18.5){
      this.state.BB = 'BB anda kurang';      
    }else if (this.state.sum>=18.5 && this.state.sum<=24.9){
      this.state.BB = 'BB anda ideal';
    }else if (this.state.sum>=25.0 && this.state.sum<=29.9){
      this.state.BB = 'BB anda berlebih';
    }else if (this.state.sum>=30.0){
      this.state.BB ='Anda Obesitas'
    }
    return (
      <View>
        <Header/>
      <TextInput placeholder="Berat(kg)"
        value={this.state.nilaiPertama}
        onChangeText={(nilaiPertama) => this.setState({nilaiPertama})}
      />

      <TextInput placeholder="Tinggi(cm)"
        value={this.state.nilaiDua}
        onChangeText={(nilaiDua) => this.setState({nilaiDua})}
      />

      <TouchableHighlight onPress={this.calculateSum}>
        <Text> Indeks Masa Tubuh</Text>
      </TouchableHighlight>

      <Text>{`${this.state.sum}`}</Text>
      <Text>{`${this.state.BB}`}</Text>
    </View>
    );
  }
}