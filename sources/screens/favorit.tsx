import React, { useEffect } from 'react'
import { SafeAreaView, Text, ImageBackground, Image, KeyboardAvoidingView, Dimensions, StatusBar } from 'react-native'

import {Asset} from '../asset/index'

function Favorit(){

  useEffect(() => {
    StatusBar.setBarStyle('dark-content')
    StatusBar.setBackgroundColor('rgb(105, 248, 145)')
  }, [])

  return(
    <SafeAreaView
      style={{
        flex : 1
      }}
    >
      <KeyboardAvoidingView style={{flex:1}}>
      <ImageBackground 
        source = {Asset.rectangle}
        resizeMode='stretch'
        style={{
          height : 340,
          width : Dimensions.get('window').width
        }}
      />
      <Text>Favorit</Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
export default Favorit
