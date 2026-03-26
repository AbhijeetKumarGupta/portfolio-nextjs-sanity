import { fetchPortfolioData } from "@/lib/sanity/fetchPortfolio";
import { TopNav } from "@/components/TopNav/TopNav";
import { HomeHero } from "@/components/sections/HomeHero/HomeHero";
import { AboutSection } from "@/components/sections/AboutSection/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection/SkillsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection/CertificationsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";

export const revalidate = 60;

export default async function HomePage() {
  const data = await fetchPortfolioData();

  return (
    <>
      <TopNav logoUrl={data.images.logoUrl} links={data.links} />
      <main>
        <HomeHero
          name={data.displayName}
          headline={data.headline}
          backgroundUrl={data.images.homeBackgroundUrl}
        />
        <AboutSection imageUrl={data.aboutImageUrl} bio={data.aboutBio} />
        <ExperienceSection items={data.experiences} />
        <SkillsSection
          backgroundUrl={data.images.skillsBackgroundUrl}
          skills={data.skills}
        />
        <CertificationsSection items={data.certifications} />
        <ProjectsSection projects={data.projects} />
        <ContactSection
          backgroundUrl={data.images.contactBackgroundUrl}
          contact={data.contact}
          linkedinUrl={data.links.linkedin}
        />
      </main>
      <SiteFooter logoUrl={data.images.logoUrl} links={data.links} />
    </>
  );
}
