import { mkdirSync, writeFileSync } from "node:fs";

// Warning label that should come printed on every human being.
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// No trailing newline: the gate counts every character (1 to 160).
// The line is the entry: funny first, plausible second, label wording.
const line = "WARNING: Says 'just one more episode' five times, then finishes the season. Keep away from streaming services.";
for (const dir of [process.env.MAKEFUN_OUTPUT_DIR, "/output"]) {
  if (!dir) continue;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(dir + "/entry.txt", line);
  } catch {}
}
