// One Line, One Minute: The Vending Machine Pickup Line Contest
// make.fun bounty u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
// Entry: a single pickup line, spoken by the vending machine itself.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT = "I only hum when you walk past — press B4 and the last chocolate is yours, no exact change required.";

// Sealed gate, mirrored locally: UTF-8 text of 1 to 200 characters,
// exactly one line, not only white space, no trailing newline.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (text.includes("\n") || text.endsWith("\n")) {
    throw new Error("entry must be exactly one line with no trailing newline");
  }
}

validateEntry(OUTPUT);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", OUTPUT, "utf8");
