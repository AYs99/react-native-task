import {Button} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Hero from './src/screens/Hero';
import ProjectDetails from './src/screens/ProjectDetails';

import RightArrow from './src/assets/icons/RightArrow';

import colors from './src/styles/colors';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hero"
          component={Hero}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="تفاصيل المشروع"
          component={ProjectDetails}
          options={({navigation}) => ({
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: colors.darkBlue,
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: colors.gray,
            },
            headerRight: () => <RightArrow navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
