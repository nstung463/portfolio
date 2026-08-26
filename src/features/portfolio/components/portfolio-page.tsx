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
import { ScrollReveal } from "./scroll-reveal";
import { SectionIndex } from "./section-index";
import { SkillsSection } from "./skills-section";

export function PortfolioPage() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <ScrollProgress />
      <ScrollReveal />
      <SectionIndex />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <HarnessSection />
      <FeaturedWorkSection />
      <EducationSection />
      <ContactSection />
      <PortfolioFooter />
    </main>
  );
}
