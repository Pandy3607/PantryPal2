import { ref, set } from "firebase/database";
import { rtdb } from "../firebaseConfig";

export function getCurrentCycleStart() {
  const now = new Date();
  const today9PM = new Date();
  today9PM.setHours(21, 0, 0, 0);

  if (now < today9PM) {
    today9PM.setDate(today9PM.getDate() - 1);
  }

  return Math.floor(today9PM.getTime() / 1000);
}

export async function saveGoals(userId: string, goalsArray: string[]) {
  const cycleStart = getCurrentCycleStart();

  const goalsObj: any = {};
  goalsArray.forEach((text, i) => {
    goalsObj[`goal_${i}`] = { text, completed: false };
  });

  await set(ref(rtdb, `dailyGoals/${userId}`), {
    currentCycleStart: cycleStart,
    goals: goalsObj,
  });
}