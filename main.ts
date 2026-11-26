import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "// If you're reading this because it broke: it was already broken when I got here. I just made it quieter.";

// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters, one line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, gate requires 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
