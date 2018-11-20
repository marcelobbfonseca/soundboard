import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Header, icon } from 'react-native-elements'

import { SoundBoard } from '../components/SoundBoard';
import { ResponsiveBoard } from '../components/ResponsiveBoard';
import { AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded } from 'expo'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header 
          leftComponent={<Image source={require('../assets/images/derpina_me_gusta.png')} style={{ maxWidth: 30, maxHeight: 30 }} />}
          centerComponent={{ text: 'Matheuzinho Soundboard', style: { color: '#000' } }}
          rightComponent={{ icon: 'share', color: '#000' }}
          backgroundColor='#dfdfde'
        />
        <ScrollView  >
          <ResponsiveBoard/>

        </ScrollView>
        <AdMobBanner
                
                bannerSize="Banner"
                adUnitID= "ca-app-pub-3940256099942544/6300978111"  // test key
                testDeviceID="EMULATOR"
                onDidFailToReceiveAdWithError={this.bannerError} 
          />
      </View>
    );
  }

  
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  bottomBanner:{
    position: 'absolute',
    bottom: 0,
  },
});
