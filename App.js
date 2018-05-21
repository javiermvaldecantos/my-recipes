import React from 'react';

import {createStackNavigator,createDrawerNavigator} from 'react-navigation';

//----- Global variables -----//
import global_color_palette from './app/global/color_palette.js';
import global_layout from './app/global/layout.js';
import global_typography from './app/global/typography.js';

//----- App screens -----//
import HomeScreen from './app/components/HomeScreen';
import RecipeDetailScreen from './app/components/RecipeDetailScreen';
import SettingsScreen from './app/components/SettingsScreen';

//----- StackNavigator between home screen and a list detail view -----//
const ListNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  RecipeDetail: {screen: RecipeDetailScreen },
  Settings: { screen: SettingsScreen }
});

//----- App main navigator: Can navigate to home screen and settings -----//
const AppNavigator = createDrawerNavigator({
  Home: { screen: ListNavigator,
          navigationOptions: {
            drawer: {
              label: 'My Recipes'
            },
          },
        },
  Settings: { screen: SettingsScreen,
              navigationOptions: {
                drawer: {
                  label: 'Settings'
                },
              },
            }
});

//----- App component -----//
class App extends React.Component {
  render() {
    return (
        <AppNavigator />
    );
  }
}

export default App;

// import './app/';
