// app/(tabs)/Home.tsx

import { router } from "expo-router";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { rtdb } from "../../firebaseConfig";
import { colors } from "../../theme/theme";

export default function HomeScreen() {
  const userId = "demoUser";

  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const goalsRef = ref(rtdb, `dailyGoals/${userId}/goals`);

    const unsubscribe = onValue(goalsRef, (snapshot) => {
      if (snapshot.exists()) {
        const goalsObj = snapshot.val();
        const allGoals = Object.values(goalsObj || []);

        const totalGoals = allGoals.length;
        const completedGoals = allGoals.filter((g: any) => g.completed).length;

        setTotal(totalGoals);
        setCompleted(completedGoals);
      } else {
        setTotal(0);
        setCompleted(0);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome Back 🌿</Text>

      {/* Progress Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today&apos;s Progress</Text>
        <Text style={styles.cardSubtitle}>
          {completed} / {total} goals completed
        </Text>

        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: total === 0 ? "0%" : `${(completed / total) * 100}%`,
              },
            ]}
          />
        </View>
      </View>

      {/* Main Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)/DailyChecklist")}
      >
        <Text style={styles.buttonText}>View Daily Checklist</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primaryDark }]}
        onPress={() => router.push("/(tabs)/GoalScreen")}
      >
        <Text style={styles.buttonText}>Add More Goals</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/(tabs)/AskAI")}
        >
          <Text style={styles.secondaryButtonText}>Ask AI</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/(tabs)/AboutUs")}
        >
          <Text style={styles.secondaryButtonText}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/(tabs)/Settings")}
        >
          <Text style={styles.secondaryButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
    backgroundColor: colors.background,
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: colors.text,
    marginTop: 40,
    marginBottom: 20,
  },

  /* Card */
  card: {
    width: "100%",
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 16,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 17,
    color: colors.subtext,
    marginBottom: 14,
  },

  /* Progress bar */
  progressBar: {
    width: "100%",
    height: 12,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 10,
  },

  /* Buttons */
  button: {
    width: "90%",
    paddingVertical: 16,
    backgroundColor: colors.primary,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  /* Bottom buttons */
  bottomButtons: {
    width: "100%",
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  secondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryButtonText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "600",
  },
});