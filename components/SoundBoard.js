import React from 'react';
import {
    Button,
    Alert,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

export class SoundBoard extends React.Component {
    
    constructor(props){
        super(props)
        vm = this
    }

    birlButton(){
        Alert.alert('Birl!')
    };


    async peonButton1(){
        try{
            await peonSound1.loadAsync(require('../assets/sounds/PeonWhat1.wav'))
            await peonSound1.playAsync()
        }
        catch(error){
            console.log({error})
            await peonSound1.replayAsync()
        }
    };
    async peonButton2(){
        try{
            await peonSound2.loadAsync(require('../assets/sounds/PeonWhat2.wav'))
            await peonSound2.playAsync()
        }
        catch(error){
            console.log({error})
            await peonSound2.replayAsync()
        }
    };
    async peonButton3(){
        try{
            await peonSound3.loadAsync(require('../assets/sounds/PeonWhat3.wav'))
            await peonSound3.playAsync()
        }
        catch(error){
            console.log({error})
            await peonSound3.replayAsync()
        }
    };
    async peonButton4(){
        try{
            await peonSound4.loadAsync(require('../assets/sounds/PeonWhat4.wav'))
            await peonSound4.playAsync()
        }
        catch(error){
            console.log({error})
            await peonSound4.replayAsync()
        }
    };

    async peasantButton1(){
        try{
            await peasantSound1.loadAsync(require('../assets/sounds/PeasantWhat1.wav')) //.then().catch( error => console.log({error}))
            await peasantSound1.playAsync()
        }
        catch(error){
            console.log({error})
            await peasantSound1.replayAsync()
        }
    };
    async peasantButton2(){
        try{
            await peasantSound2.loadAsync(require('../assets/sounds/PeasantWhat2.wav')) //.then().catch( error => console.log({error}))
            await peasantSound2.playAsync()
        }
        catch(error){
            console.log({error})
            await peasantSound2.replayAsync()
        }
    };
    async peasantButton3(){
        try{
            await peasantSound3.loadAsync(require('../assets/sounds/PeasantWhat3.wav')) //.then().catch( error => console.log({error}))
            await peasantSound3.playAsync()
        }
        catch(error){
            console.log({error})
            await peasantSound3.replayAsync()
        }
    };
    async peasantButton4(){
        try{
            await peasantSound4.loadAsync(require('../assets/sounds/PeasantWhat4.wav')) //.then().catch( error => console.log({error}))
            await peasantSound4.playAsync()
        }
        catch(error){
            console.log({error})
            await peasantSound4.replayAsync()
        }
    };

    render(){
        return (
            <View style={style.container}> 
    
                <View style={style.header}>
                    <Text>Matheuzinho SoundBoard</Text>
                </View>
                
                <View style={style.buttonsContainer}>
                    <Button style={style.button} onPress={this.peasantButton1} title="Yes milord?" color="#841888" />
                    <Button style={style.button} onPress={this.peasantButton2} title="what is it?" color="#841888" />
                    <Button style={style.button} onPress={this.peasantButton3} title="More work?" color="#841888" />
                    <Button style={style.button} onPress={this.peasantButton4} title="wha?" color="#841888" />
                    {/* Peasant */}
                    <Button style={style.button} onPress={this.peonButton1} title="yes?" color="#841888" />
                    <Button style={style.button} onPress={this.peonButton2} title="hum?" color="#841888" />
                    <Button style={style.button} onPress={this.peonButton3} title="what you want?" color="#841888" />
                    <Button style={style.button} onPress={this.peonButton4} title="Something need doing?" color="#841888" />
                    <TouchableHighlight style={style.button2}>
                        <Text>touch me</Text>
                    </TouchableHighlight>
                </View>
                <View style={style.footer}>
                    <Text>footer</Text>
                </View>
            </View>
        );

    }
}



let peonSound1 = new Expo.Audio.Sound();
let peonSound2 = new Expo.Audio.Sound();
let peonSound3 = new Expo.Audio.Sound();
let peonSound4 = new Expo.Audio.Sound();
let peasantSound1 = new Expo.Audio.Sound();
let peasantSound2 = new Expo.Audio.Sound();
let peasantSound3 = new Expo.Audio.Sound();
let peasantSound4 = new Expo.Audio.Sound();


const style = StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'powderblue',
    },

    buttonsContainer:{
        //margin: 10,
        //flexDirection: 'row',
        //justifyContent: 'space-between',   
        height: '70%',
        backgroundColor: 'lightgreen',
        flexWrap: 'wrap',
        padding: 5,

    },
    button:{
        width: '50%',
        height: '50%',
        padding: 5,
        backgroundColor: '#fff'
    },
    button2:{
        backgroundColor:'red', 
        paddingTop:10, 
        paddingLeft:20, 
        paddingRight:20, 
        paddingBottom:10
    },
    header:{
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    footer:{
        height: '15%',
        backgroundColor: 'gray',
    },
})