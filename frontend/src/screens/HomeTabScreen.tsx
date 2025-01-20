import React, { useState } from "react";
import {TextInput, View, TouchableOpacity, Text, FlatList, Image} from "react-native";
import styles from "../../styles/HomeTabScreen.styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HomeTabScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleIconPress = (icon: string) => {
    alert(`Icon ${icon} pressed!`);
  };

  // Sample data for the gallery
  const galleryData = [
    { id: "1", title: "Card 1", image: "https://via.placeholder.com/150" },
    { id: "2", title: "Card 2", image: "https://via.placeholder.com/150" },
    { id: "3", title: "Card 3", image: "https://via.placeholder.com/150" },
    { id: "4", title: "Card 4", image: "https://via.placeholder.com/150" },
    { id: "5", title: "Card 5", image: "https://via.placeholder.com/150" },
  ];

  return (
    <View style={styles.container}>
      {/* Search Box */}
      <TextInput
        style={styles.searchBox}
        placeholder="Search..."
        placeholderTextColor="#aaa"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

    {/* Music Icon Buttons */}
     <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handleIconPress("microphone")} style={styles.iconButton}>
          <FontAwesome5 name="microphone" size={40} color="#007bff" />
          <Text style={styles.iconLabel}>Vocal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress("guitar")} style={styles.iconButton}>
          <FontAwesome5 name="guitar" size={40} color="#007bff"/>
          <Text style={styles.iconLabel}>Guitar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress("drum")} style={styles.iconButton}>
        <FontAwesome5 name="drum" size={40} color="#007bff"/>
          <Text style={styles.iconLabel}>Drum</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handleIconPress("piano")} style={styles.iconButton}>
          <MaterialIcons name="piano" size={40} color="#007bff" />
          <Text style={styles.iconLabel}>Piano</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress("violin")} style={styles.iconButton}>
          <MaterialCommunityIcons name="violin" size={40} color="#007bff" />
          <Text style={styles.iconLabel}>Violin</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress("music-clef-treble")} style={styles.iconButton}>
          <MaterialCommunityIcons name="music-clef-treble" size={40} color="#007bff" />
          <Text style={styles.iconLabel}>Kids</Text>
        </TouchableOpacity>
      </View>

      {/* "For You" Text */}
      <View style={styles.textContainer}>
        <Text style={styles.forYouText}>For You</Text>
      </View>

   {/* Gallery */}
   <FlatList
        data={galleryData}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.galleryContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
        )}
      />

    </View>
  );
};

export default HomeTabScreen;
