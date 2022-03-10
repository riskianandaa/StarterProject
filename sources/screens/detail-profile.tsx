import React, { useEffect } from 'react'
import { SafeAreaView, Text, ImageBackground, KeyboardAvoidingView, Dimensions } from 'react-native'

import {Asset} from '../asset/index'

function Profile(){
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
      <Text>Oke</Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
export default Profile
