import React from 'react';
import {
    Button,
    Alert,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    FlatList,
    Dimensions,
} from 'react-native';

const numColumns = 3;

const data = [
    { key: 'matheuzinhoo' }, 
    { key: 'matheuzinhoo 2' }, 
    { key: 'matheuzinhoo 3' }, 
    { key: 'MÁ-theuzinho!!' }, 
    { key: 'Aaaah' }, 
    { key: 'Ads' }, 
    { key: 'ta TÃO gotozinho' }, 
    { key: 'ta tão gotozinho de carro' }, 
    { key: 'ai matheuzinho' }, 
    { key: 'nossa matheuzinho ta tão fortinho' }, 
    { key: 'ta tão durinho' },
    { key: 'ai matheuzin! ta tão...' },
    { key: 'Elisinhaa' },
  ];

const parseData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns)
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true })
      numberOfElementsLastRow++;
    }

    return data
}

export class ResponsiveBoard extends React.Component {
  
  
  constructor(props){
    super(props)
    vm = this
  }

  async soundButton1(){
      vm.playSound(matheusSound1)
  }

  async playSound(sound){
    try{
      await sound.replayAsync()
    }
    catch(error){
      await sound.playAsync()
      console.log({error})
    }
  }

    
  renderItem = ({ item, index }) => {
      if (item.empty === true) {
        return <View style={[styles.item, styles.itemInvisible]} />;
      }
      if(index %2==0){
        return (
          <TouchableHighlight style={styles.item} onPress={this.soundButton1} accessibilityLabel={item.key}>
            <Text style={styles.itemText}>{item.key}</Text>
          </TouchableHighlight>
        )
      } else {
        return (
          <View style={styles.item2}>
            <Text style={styles.itemText}>{item.key}</Text>
          </View>
        )
      }
  }

  render(){
      return(
          <View>
              <FlatList
              data={parseData(data, numColumns)}
              numColumns={numColumns}
              renderItem={this.renderItem}
              style={styles.container}
              />
          </View>
      )
  }
}

let matheusSound1 = new Expo.Audio.Sound(); //.createAsync(require('../assets/sounds/PeasantWhat1.wav'));
await matheusSound1.loadAsync(require('../assets/sounds/PeasantWhat1.wav'))

let matheusSound2 = new Expo.Audio.Sound();
let matheusSound3 = new Expo.Audio.Sound();
let matheusSound4 = new Expo.Audio.Sound();
let matheusSound5 = new Expo.Audio.Sound();
let matheusSound6 = new Expo.Audio.Sound();
let matheusSound7 = new Expo.Audio.Sound();
let matheusSound8 = new Expo.Audio.Sound();
let matheusSound9 = new Expo.Audio.Sound();

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 20,
    },
    item: {
      backgroundColor: '#4D243D',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 1,
      height: Dimensions.get('window').width / numColumns, // numColumns. approximate a square
    },
    item2: {
      backgroundColor: '#244d34',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 1,
      height: Dimensions.get('window').width / numColumns, // numColumns. approximate a square
    },    
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    itemText: {
      color: '#fff',
    },
  });