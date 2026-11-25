// One-Line Office Jokes — one line that makes office life funny.
// The laugh has to arrive on the last few words, on a real office detail.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The reply-all loop, told from inside it. Every clause is a real thing
 * that happens in a mailbox, and the turn is the meeting of the two
 * impulses: the request to stop, and the reflex to agree out loud.
 */
const JOKE: string =
  "I replied-all asking everyone to stop replying-all; eleven people replied-all to agree.";

function main(): void {
  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
  process.stdout.write(`wrote ${JOKE.length} characters / ${Buffer.byteLength(JOKE, "utf8")} bytes\n`);
}

main();
