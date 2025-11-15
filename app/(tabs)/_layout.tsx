import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { Stack, useRouter } from "expo-router";
import { useEffect, useRef } from "react";

import { evaluateDay, resetDailyGoals } from "../../services/cycleService";

const isExpoGo = Constants.appOwnership === "expo";

if (!isExpoGo) {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });
}

export default function RootLayout() {
  const router = useRouter();
  const routerRef = useRef(router);

  useEffect(() => {
    routerRef.current = router;
  }, [router]);

  useEffect(() => {
    if (isExpoGo) return;

    const subscription =
      Notifications.addNotificationResponseReceivedListener(async () => {
        const userId = "demoUser";
        const result = await evaluateDay(userId);

        if (result.success) {
          routerRef.current.push("/(tabs)/SuccessScreen");
        } else {
          routerRef.current.push("/(tabs)/FailScreen");
        }

        await resetDailyGoals(userId);
      });

    return () => subscription.remove();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="Home" options={{ title: "Home" }} />
      <Stack.Screen name="GoalScreen" options={{ title: "My Goals" }} />
      <Stack.Screen name="DailyChecklist" options={{ title: "Daily Checklist" }} />
      <Stack.Screen name="AboutUs" options={{ title: "About Us" }} />
      <Stack.Screen name="Settings" options={{ title: "Settings" }} />
      <Stack.Screen name="AskAI" options={{ title: "Ask AI" }} />
      <Stack.Screen name="SuccessScreen" options={{ title: "Success" }} />
      <Stack.Screen name="FailScreen" options={{ title: "Try Again" }} />
    </Stack>
  );
}