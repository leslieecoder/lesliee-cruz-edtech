import {
  FaChartLine,
  FaCubesStacked,
  FaDiagramProject,
  FaPalette,
  FaPlug,
  FaRegComments,
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
  { name: 'HTML', group: 'UI', icon: SiHtml5, color: '#e34f26', surface: '#fff0ea' },
  { name: 'CSS', group: 'UI', icon: SiCss, color: '#1572b6', surface: '#edf6ff' },
  { name: 'JavaScript', group: 'UI', icon: SiJavascript, color: '#d7a400', surface: '#fff8dc' },
  { name: 'TypeScript', group: 'UI', icon: SiTypescript, color: '#3178c6', surface: '#eef5ff' },
  { name: 'React', group: 'UI', icon: SiReact, color: '#61dafb', surface: '#ebfbff' },
  { name: 'Next.js', group: 'UI', icon: SiNextdotjs, color: '#111111', surface: '#f3f3f3' },
  { name: 'Figma', group: 'Design', icon: SiFigma, color: '#a259ff', surface: '#f5edff' },
  { name: 'Design Systems', group: 'Design', icon: FaCubesStacked, color: '#6d5efc', surface: '#f1efff' },
  { name: 'UX/UI Design', group: 'Design', icon: FaPalette, color: '#d65db1', surface: '#fff0fa' },
  { name: 'Accessibility', group: 'Design', icon: FaUniversalAccess, color: '#0086d1', surface: '#ebf7ff' },
  { name: 'Usability Testing', group: 'Research', icon: FaRegComments, color: '#db6f3d', surface: '#fff2eb' },
  { name: 'A/B Testing', group: 'Research', icon: FaChartLine, color: '#0c9b6b', surface: '#ebfff7' },
  { name: 'User Flows', group: 'Research', icon: FaDiagramProject, color: '#7b57ff', surface: '#f2efff' },
  { name: 'Prototype Iteration', group: 'Research', icon: SiGithubcopilot, color: '#171515', surface: '#f2f2f5' },
  { name: 'Developer Handoff', group: 'Collaboration', icon: FaPlug, color: '#ff7f50', surface: '#fff1eb' },
  { name: 'Git', group: 'Collaboration', icon: SiGit, color: '#f05032', surface: '#fff0ea' },
  { name: 'GitHub', group: 'Collaboration', icon: SiGithub, color: '#181717', surface: '#f2f2f2' },
  { name: 'Responsive Design', group: 'Collaboration', icon: SiTailwindcss, color: '#06b6d4', surface: '#eafcff' }
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