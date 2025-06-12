import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillSection from './components/SkillSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="font-sans">
      <AboutSection />
      <ExperienceSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
}
