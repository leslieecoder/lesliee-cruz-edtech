import {
  FaCubesStacked,
  FaDiagramProject,
  FaGraduationCap,
  FaPalette,
  FaPlug,
  FaUniversalAccess
} from 'react-icons/fa6';
import {
  SiCss,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiGooglegemini,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';

const stackItems = [
  { name: 'HTML', group: 'Dev', icon: SiHtml5, color: '#e34f26', surface: '#fff0ea' },
  { name: 'CSS', group: 'Dev', icon: SiCss, color: '#1572b6', surface: '#edf6ff' },
  { name: 'JavaScript', group: 'Dev', icon: SiJavascript, color: '#d7a400', surface: '#fff8dc' },
  { name: 'TypeScript', group: 'Dev', icon: SiTypescript, color: '#3178c6', surface: '#eef5ff' },
  { name: 'React', group: 'Dev', icon: SiReact, color: '#61dafb', surface: '#ebfbff' },
  { name: 'Next.js', group: 'Dev', icon: SiNextdotjs, color: '#111111', surface: '#f3f3f3' },
  { name: 'Tailwind CSS', group: 'Dev', icon: SiTailwindcss, color: '#06b6d4', surface: '#eafcff' },
  { name: 'Node.js', group: 'Dev', icon: SiNodedotjs, color: '#5fa04e', surface: '#edf8eb' },
  { name: 'Firebase', group: 'Dev', icon: SiFirebase, color: '#dd8a00', surface: '#fff5de' },
  { name: 'Supabase', group: 'Dev', icon: SiSupabase, color: '#3ecf8e', surface: '#eafff5' },
  { name: 'AI-assisted Development', group: 'AI & APIs', icon: SiGithubcopilot, color: '#171515', surface: '#f2f2f5' },
  { name: 'LLM Workflows', group: 'AI & APIs', icon: FaDiagramProject, color: '#7b57ff', surface: '#f2efff' },
  { name: 'Gemini / OpenAI APIs', group: 'AI & APIs', icon: SiGooglegemini, color: '#5b6cff', surface: '#eef1ff' },
  { name: 'REST APIs', group: 'AI & APIs', icon: FaPlug, color: '#ff7f50', surface: '#fff1eb' },
  { name: 'GraphQL', group: 'AI & APIs', icon: SiGraphql, color: '#e10098', surface: '#fff0fb' },
  { name: 'Git', group: 'AI & APIs', icon: SiGit, color: '#f05032', surface: '#fff0ea' },
  { name: 'GitHub', group: 'AI & APIs', icon: SiGithub, color: '#181717', surface: '#f2f2f2' },
  { name: 'Canvas LMS', group: 'Learning & UX', icon: FaGraduationCap, color: '#d33b2f', surface: '#fff0ee' },
  { name: 'UX/UI Design', group: 'Learning & UX', icon: FaPalette, color: '#d65db1', surface: '#fff0fa' },
  { name: 'Design Systems', group: 'Learning & UX', icon: FaCubesStacked, color: '#6d5efc', surface: '#f1efff' },
  { name: 'Figma', group: 'Learning & UX', icon: SiFigma, color: '#a259ff', surface: '#f5edff' },
  { name: 'Accessibility', group: 'Learning & UX', icon: FaUniversalAccess, color: '#0086d1', surface: '#ebf7ff' }
];

export default function StackStrip() {
  return (
    <section className="stack-strip section-width" aria-label="Technology stack">
      <div className="stack-ticker" aria-label="Technology stack ticker">
        <div className="stack-track">
          {stackItems.concat(stackItems).map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="stack-item stack-ticker-item"
              aria-hidden={index >= stackItems.length}
              style={{ '--stack-brand': item.color, '--stack-surface': item.surface }}
            >
              <span className="stack-icon">
                <item.icon aria-hidden="true" />
              </span>
              <h3>{item.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}