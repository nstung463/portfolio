import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { EducationSection } from "./education-section";
import { ExperienceSection } from "./experience-section";
import { FeaturedWorkSection } from "./featured-work-section";
import { HarnessSection } from "./harness-section";
import { HeroSection } from "./hero-section";
import { PortfolioFooter } from "./portfolio-footer";
import { ProjectsSection } from "./projects-section";
import { ScrollProgress } from "./scroll-progress";
import { SectionIndex } from "./section-index";
import { SkillsSection } from "./skills-section";
import { WritingSection } from "./writing-section";

export function PortfolioPage() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <ScrollProgress />
      <SectionIndex />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <HarnessSection />
      <FeaturedWorkSection />
      <ProjectsSection />
      <WritingSection />
      <EducationSection />
      <ContactSection />
      <PortfolioFooter />
    </main>
  );
}
