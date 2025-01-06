import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "../../styles/HomeScreen.styles";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
    </View>
  );
};

export default HomeScreen;
