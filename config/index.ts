import { tanushi } from "./tanushi";
import { mom } from "./mom";

export const configs = {
  tanushi,
  mom
};

export type ConfigKey = keyof typeof configs;