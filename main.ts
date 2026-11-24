import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My agent apologized for the bug, proofread the apology twice, then confidently made the exact same bug again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
