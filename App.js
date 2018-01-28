import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class CryptoQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',data: 'Enter a symbol to get current value'};
  }
  
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter a Crypto Coin Symbol (eg:BTC or ETH or XRP)"
          onChangeText={(text) => {
            this.setState({text});
            if(text.length==3){              
              fetch("https://min-api.cryptocompare.com/data/price?fsym="+text.toUpperCase()+"&tsyms=USD").then(
                (response)=>{response.json();this.setState({data:"value of currency is $"+JSON.parse(response._bodyText).USD }); }
              )
            }
            else{
              this.setState({data:'Enter a symbol to get current value'});
            }
      }}
        />
        <Text>
          {this.state.data}
        </Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
