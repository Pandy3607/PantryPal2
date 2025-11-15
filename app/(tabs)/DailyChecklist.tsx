import { router } from "expo-router";
import { onValue, ref, update } from "firebase/database";
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

export default function DailyChecklist() {
  const userId = "demoUser";
  const [goals, setGoals] = useState<any[]>([]);

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

  const toggleCompletion = async (id: string, current: boolean) => {
    const goalRef = ref(rtdb, `dailyGoals/${userId}/goals/${id}`);
    await update(goalRef, { completed: !current });
  };

  const handleFinishDay = () => {
    const total = goals.length;
    const completed = goals.filter((g) => g.completed).length;

    if (completed === total && total > 0) {
      router.push("./SuccessScreen");
    } else {
      router.push("./FailScreen");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today&apos;s Checklist 🌿</Text>

      <ScrollView style={{ width: "100%" }}>
        {goals.map((goal) => (
          <TouchableOpacity
            key={goal.id}
            style={styles.goalItem}
            onPress={() => toggleCompletion(goal.id, goal.completed)}
          >
            <View
              style={[
                styles.checkbox,
                { backgroundColor: goal.completed ? colors.primary : "#fff" },
              ]}
            />
            <Text
              style={[
                styles.goalText,
                {
                  textDecorationLine: goal.completed ? "line-through" : "none",
                  color: goal.completed ? colors.primaryDark : colors.text,
                },
              ]}
            >
              {goal.text}
            </Text>
          </TouchableOpacity>
        ))}

        {goals.length === 0 && (
          <Text style={styles.emptyText}>No goals yet. Add some! 📝</Text>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.finishButton} onPress={handleFinishDay}>
        <Text style={styles.finishText}>Finish Day</Text>
      </TouchableOpacity>
    </View>
  );
}

// -------------------- STYLES --------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    color: colors.text,
    alignSelf: "center",
  },

  goalItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.primary,
    marginRight: 15,
  },

  goalText: {
    fontSize: 16,
    fontWeight: "500",
  },

  emptyText: {
    fontSize: 16,
    color: "#777",
    marginTop: 20,
    textAlign: "center",
  },

  finishButton: {
    backgroundColor: colors.primaryDark,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  finishText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});