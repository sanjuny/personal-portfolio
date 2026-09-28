import { getPublicLinks } from "@/lib/links";
import { isResumeAvailable } from "@/lib/resume";

import { SiteNavClient } from "./site-nav-client";

export function SiteNav() {
  return <SiteNavClient links={getPublicLinks(isResumeAvailable())} />;
}
