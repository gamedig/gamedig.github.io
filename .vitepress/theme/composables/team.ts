import type { DefaultTheme } from "vitepress";

export interface TeamMember extends Partial<DefaultTheme.TeamMember> {
  avatar: string;
  name: string;
  github: string;

  linkedin?: string;
  mastodon?: string;
  twitter?: string;
  youtube?: string;
  sponsor?: string;

  title?: string;
  org?: string;
  desc?: string;
}

export function createLinks(tm: TeamMember): TeamMember {
  const githubUrl = tm.github.startsWith("http")
    ? tm.github
    : `https://github.com/${tm.github}`;

  const links: DefaultTheme.SocialLink[] = [
    { icon: "github", link: githubUrl },
  ];

  if (tm.linkedin) {
    links.push({ icon: "linkedin", link: tm.linkedin });
  }
  if (tm.mastodon) {
    links.push({ icon: "mastodon", link: tm.mastodon });
  }
  if (tm.twitter) {
    links.push({ icon: "x", link: tm.twitter });
  }
  if (tm.youtube) {
    links.push({ icon: "youtube", link: tm.youtube });
  }

  tm.links = links;
  return { ...tm };
}

export const team: TeamMember[] = [
  {
    avatar: "https://github.com/mmorrisontx.png",
    name: "Michael",
    github: "mmorrisontx",
    title: "Full Stack Developer",
    org: "Indeed, Inc.",
    desc: "Founder of the GameDig Project & Organization.",
  },
  {
    avatar: "https://github.com/CosminPerRam.png",
    name: "CosminPerRam",
    github: "CosminPerRam",
    title: "Programmer",
    org: "nerds-sh",
    desc: "Founder of Rust GameDig & GameDig Maintainer.",
  },
  {
    avatar: "https://github.com/cainthebest.png",
    name: "Cain",
    github: "cainthebest",
    title: "Backend Developer",
    desc: "Rust GameDig & Documentation Maintainer.",
  },
  {
    avatar: "https://github.com/Douile.png",
    name: "Tom",
    github: "Douile",
    title: "Programmer",
    desc: "Rust GameDig Maintainer.",
  },
].map(createLinks);
