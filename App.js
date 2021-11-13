import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: 0
    };
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

vai(){
  setInterval( ()=> {
    this.setState({numero: this.state.numero + 0.1})
  });
}

limpar(){
  alert('LIMPAR')
}

  render(){
   return(
    <View style={styles.container}>

<ImageBackground 
  source={require('./src/rbr.jpg')} 
  style={styles.imageBackground}>
          

      <Image
        source={require('./src/cronometro.png')}
        style={styles.cronometro}
      />

      <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>
      
      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={this.vai}>
          <Text style={styles.btnTexto}>START</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.limpar}>
          <Text style={styles.btnTexto}>STOP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.limpar}>
          <Text style={styles.btnTexto}>CLEAR</Text>
        </TouchableOpacity>

      </View>
 
      </ImageBackground>
    </View>
  )};
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    },
  timer:{
    marginTop: -160,
    color: 'yellow',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 90,
    height: 10
  },
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow'
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  imageForeground: {
    width: 250,
    height: 250
  },
});