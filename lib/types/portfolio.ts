export type SocialLinks = {
  github: string;
  linkedin: string;
};

export type ContactInfo = {
  address: string;
  phone: string;
  email: string;
};

export type SiteImages = {
  logoUrl: string;
  homeBackgroundUrl: string;
  skillsBackgroundUrl: string;
  contactBackgroundUrl: string;
};

export type ExperienceItem = {
  companyName: string;
  companyDescription: string;
  workingDuration: string;
  role: string;
  year: string;
  companyLink: string;
  companyLogoUrl: string;
};

export type SkillItem = {
  skillName: string;
  skillDetailsLink: string;
  logoUrl: string;
};

export type CertificationItem = {
  certificateName: string;
  skillName: string;
  instituteLink: string;
  instituteLogoUrl: string;
  certificateHref: string;
};

export type ProjectItem = {
  projectName: string;
  projectDescription: string;
  institution: string;
  link: string;
  repositoryLink: string;
  repositoryLinkBackend: string;
  logoUrl: string;
};

export type PortfolioData = {
  displayName: string;
  headline: string;
  aboutBio: string;
  aboutImageUrl: string;
  images: SiteImages;
  links: SocialLinks;
  contact: ContactInfo;
  experiences: ExperienceItem[];
  skills: SkillItem[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
};
