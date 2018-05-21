import React from 'react';
import {View, Text, StatusBar, Platform} from 'react-native';
import { LeftHeaderControls } from './SettingsScreenHeaderControls.js';

import styles from './SettingsScreen.style.js';

class SettingsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    var options = {
      headerStyle: styles.header,
      headerTitle: 'Settings',
      headerTitleStyle: styles.title,
      headerBackTitle: null
    }
    if(Platform.OS === 'android') options.left = <LeftHeaderControls onBackButtonPress={() => navigation.goBack()}/>

    return options;
  }

  render() {
    return (
      <View>
        {Platform.OS === 'android' &&
          <StatusBar backgroundColor={PRIMARY_COLOR.DARK} />
        }
        <Text>Settings</Text>
      </View>
    )
  }
}

export default SettingsScreen;
