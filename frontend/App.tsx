import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./src/screens/LoginScreen";
import HomeTabScreen from "./src/screens/HomeTabScreen";
import Ionicons from "react-native-vector-icons/Ionicons"; // For icons

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = "";

          // Match route names to icons
          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Search":
              iconName = "search";
              break;
            case "Profile":
              iconName = "person";
              break;
            case "Notifications":
              iconName = "notifications";
              break;
            case "Settings":
              iconName = "settings";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeTabScreen} />
      <Tab.Screen name="Search" component={HomeTabScreen} />
      <Tab.Screen name="Profile" component={HomeTabScreen} />
      <Tab.Screen name="Notifications" component={HomeTabScreen} />
      <Tab.Screen name="Settings" component={HomeTabScreen} />
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
