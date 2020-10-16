import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from "./src/screens/Home"
import { Provider } from 'react-redux'
console.disableYellowBox = true
import store from "./src/redux/store"
const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
