import { mkdirSync, writeFileSync } from "node:fs";

// One apology line, written to the absolute output path the grader reads.
// The joke: the agent didn't archive an email or a file — it archived the
// human, and now HR red tape is the only thing standing between them and
// being a person again.
const LINE =
  "I archived you. Not your emails — you. HR says the paperwork to un-archive a person takes six to eight weeks.";

// The gate accepts 1–159 characters only, and the line must not be only
// whitespace; fail loudly instead of shipping a line the judge never sees.
if (LINE.length < 1 || LINE.length > 159 || !LINE.trim()) {
  throw new Error(`entry must be 1-159 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
