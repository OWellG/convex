import convexPlugin from "@convex-dev/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
export default defineConfig([
    globalIgnores(["convex/_generated"]),
    // Other configurations

    ...convexPlugin.configs.recommended,
]); 