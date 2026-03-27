import groq from "groq";

import type { PortfolioData } from "@/lib/types/portfolio";

import { sanityClient } from "./client";
import { blocksToPlainText } from "./portableText";
import { urlForImage } from "./image";

type SanityDoc = Record<string, unknown> & { _type: string };

const singletonsQuery = groq`*[_type in ["about", "images", "links", "contactInfo"]]`;

function asRecordMap(docs: SanityDoc[]): Record<string, SanityDoc> {
  return docs.reduce<Record<string, SanityDoc>>((acc, item) => {
    acc[item._type] = item;
    return acc;
  }, {});
}

export async function fetchPortfolioData(): Promise<PortfolioData> {
  const [singletons, experiences, skills, certifications, projects] =
    await Promise.all([
      sanityClient.fetch<SanityDoc[]>(singletonsQuery),
      sanityClient.fetch<
        Array<{
          rank: number;
          companyName?: string;
          companyDescription?: string;
          workingDuration?: string;
          role?: string;
          year?: string;
          companyLink?: string;
          companyLogo?: unknown;
        }>
      >(groq`*[_type == "experience"]`),
      sanityClient.fetch<
        Array<{
          skillName?: string;
          skillDetailsLink?: string;
          logo?: unknown;
          rank?: number;
        }>
      >(groq`*[_type == "skill"]`),
      sanityClient.fetch<
        Array<{
          certificateName?: string;
          skillName?: string;
          instituteLink?: string;
          instituteLogo?: unknown;
          certificateLink?: string;
          certificate?: unknown;
          certificateSource?: string;
        }>
      >(groq`*[_type == "certifications"]`),
      sanityClient.fetch<
        Array<{
          rank?: number;
          projectName?: string;
          projectDescription?: string;
          institution?: string;
          link?: string;
          repositoryLink?: string;
          repositoryLinkBackend?: string;
          logo?: unknown;
        }>
      >(groq`*[_type == "project"]`),
    ]);

  const map = asRecordMap(singletons);
  const about = map.about as
    | {
        name?: string;
        image?: unknown;
        bio?: Array<{ _type?: string; children?: Array<{ text?: string }> }>;
      }
    | undefined;
  const images = map.images as
    | {
        topbarlogo?: unknown;
        homeBackground?: unknown;
        skillsBackground?: unknown;
        contactBackground?: unknown;
      }
    | undefined;
  const links = map.links as { github?: string; linkedin?: string } | undefined;
  const contactInfo = map.contactInfo as
    | { address?: string; phone?: string; email?: string }
    | undefined;

  const displayName =
    typeof about?.name === "string" && about.name.trim()
      ? about.name.trim()
      : "Abhijeet Kumar Gupta";

  return {
    displayName,
    headline: "Software Engineer",
    aboutBio: blocksToPlainText(about?.bio),
    aboutImageUrl: urlForImage(about?.image),
    images: {
      logoUrl: urlForImage(images?.topbarlogo),
      homeBackgroundUrl: urlForImage(images?.homeBackground),
      skillsBackgroundUrl: urlForImage(images?.skillsBackground),
      contactBackgroundUrl: urlForImage(images?.contactBackground),
    },
    links: {
      github: links?.github ?? "#",
      linkedin: links?.linkedin ?? "#",
    },
    contact: {
      address: contactInfo?.address ?? "",
      phone: contactInfo?.phone ?? "",
      email: contactInfo?.email ?? "",
    },
    experiences: experiences
      ?.sort?.((a, b) => (b?.rank ?? 0) - (a?.rank ?? 0))
      ?.map?.((i) => ({
        companyName: i.companyName ?? "",
        companyDescription: i.companyDescription ?? "",
        workingDuration: i.workingDuration ?? "",
        role: i.role ?? "",
        year: i.year ?? "",
        companyLink: i.companyLink ?? "#",
        companyLogoUrl: urlForImage(i.companyLogo),
      })),
    skills: skills
      .sort((a, b) => (a?.rank ?? 0) - (b?.rank ?? 0))
      .map((i) => ({
        skillName: i.skillName ?? "",
        skillDetailsLink: i.skillDetailsLink ?? "#",
        logoUrl: urlForImage(i.logo),
      })),
    certifications: certifications?.map?.((i) => ({
      certificateName: i.certificateName ?? "",
      skillName: i.skillName ?? "",
      instituteLink: i.instituteLink ?? "#",
      instituteLogoUrl: urlForImage(i.instituteLogo),
      certificateHref:
        (typeof i.certificateLink === "string" && i.certificateLink) ||
        urlForImage(i.certificate) ||
        "#",
    })),
    projects: projects
      ?.sort?.((a, b) => (a?.rank ?? 0) - (b?.rank ?? 0))
      ?.map?.((i) => ({
        projectName: i.projectName ?? "",
        projectDescription: i.projectDescription ?? "",
        institution: i.institution ?? "",
        link: i.link ?? "",
        repositoryLink: i.repositoryLink ?? "",
        repositoryLinkBackend: i.repositoryLinkBackend ?? "",
        logoUrl: urlForImage(i.logo),
      })),
  };
}
