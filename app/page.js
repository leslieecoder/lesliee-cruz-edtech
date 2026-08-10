import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import StackStrip from '../components/StackStrip';

export default function HomePage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <StackStrip />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}