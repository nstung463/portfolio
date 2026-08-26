import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { EducationSection } from "./education-section";
import { ExperienceSection } from "./experience-section";
import { FeaturedWorkSection } from "./featured-work-section";
import { HeroSection } from "./hero-section";
import { PortfolioFooter } from "./portfolio-footer";
import { ProjectsSection } from "./projects-section";
import { SkillsSection } from "./skills-section";
import { WritingSection } from "./writing-section";

export function PortfolioPage() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <FeaturedWorkSection />
      <ProjectsSection />
      <WritingSection />
      <EducationSection />
      <ContactSection />
      <PortfolioFooter />
    </main>
  );
}
