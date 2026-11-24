import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = (
  "My agent apologized for the bug, proofread the apology twice, then confidently made the exact same bug again."
)
  .trim()
  .replace(/\s+/g, " ");
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line must be 1-200 chars, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
