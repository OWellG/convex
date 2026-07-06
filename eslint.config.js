import { defineConfig } from "eslint/config";

import convexPlugin from "@convex-dev/eslint-plugin";

export default defineConfig([
    // Other configurations

    ...convexPlugin.configs.recommended,
]); 