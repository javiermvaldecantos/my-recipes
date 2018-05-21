import React from 'react';
import {Text, Platform} from 'react-native';
import {LeftHeaderControls} from './RecipeDetailScreenHeaderControls.js';

import styles from './RecipeDetailScreen.style.js';

class RecipeDetailScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    let options = {
      headerStyle: styles.header,
      headerTitle: 'List Detail',
      headerTitleStyle: styles.title,
      headerBackTitle: null
    }
    if(Platform.OS === 'android') options.headerLeft = <LeftHeaderControls onBackButtonPress={() => navigation.goBack()}/>

    return options;
  };

  constructor(props) {
    super(props);
  }

  render() {

    const navigationParams = this.props.navigation.state.params;

    return (
      <Text>{/*navigationParams.list.name*/} Recipe Details</Text>

    )
  }
}

export default RecipeDetailScreen;
