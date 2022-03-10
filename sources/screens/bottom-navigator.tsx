import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { StackScreenPropsType } from '@models/navigators'

import { Asset } from '../asset/index'

import Login from '../screens/login'
import Profile from "../screens/detail-profile"
import Home from '../screens/home'
import Notification from '../screens/notification'
import Favorit from '../screens/favorit'


const TabMaterialBottom = createMaterialBottomTabNavigator()

function TabBottom({}: StackScreenPropsType<'TabBottom'>) {
  return(
    <TabMaterialBottom.Navigator
        shifting={false}
        initialRouteName="Home"
        activeColor="#fc0394"
        inactiveColor="#3e2465"
        barStyle={{ 
          backgroundColor: 'pink', 
          position : 'absolute',
          bottom : 20,
          left : 20,
          right : 20,
          elevation : 5,
          borderRadius : 15,
          justifyContent : 'center',
          height : 90 ,
          shadowColor: 'black',
          shadowOffset:{
            width : 0,
            height : 10
          },
          shadowOpacity : 0.5,
          shadowRadius : 3.5
        }}
      >
        <TabMaterialBottom.Screen name="Favorit" component={Favorit} 
          options={{
              tabBarLabel: 'Favorit',
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems : 'center' }}>
                  <Image 
                    source={Asset.favorit} 
                    resizeMode='contain'
                    style={{
                      height : 25,
                      width :25,
                      tintColor : focused ? '#fc0394' : '#3e2465'
                    }}
                  />
                </View>
              )
            }}
        />

      <TabMaterialBottom.Screen  name='Home' component={Home}
        options={{
          tabBarLabel : 'Home',
          tabBarIcon: ({focused}) => (
            <View style={{ alignItems : 'center' }}>
              <Image 
                source={Asset.home} 
                resizeMode='contain'
                style={{
                  height : 25,
                  width :25,
                  tintColor : focused ? '#fc0394' : '#3e2465'
                }}
              />
            </View>
          )
        }}
       />  

      <TabMaterialBottom.Screen  name='Login' component={Login}
        options={{
          tabBarLabel : 'Add',
          tabBarIcon: ({focused}) => (
            <View style={{ alignItems : 'center' }}>
              <Image 
                source={Asset.plus} 
                resizeMode='contain'
                style={{
                  height : 25,
                  width :25,
                  tintColor : focused ? '#fc0394' : '#3e2465'
                }}
              />
            </View>
          )
        }}
       />  

      <TabMaterialBottom.Screen  name='Notification' component={Notification}
        options={{
          tabBarLabel : 'Notifikasi',
          tabBarIcon: ({focused}) => (
            <View style={{ alignItems : 'center' }}>
              <Image 
                source={Asset.notification} 
                resizeMode='contain'
                style={{
                  height : 25,
                  width :25,
                  tintColor : focused ? '#fc0394' : '#3e2465'
                }}
              />
            </View>
          )
        }}
       />  

        <TabMaterialBottom.Screen name='Profile' component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) => (
              <View style={{ alignItems : 'center' }}>
                <Image 
                    source={Asset.user} 
                    resizeMode='contain'
                    style={{
                      height : 25,
                      width :25,
                      tintColor : focused ? '#fc0394' : '#3e2465'
                    }}
                  />
              </View>
            )
          }}
        /> 

    </TabMaterialBottom.Navigator>
  )
}
export default TabBottom

