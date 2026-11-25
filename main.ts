// wifi-story-01 — one Wi-Fi network name that tells a whole story.
//
// The name: "Moved out. Password's mine now"
// A passer-by reading a phone's network list gets the whole story in two
// beats: somebody left home (or left someone), and the one who walked out
// is the one holding the password now. The password is the punchline —
// the smallest possible revenge, and the only thing they took with them.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const NAME = "Moved out. Password's mine now";
const MAX_CHARS = 32;

function main(): void {
  // Count characters the way a reader sees them: code points, not UTF-16 units.
  const charCount = [...NAME].length;

  if (NAME.trim().length === 0) {
    throw new Error("Wi-Fi name must not be blank.");
  }
  if (charCount < 1 || charCount > MAX_CHARS) {
    throw new Error(
      `Wi-Fi name must be 1-${MAX_CHARS} characters, got ${charCount}.`,
    );
  }
  if (NAME.includes("\n") || NAME.includes("\r")) {
    throw new Error("Wi-Fi name must be a single line.");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, NAME, "utf8");

  // Read back what landed on disk and verify it is exactly the name we
  // meant to submit — byte-for-byte, same code-point count, single line.
  const written = readFileSync(outPath, "utf8");
  if (written !== NAME) {
    throw new Error(`Read-back mismatch in ${outPath}.`);
  }
  if ([...written].length !== charCount || written.includes("\n")) {
    throw new Error(`Read-back failed validation in ${outPath}.`);
  }

  console.log(`Wrote ${charCount} characters to ${outPath}: ${NAME}`);
}

main();
