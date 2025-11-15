import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { colors } from "../../theme/theme";

export default function AboutUs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us 🌿</Text>

      <Text style={styles.paragraph}>
        Welcome to our wellness and goal-tracking app! Our mission is to help
        people build healthier habits, stay motivated, and reach their personal
        goals one day at a time.
      </Text>

      <Text style={styles.sectionTitle}>Our Vision</Text>
      <Text style={styles.paragraph}>
        We believe that small, consistent steps lead to big life changes. By
        combining daily goals, friendly reminders, and a clean interface, we
        hope to make your journey simple and enjoyable.
      </Text>

      <Text style={styles.sectionTitle}>Our Team</Text>
      <Text style={styles.paragraph}>
        We&apos;re a passionate group of students and developers dedicated to
        building tools that support mental and physical wellbeing. This app is
        part of our commitment to helping people live healthier and happier
        lives.
      </Text>

      <Text style={styles.sectionTitle}>Thank You</Text>
      <Text style={styles.paragraph}>
        Thank you for choosing our app! We&apos;re excited to be a part of your
        wellness journey. You&apos;ve got this — and we&apos;re here to support
        you every step of the way. 💚
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80, // prevents camera notch overlap
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: colors.background,
    flexGrow: 1,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.primary,
    textAlign: "center",
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.primaryDark,
    marginTop: 20,
    marginBottom: 8,
  },

  paragraph: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    marginBottom: 10,
  },
});