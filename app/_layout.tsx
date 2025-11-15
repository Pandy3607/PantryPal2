// app/_layout.tsx
import * as Notifications from "expo-notifications";
import { Stack } from "expo-router";
import { useEffect, useRef } from "react";
import { evaluateDay, resetDailyGoals } from "../services/cycleService";

// 🔔 FIXED: Expo SDK 53 notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true, // REQUIRED
    shouldShowList: true,   // REQUIRED
  }),
});

export default function RootLayout() {
  const routerRef = useRef<any>(null);

  // Store updated router instance
  useEffect(() => {
    import("expo-router").then(({ router }) => {
      routerRef.current = router;
    });
  }, []);

  // Handle notification taps
  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      async () => {
        const userId = "demoUser";
        const result = await evaluateDay(userId);

        if (result.success) {
          routerRef.current.push("(tabs)/SuccessScreen");
        } else {
          routerRef.current.push("(tabs)/FailScreen");
        }

        await resetDailyGoals(userId);
      }
    );

    return () => subscription.remove();
  }, []);

  return <Stack />;
}