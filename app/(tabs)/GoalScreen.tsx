// app/(tabs)/GoalScreen.tsx

import { onValue, push, ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { rtdb } from "../../firebaseConfig";
import { colors } from "../../theme/theme";

export default function GoalScreen() {
  const userId = "demoUser";
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState<any[]>([]);

  // Load goals from RTDB
  useEffect(() => {
    const goalsRef = ref(rtdb, `dailyGoals/${userId}/goals`);

    const unsubscribe = onValue(goalsRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setGoals([]);
        return;
      }

      const list = Object.entries(data).map(([id, item]: any) => ({
        id,
        ...item,
      }));

      setGoals(list);
    });

    return () => unsubscribe();
  }, []);

  // Add new goal
  const addGoal = async () => {
    if (!goalText.trim()) return;

    const newGoalRef = push(ref(rtdb, `dailyGoals/${userId}/goals`));
    await set(newGoalRef, {
      text: goalText,
      completed: false,
    });

    setGoalText("");
  };

  // Delete goal
  const deleteGoal = async (id: string) => {
    const goalRef = ref(rtdb, `dailyGoals/${userId}/goals/${id}`);
    await set(goalRef, null); // deletes node
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>My Goals 🌿</Text>

      {/* Input Card */}
      <View style={styles.inputCard}>
        <TextInput
          placeholder="Enter today&apos;s goal..."
          placeholderTextColor="#999"
          value={goalText}
          onChangeText={setGoalText}
          style={styles.input}
        />

        <TouchableOpacity style={styles.addButton} onPress={addGoal}>
          <Text style={styles.addButtonText}>Add Goal</Text>
        </TouchableOpacity>
      </View>

      {/* Goals List */}
      <FlatList
        style={{ width: "100%", marginTop: 20 }}
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>• {item.text}</Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteGoal(item.id)}
            >
              <Text style={styles.deleteText}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No goals yet. Add one above! 🌱</Text>
        }
      />
    </KeyboardAvoidingView>
  );
}

// -------------------- STYLES --------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.text,
    alignSelf: "center",
    marginBottom: 25,
  },

  inputCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  goalItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 12,
  },

  goalText: {
    fontSize: 16,
    color: colors.text,
  },

  deleteButton: {
    marginLeft: "auto",
    padding: 6,
    backgroundColor: "#ffdddd",
    borderRadius: 8,
  },

  deleteText: {
    color: "#cc0000",
    fontSize: 16,
    fontWeight: "700",
  },

  emptyText: {
    textAlign: "center",
    color: "#777",
    marginTop: 20,
    fontSize: 16,
  },
});