import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  searchBox: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  iconButton: {
    alignItems: "center",
  },
  iconLabel: {
    marginTop: 4,
    fontSize: 14,
    color: "#333",
  },
  textContainer: {
    alignItems: "left",
    marginTop: 16,
  },
  forYouText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
  },
  galleryContainer: {
    paddingHorizontal: 2,
    height: 150,
  },
  card: {
    width: 120,
    marginRight: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    width: "100%",
    height: 50,
    resizeMode: "cover",
    borderRadius: 8, 
  },
  cardTitle: {
    marginTop: 8,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
});

  export default styles;