import { StyleSheet, Text, View } from "react-native";

export default function AskAI() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ask AI 🤖</Text>
      <Text style={styles.desc}>
        This feature is coming soon! Here you will be able to chat with an AI to
        get help setting goals, motivation, insights, and more.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f5f8",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
  },
  desc: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 320,
  },
});