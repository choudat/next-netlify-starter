import { useState, useEffect } from "react";
import { Statsig } from "statsig-js";

export function useFeatureFlag(flagName) {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const checkFlag = async () => {
      await Statsig.initialize(process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY, {
        userID: "anonymous-user",
      });
      setIsEnabled(Statsig.checkGate(flagName));
    };

    checkFlag();

    return () => {
      Statsig.shutdown();
    };
  }, [flagName]);

  return isEnabled;
}
