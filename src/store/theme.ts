import { defineStore } from "pinia";
import type { ValueOf } from "../utils";

export const RouteTransition = {
  Fade: "fade",
} as const;

export type RouteTransitionType = ValueOf<typeof RouteTransition>;

interface ThemeState {
  routeTransition: RouteTransitionType;
}

export const useThemeStore = defineStore<"theme", ThemeState>("theme", {
  state: () => {
    return {
      routeTransition: RouteTransition.Fade,
    };
  },
});
