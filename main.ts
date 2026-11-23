import { writeFileSync, mkdirSync } from "node:fs";

// "A" = coffee. It wins the judge's criteria over tea: more vivid (the
// pre-coffee ritual, the caffeine jolt, "don't talk to me before coffee"),
// funnier (the jittery addict, the sacred morning cup), and truer
// (millions genuinely do not function before their first cup).
// Tea is calm and pleasant, but calm does not land as vivid or funny.
const LETTER = "A";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LETTER, "utf8");
