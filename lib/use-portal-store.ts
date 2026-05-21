"use client";

import { useSyncExternalStore } from "react";
import { subscribePortalStore } from "./portal-store";

export function usePortalStore() {
  return useSyncExternalStore(subscribePortalStore, () => Date.now(), () => 0);
}
