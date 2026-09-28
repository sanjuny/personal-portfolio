import fs from "node:fs";
import path from "node:path";

import { social } from "@/data/social";

export function isResumeAvailable() {
  return fs.existsSync(
    path.join(process.cwd(), "public", social.resumeFileName),
  );
}
