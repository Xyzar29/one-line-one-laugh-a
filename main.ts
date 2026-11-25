// One Line, One Laugh — entry program.
//
// Writes a single self-contained one-liner to /output/entry.txt.
// The line must stay within the kit gate: 1-140 UTF-8 characters,
// not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a cooking attempt so bad the smoke alarm — the one
// appliance that should hate it most — treats it as a performance.
const LINE =
  "I tried to impress my date by cooking dinner. The smoke alarm gave me a standing ovation.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
