import { isHttpUrl } from "@/lib/utils";

export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "";
  if (isHttpUrl(value)) {
    return value.replace(/\/$/, "");
  }
  return "http://localhost:3000";
}
