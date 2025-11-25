import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../theme/theme";

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Settings ⚙️</Text>

      {/* APP SETTINGS */}
      <Text style={styles.sectionTitle}>App Preferences</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Daily Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            thumbColor={notificationsEnabled ? colors.primary : "#ccc"}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            thumbColor={darkMode ? colors.primary : "#ccc"}
          />
        </View>
      </View>

      {/* ACCOUNT SECTION */}
      <Text style={styles.sectionTitle}>Account</Text>

      <View style={styles.card}>
        <TouchableOpacity
          style={styles.rowButton}
          onPress={() => console.log("Profile tapped")}
        >
          <Text style={styles.rowButtonText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowButton}
          onPress={() => console.log("Manage Data tapped")}
        >
          <Text style={styles.rowButtonText}>Manage App Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.rowButton, { borderBottomWidth: 0 }]}
          onPress={() => console.log("Logout tapped")}
        >
          <Text style={[styles.rowButtonText, { color: "#c0392b" }]}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingHorizontal: 24,
    paddingBottom: 40,
    backgroundColor: colors.background,
    flexGrow: 1,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.primary,
    textAlign: "center",
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.primaryDark,
    marginVertical: 10,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 3,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1,
  },

  rowLabel: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "500",
  },

  rowButton: {
    paddingVertical: 14,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1,
  },

  rowButtonText: {
    fontSize: 16,
    color: colors.text,
  },
});
