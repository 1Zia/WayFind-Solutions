/** Maps industry slugs to files in /public/videos (flat folder). */
const SLUG_TO_FILE: Record<string, string> = {
  healthcare: "industry-healthcare.mp4",
  education: "industry-education.mp4",
  fitness: "industry-fitness.mp4",
  food: "industry-restaurant.mp4",
  retail: "industry-retail.mp4",
  "real-estate": "industry-realestate.mp4",
};

export function industryVideoSrc(slug: string): string | undefined {
  const file = SLUG_TO_FILE[slug];
  if (!file) return undefined;
  return `/videos/${encodeURIComponent(file)}`;
}

/** About / team B-roll in public/videos */
export const OFFICE_TEAM_VIDEO_SRC = "/videos/office%20team%20meeting.mp4";

export const HERO_BG_VIDEO_SRC = "/videos/hero-bg.mp4";
