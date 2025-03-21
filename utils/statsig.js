import { Statsig } from "statsig-js";

export const initializeStatsig = async () => {
  if (typeof window !== "undefined") {
    await Statsig.initialize(process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY, {
      userID: "anonymous-user",
    });
  }
};

export const isBlogEnabled = async () => {
  await initializeStatsig();
  return Statsig.checkGate("enable_blog");
};
