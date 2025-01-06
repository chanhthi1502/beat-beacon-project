import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "../../styles/HomeTabScreen.styles";

const HomeTabScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is a Home screen!</Text>
    </View>
  );
};

export default HomeTabScreen;
