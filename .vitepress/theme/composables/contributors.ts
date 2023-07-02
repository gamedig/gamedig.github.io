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

function createLinks(tm: TeamMember): TeamMember {
  const links: DefaultTheme.SocialLink[] = [
    { icon: "github", link: tm.github },
  ];
  if (tm.linkedin) {
    links.push({ icon: "linkedin", link: tm.linkedin });
  }
  if (tm.mastodon) {
    links.push({ icon: "mastodon", link: tm.mastodon });
  }
  if (tm.twitter) {
    links.push({ icon: "twitter", link: tm.twitter });
  }
  if (tm.youtube) {
    links.push({ icon: "youtube", link: tm.youtube });
  }

  tm.links = links;
  return { ...tm };
}

export const orgMembers: TeamMember[] = [
  {
    avatar: "https://github.com/mmorrisontx.png",
    name: "Michael Morrison",
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
].map(createLinks);

export const contributors: TeamMember[] = [
  {
    avatar: "https://github.com/cainthebest.png",
    name: "Cain",
    github: "cainthebest",
    title: "Backend Developer",
    desc: "Rust GameDig & Documentation Contributor.",
  },
  {
    avatar: "https://github.com/Douile.png",
    name: "Tom",
    github: "Douile",
    title: "Programmer",
    desc: "GameDig Contributor.",
  },
  {
    avatar: "https://github.com/xCausxn.png",
    name: "James Causon",
    github: "xCausxn",
    twitter: "xCausxn",
    title: "Programmer",
    desc: "Node GameDig Contributor.",
  },
  {
    avatar: "https://github.com/cetteup.png",
    name: "cetteup",
    github: "cetteup",
    mastodon: "https://hostux.social/@cetteup",
    title: "Programmer",
    desc: "Node GameDig Contributor.",
  },
  {
    avatar: "https://github.com/sonicsnes.png",
    name: "sonicsnes",
    github: "sonicsnes",
    title: "Programmer",
    desc: "Node GameDig Contributor.",
  },
  {
    avatar: "https://github.com/SteadEXE.png",
    name: "Jordan B",
    github: "SteadEXE",
    title: "Programmer",
    desc: "Node GameDig Contributor.",
  },
  {
    avatar: "https://github.com/ItsPhenom.png",
    name: "Nicolas Graf",
    github: "ItsPhenom",
    twitter: "ItsPhenomTM",
    mastodon: "https://trackmania.social/@phenom",
    title: "Founder, CEO & System Administrator",
    org: "Evo Esports",
    desc: "Node GameDig Contributor.",
  },
  {
    avatar: "https://github.com/nickdnk.png",
    name: "Nicolai Cornelis",
    github: "nickdnk",
    title: "CEO & Founder",
    org: "Nyx",
    desc: "Node GameDig Contributor.",
  },
  {
    avatar: "https://github.com/podrivo.png",
    name: "Pedro Ivo Hudson",
    github: "podrivo",
    title: "Designer",
    desc: "Node GameDig Contributor.",
  },
  {
    avatar: "https://github.com/arkuar.png",
    name: "arkuar",
    github: "arkuar",
    title: "Programmer",
    desc: "Node GameDig Contributor.",
  },
  {
    avatar: "https://github.com/P4sca1.png",
    name: "Pascal Sthamer",
    github: "P4sca1",
    title: "Programmer",
    desc: "Node GameDig Contributor.",
  },
  {
    avatar: "https://github.com/MattJeanes.png",
    name: "Matt Jeanes",
    github: "MattJeanes",
    twitter: "mattjeanes23",
    mastodon: "https://hachyderm.io/@mattjeanes",
    title: "Senior DevOps Engineer",
    org: "Exclaimer Ltd.",
    desc: "Node GameDig Contributor.",
  },
  {
    avatar: "https://github.com/c43721.png",
    name: "c43721",
    github: "c43721",
    title: "Software Engineer",
    desc: "Node GameDig Contributor.",
  },
  {
    avatar: "https://github.com/a-sync.png",
    name: "a-sync",
    github: "a-sync",
    title: "Programmer",
    desc: "Node GameDig Contributor.",
  },
].map(createLinks);
