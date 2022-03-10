
import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { NavigatorParameters } from '@models/navigators'

import Home from '../screens/home'
import PickImage from '../screens/pick-image'
import Login from '../screens/login'
import TabBottom from '../screens/bottom-navigator'
import Profile from '../screens/detail-profile'
import Notification from '../screens/notification'
import Favorit from '../screens/favorit'
import MyDrawer from '../screens/drawer'

const Stack = createStackNavigator<NavigatorParameters>()

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions = {{
        headerShown: false, // false to remove header
        gestureEnabled: true // default true for ios, false for android
      }}
    >

    <Stack.Screen
			name = "TabBottom"
			component = {TabBottom}
		/>

    <Stack.Screen
      name = "Home"
      component = {Home}
      options = {{
        headerTitle: 'React Native Starter',
        headerShown: false
      }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false
      }}
    />

    <Stack.Screen
      name = "PickImage"
      component = {PickImage}
      options = {{
        ...TransitionPresets.SlideFromRightIOS,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: 'dodgerblue'
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        title: 'Pick Image',
        headerShown  : true
      }}
    />
    
    <Stack.Screen
			name = "Profile"
			component = {Profile}
		/>

    <Stack.Screen 
      name = "Favorit"
      component={Favorit}
    />

    <Stack.Screen 
      name = "Notification"
      component={Notification}
    />

    <Stack.Screen 
      name = "MyDrawer"
      component={MyDrawer}
    />

    </Stack.Navigator>
  )
}

export default StackNavigator
