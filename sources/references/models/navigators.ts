import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type NavigatorParameters = {
  Home: undefined
  PickImage: undefined
  Login: undefined
  TabBottom : undefined
  Profile : undefined
  Notification : undefined
  Favorit : undefined
  MyDrawer : undefined
}

export type StackScreenPropsType<K extends keyof NavigatorParameters> = {
  route: RouteProp<NavigatorParameters, K>,
  navigation: StackNavigationProp<NavigatorParameters, K>
}
