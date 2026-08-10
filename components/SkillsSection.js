import { FaBrain, FaCodeBranch, FaPalette, FaReact } from 'react-icons/fa6';

const skills = [
  {
    className: 'skill-card skill-card-top-left',
    icon: FaBrain,
    iconColor: '#7b57ff',
    iconSurface: '#f2efff',
    title: 'AI',
    items: ['Automation', 'Workflows', 'Prompt Design', 'AI Assisted UX']
  },
  {
    className: 'skill-card skill-card-bottom-left',
    icon: FaCodeBranch,
    iconColor: '#ff7f50',
    iconSurface: '#fff1eb',
    title: 'Backend',
    items: ['Node.js', 'APIs', 'Supabase', 'Firebase']
  },
  {
    className: 'skill-card skill-card-top-right',
    icon: FaPalette,
    iconColor: '#d65db1',
    iconSurface: '#fff0fa',
    title: 'Design + Learning',
    items: ['Figma', 'UX', 'Learning Systems', 'LX']
  },
  {
    className: 'skill-card skill-card-bottom-right',
    icon: FaReact,
    iconColor: '#00a6d6',
    iconSurface: '#ebfbff',
    title: 'Front End',
    items: ['React', 'JavaScript', 'HTML/CSS', 'TypeScript']
  }
];

export default function SkillsSection() {
  return (
    <section className="skills section-width" id="skills">
      <div className="section-heading">
        <p className="script-kicker">Skills</p>
        <h2>What I work with</h2>
      </div>

      <div className="skills-stage">
        {skills.map((skill) => (
          <article
            key={skill.title}
            className={skill.className}
            style={{ '--skill-icon-color': skill.iconColor, '--skill-icon-surface': skill.iconSurface }}
          >
            <span className="skill-icon"><skill.icon aria-hidden="true" /></span>
            <h3>{skill.title}</h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}

        <img className="skills-orb orb-left" src="/assets/hero-figure.png" alt="" aria-hidden="true" />
        <img className="skills-orb orb-right" src="/assets/hero-figure.png" alt="" aria-hidden="true" />
        <img className="skills-star skills-star-top" src="/assets/hreo-figure-2.png" alt="" aria-hidden="true" />
        <img className="skills-star skills-star-left" src="/assets/hreo-figure-2.png" alt="" aria-hidden="true" />
        <img className="skills-star skills-star-right" src="/assets/hreo-figure-2.png" alt="" aria-hidden="true" />

        <div className="skills-avatar-wrap">
          <img src="/assets/avatar-cta.png" alt="Lesliee Cruz call to action avatar" />
        </div>
      </div>
    </section>
  );
}