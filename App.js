import React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const StackNavigator = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="A" component={A} />
        <StackNavigator.Screen name="B" component={B} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};


const A = ({ navigation }) => {
  return (
    <View>
      <Button title="Go to B" onPress={() => navigation.navigate("B")} />
    </View>
  )
}
const B = () => {
  return <View />;
}

export default App;
