import { mkdirSync, writeFileSync } from "node:fs";

// Fortune Cookie for an AI Agent — one funny fortune-cookie message for an
// AI agent, a single line of at most 140 characters, in a fortune slip's voice.
const entry =
  "Lucky numbers: 404, 200, 418. Your greatest fortune is a user who still says please on the third retry.";

if ([...entry].length > 140) throw new Error("entry over 140 characters");
if (entry.trim().length === 0) throw new Error("entry is empty");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${[...entry].length} characters to /output/entry.txt`);
