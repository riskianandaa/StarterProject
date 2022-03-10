import React, { useEffect } from 'react'
import { SafeAreaView, Text, ImageBackground, Image, KeyboardAvoidingView, Dimensions, StatusBar } from 'react-native'

import {Asset} from '../asset/index'

function Login(){

  useEffect(() => {
    StatusBar.setBarStyle('light-content')
    StatusBar.setBackgroundColor('#fc0394')
  }, [])

  return(
    <SafeAreaView
      style={{
        flex : 1
      }}
    >
      {/* <KeyboardAvoidingView style={{flex:1}}>
        <ImageBackground 
          source = {Asset.rectangle}
          resizeMode='stretch'
          style={{
            height : 340,
            width : Dimensions.get('window').width
          }}
        />
          <Text>
            Login
          </Text>

        </KeyboardAvoidingView> */}

    </SafeAreaView>
  )
}
export default Login
