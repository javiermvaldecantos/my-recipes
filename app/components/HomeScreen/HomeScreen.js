import React from 'react';
import {View, Text, TextInput, Button, TouchableHighlight, StatusBar, ScrollView, Platform, Modal} from 'react-native';
import { LeftHeaderControls, RightHeaderControls } from './HomeScreenHeaderControls.js';
import styles from './HomeScreen.style.js';

class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'My Recipes',
    headerStyle: styles.header,
    headerTitleStyle: styles.title,
    headerLeft: <LeftHeaderControls onMenuButtonPress={() => navigation.openDrawer()} />,
    headerRight: <RightHeaderControls onAddButtonPress={() => navigation.state.params.addRecipe()} />,
    headerBackTitle: null
  });

  constructor(props) {
    super(props);

    this.state = {
      recipes: [  // Array of recipes
        { name: "Spaghetti Bolognaise" },
        { name: "Chicken Parma" },
        { name: "Spanish Omelette" }
      ],
      newRecipe: '',
      addRecipeModalVisible: false
    }

    // function binding
    this.onAddRecipePress = this.onAddRecipePress.bind(this);
    this.onOpenDrawerPress = this.onOpenDrawerPress.bind(this);

    // pass functions used by the navigation to the navigation object
    this.props.navigation.setParams({ addRecipe: this.onAddRecipePress });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        {Platform.OS === 'android' &&
          <StatusBar backgroundColor={PRIMARY_COLOR.DARK} />
        }

        <Modal animationType="fade"
               transparent={true}
               presentationStyle="overFullScreen"
               visible={this.state.addRecipeModalVisible}
               onRequestClose={() => {alert("Modal has been closed.")}}>
         <View style={{marginTop: 22}}>
          <View>
            <TextInput style={{height: 40}}
                       placeholder="Recipe name"
                       onChangeText={(text) => this.setState({newRecipe: text})} />
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => this.setState({addRecipeModalVisible: false})}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <ScrollView>
          <Button onPress={() => navigate('RecipeDetail')}
                  title="Go to ListDetail view"/>
                {this.state.recipes.map( (recipe,index) =>
            <View key={index} style={{height:56, padding:4, backgroundColor:'white', flexDirection:'row'}}>
              <Text style={{fontSize:16, flex:1, paddingVertical: 10}}>
                {recipe.name}
              </Text>
              {/*<View style={{width: GLOBAL_HEIGHT.TOUCH_TARGET,height: GLOBAL_HEIGHT.TOUCH_TARGET,padding: 12}}>
                <Icon name={category.image} style={{fontSize:24, color:ICON_COLOR.ACTIVE.DARK}}/>
              </View>*/}
            </View>
          )}
        </ScrollView>
      </View>
    )
  }

  componentWillMount() {
    // pass functions used by the navigation to the navigation object
    // this.props.navigation.setParams({ addRecipe: this.onAddRecipePress });
  }

  onAddRecipePress() {
    // alert('create list');
    // create recipe
    this.setState({addRecipeModalVisible: true});
  }

  onOpenDrawerPress() {
    this.props.navigation.openDrawer();
  }
}

export default HomeScreen;
