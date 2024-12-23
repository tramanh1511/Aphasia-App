import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup, Welcome } from "./screens";
import Account from "./screens/Account";
import Flashcard from "./screens/Flashcard";
// import Sentences from "./screens/Sentences";
import Settings from "./screens/Settings";
import Profile from "./screens/Profile";
import ConfirmSettings from "./screens/ConfirmSettings";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Home Screen </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Flashcard" component={Flashcard} />
        {/* <Stack.Screen name="Sentences" component={Sentences} /> */}
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ConfirmSettings" component={ConfirmSettings} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
