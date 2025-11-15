// services/cycleService.ts
import { get, ref, set } from "firebase/database";
import { rtdb } from "../firebaseConfig";

/**
 * Returns the timestamp (in ms) for the most recent 9 PM.
 */
export function getCurrentCycleStart() {
  const now = new Date();
  const cycle = new Date();

  cycle.setHours(21, 0, 0, 0); // 9 PM

  // If it's already past 9 PM today → today is the start
  if (now.getHours() >= 21) {
    return cycle.getTime();
  }

  // If before 9 PM → yesterday 9 PM is the cycle start
  cycle.setDate(cycle.getDate() - 1);
  return cycle.getTime();
}

/**
 * Ensures stored cycle is aligned with the correct 9 PM boundary.
 */
export async function checkDailyCycle(userId: string) {
  const userRef = ref(rtdb, `dailyGoals/${userId}`);
  const cycleSnap = await get(userRef);

  const currentCycleStart = getCurrentCycleStart();

  // If user has never created goals yet, initialize cycle
  if (!cycleSnap.exists()) {
    await set(userRef, {
      currentCycleStart,
      goals: {},
    });
    return;
  }

  const data = cycleSnap.val();
  const storedStart = data.currentCycleStart;

  // If stored cycle is outdated → reset for the new day
  if (storedStart !== currentCycleStart) {
    await set(userRef, {
      currentCycleStart,
      goals: {},
    });
  }
}

/**
 * Evaluates if today's goals were completed.
 */
export async function evaluateDay(userId: string) {
  const goalsRef = ref(rtdb, `dailyGoals/${userId}/goals`);
  const snapshot = await get(goalsRef);

  if (!snapshot.exists()) {
    return { success: false, total: 0, completed: 0 };
  }

  const goals = snapshot.val();
  const keys = Object.keys(goals);

  const completed = keys.filter((k) => goals[k].completed === true).length;
  const total = keys.length;

  return {
    success: completed === total && total > 0,
    total,
    completed,
  };
}

/**
 * Clears today's goals and starts a brand new cycle.
 */
export async function resetDailyGoals(userId: string) {
  const newCycleStart = getCurrentCycleStart();

  await set(ref(rtdb, `dailyGoals/${userId}`), {
    currentCycleStart: newCycleStart,
    goals: {},
  });
}