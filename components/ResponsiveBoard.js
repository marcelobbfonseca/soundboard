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
  
    async peasantButton(){
        try{
            await peasantSound1.loadAsync(require('../assets/sounds/PeasantWhat1.wav')) //.then().catch( error => console.log({error}))
            await peasantSound1.playAsync()
        }
        catch(error){
            console.log({error})
            await peasantSound1.replayAsync()
        }
    }

    
    renderItem = ({ item, index }) => {
        if (item.empty === true) {
          return <View style={[styles.item, styles.itemInvisible]} />;
        }
        if(index %2==0){
          return (
            <TouchableHighlight style={styles.item} onPress={this.peasantButton} accessibilityLabel={item.key}>
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

let peasantSound1 = new Expo.Audio.Sound();

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