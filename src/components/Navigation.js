import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';
import ChangePassword from './ChangePassword';
import Home from '../screens/Home';
import Foods from '../screens/Foods';
import AddFood from '../screens/AddFood';
import Recipes from '../screens/Recipes';
import AddRecipe from '../screens/AddRecipe';
import ParseRecipe from '../screens/ParseRecipe';
import AddIngredients from '../screens/AddIngredients';

const fullWidth = Dimensions.get('window').width; //full width
const SettingsStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Profile" component={Profile} />
      <SettingsStack.Screen name="ChangePassword" component={ChangePassword} />
      <SettingsStack.Screen name="Foods" component={Foods} />
      <SettingsStack.Screen name="AddFood" component={AddFood} />
    </SettingsStack.Navigator>
  );
}
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <SettingsStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const RecipeStack = createStackNavigator();
function RecipeStackScreen() {
  return (
    <RecipeStack.Navigator>
      <SettingsStack.Screen name="Recipes" component={Recipes} />
      <SettingsStack.Screen name="ParseRecipe" component={ParseRecipe} />
      <SettingsStack.Screen name="AddIngredients" component={AddIngredients} />
      <SettingsStack.Screen name="AddFood" component={AddFood} />
    </RecipeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigation(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerTitle: () => {
            return <Text>Header</Text>;
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({focused, color, size, padding}) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = focused ? 'md-person' : 'md-person';
            } else if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Groceries') {
              iconName = focused ? 'ios-basket' : 'ios-basket';
            } else if (route.name === 'MealPlan') {
              iconName = focused ? 'ios-restaurant' : 'ios-restaurant';
            } else if (route.name === ' ') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle';
              size = 60;
              padding = 60;
            }

            // You can return any component that you like here!
            return (
              <Icon
                name={iconName}
                size={size}
                color={color}
                style={{paddingBottom: padding}}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'lightseagreen',
          inactiveTintColor: 'grey',
          allowFontScaling: true,
          labelStyle: {fontSize: 12},
          style: {width: fullWidth},
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="MealPlan" component={RecipeStackScreen} />
        <Tab.Screen name=" " component={RecipeStackScreen} />
        <Tab.Screen name="Groceries" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
