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
    { key: 'matheuzinhoo', sound:'matheusSound1' },
    { key: 'matheuzinhoo 2', sound:'matheusSound2' },
    { key: 'matheuzinhoo 3', sound:'matheusSound3' },
    { key: 'MÁ-theuzinho!!', sound:'matheusSound4' },
    { key: 'Aaaah', sound:'matheusSound5' },
    { key: 'Ads', sound:'' },
    { key: 'ta TÃO gotozinho', sound:'matheusSound6' },
    { key: 'ta tão gotozinho de carro', sound:'matheusSound7' },
    { key: 'ai matheuzinho', sound:'matheusSound8' },
    // { key: 'nossa matheuzinho ta tão fortinho', sound:'matheusSound9' },
    // { key: 'ta tão durinho', sound:'matheusSound10' },
    // { key: 'ai matheuzin! ta tão...', sound:'matheusSound11' },
    // { key: 'Elisinhaa', sound:'matheusSound12' },
    // { key: 'pira no Matheuzinho', sound:'matheusSound13' },
    // { key: 'pira no matheuzinho 2', sound:'matheusSound14' },
    
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
    vm.play = vm.play.bind(vm)
  }


  async componentDidMount(){
      await this.loadAssets()
  }

  loadAssets = async () => {
    try {
      matheusSound1.loadAsync(require('../assets/sounds/PeasantWhat1.wav'))
      matheusSound2.loadAsync(require('../assets/sounds/PeasantWhat2.wav'))
      matheusSound3.loadAsync(require('../assets/sounds/PeasantWhat3.wav'))
      matheusSound4.loadAsync(require('../assets/sounds/PeasantWhat4.wav'))
      matheusSound5.loadAsync(require('../assets/sounds/PeonWhat1.wav'))
      matheusSound6.loadAsync(require('../assets/sounds/PeonWhat2.wav'))
      matheusSound7.loadAsync(require('../assets/sounds/PeonWhat3.wav'))
      matheusSound8.loadAsync(require('../assets/sounds/PeonWhat4.wav'))
    }
    catch(error){
      console.log("Unable to load sound.\n")
      console.log({error})
    }
  }

  play = async(name) => {
    switch(name){
      case 'matheusSound1': vm.playSound(matheusSound1)
                            break
      case 'matheusSound2': vm.playSound(matheusSound2)
                            break
      case 'matheusSound3': vm.playSound(matheusSound3)
                            break
      case 'matheusSound4': vm.playSound(matheusSound4)
                            break
      case 'matheusSound5': vm.playSound(matheusSound5)
                            break
      case 'matheusSound6': vm.playSound(matheusSound6)
                            break
      case 'matheusSound7': vm.playSound(matheusSound7)
                            break
      case 'matheusSound8': vm.playSound(matheusSound8)
                            break
      default:
        console.log(`sound ${name} not found.`)
    }
  }

  async playSound(sound){

    try{
      sound.setPositionAsync(0)
      await sound.playAsync()
    }
    catch(error){
      await sound.replayAsync()
      console.log({error})
    }
  }

    
  renderItem = ({ item, index }) => {
      if (item.empty === true) {
        return <View style={[styles.item, styles.itemInvisible]} />;
      }
      if(index %2==0){
        return (
          <TouchableHighlight style={styles.item} 
          onPress={ () => { this.play(item.sound) }} 
          accessibilityLabel={item.key}>
            <Text style={styles.itemText}>{item.key}</Text>
          </TouchableHighlight>
        )
      } else {
        return (
          <TouchableHighlight style={styles.item2} 
          onPress={ () => { this.play(item.sound) }} 
          accessibilityLabel={item.key}>
            <Text style={styles.itemText}>{item.key}</Text>
          </TouchableHighlight>
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



let matheusSound1 = new Expo.Audio.Sound()
let matheusSound2 = new Expo.Audio.Sound()
let matheusSound3 = new Expo.Audio.Sound()
let matheusSound4 = new Expo.Audio.Sound()
let matheusSound5 = new Expo.Audio.Sound()
let matheusSound6 = new Expo.Audio.Sound()
let matheusSound7 = new Expo.Audio.Sound()
let matheusSound8 = new Expo.Audio.Sound()
// let matheusSound9 = new Expo.Audio.Sound()
// let matheusSound10 = new Expo.Audio.Sound()
// let matheusSound11 = new Expo.Audio.Sound()
// let matheusSound12 = new Expo.Audio.Sound()
// let matheusSound13 = new Expo.Audio.Sound()
// let matheusSound14 = new Expo.Audio.Sound()

// matheusSound9.loadAsync(require('../assets/sounds/PeasantWhat1.wav'))
// matheusSound10.loadAsync(require('../assets/sounds/PeasantWhat1.wav'))
// matheusSound11.loadAsync(require('../assets/sounds/PeasantWhat1.wav'))
// matheusSound12.loadAsync(require('../assets/sounds/PeasantWhat1.wav'))
// matheusSound13.loadAsync(require('../assets/sounds/PeasantWhat1.wav'))
// matheusSound14.loadAsync(require('../assets/sounds/PeasantWhat1.wav'))



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