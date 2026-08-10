import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaCheck, FaCompassDrafting, FaLightbulb, FaMagnifyingGlass, FaRoute, FaWandMagicSparkles } from 'react-icons/fa6';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { getProjectBySlug, projects } from '../../../data/projects';

const workflowSteps = [
  { label: '1', title: 'Find the friction', icon: FaMagnifyingGlass },
  { label: '2', title: 'Map the flow', icon: FaRoute },
  { label: '3', title: 'Break down the work', icon: FaLightbulb },
  { label: '4', title: 'Prototype guidance', icon: FaCompassDrafting },
  { label: '5', title: 'Refine the experience', icon: FaWandMagicSparkles }
];

function SectionLabel({ children }) {
  return <p className="case-kicker">{children}</p>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Lesliee Cruz'
    };
  }

  return {
    title: `${project.title} | Lesliee Cruz`,
    description: project.subtitle
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter(
    (entry) => entry.slug !== project.slug && entry.category === project.category
  ).slice(0, 3);
  const projectImages = project.images ?? [];
  const heroImage = projectImages[0];
  const solutionImage = project.motionAsset ?? projectImages[1];
  const featureImages = projectImages.slice(2);
  const liveUrl = project.liveUrl ?? '/projects';

  return (
    <div className="page-shell">
      <Header />
      <main className="subpage-main section-width case-study-page">
        <section className="subpage-hero case-study-topbar">
          <Link className="back-link" href="/projects">Back to Projects</Link>
        </section>

        <section className="detail-shell">
          <section className="case-hero-card">
            <div className={`project-preview project-preview-large case-preview-panel ${project.previewTone}`}>
              {heroImage ? (
                <img className="case-project-image" src={heroImage} alt={`${project.title} main screen`} />
              ) : (
                <div className="project-preview-mark">
                  <span className="preview-icon">⌲</span>
                  <span>Project Screenshot</span>
                </div>
              )}
            </div>

            <div className="case-intro-grid">
              <div className="case-intro-copy">
                <h1>{project.title}</h1>
                <p className="case-intro-summary">{project.overview}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <aside className="case-meta-panel">
                <div className="case-meta-list">
                  <div className="case-meta-item">
                    <span>Role</span>
                    <p>{project.role}</p>
                  </div>
                  <div className="case-meta-item">
                    <span>Year</span>
                    <p>{project.year}</p>
                  </div>
                  <div className="case-meta-item">
                    <span>Type</span>
                    <p>{project.category}</p>
                  </div>
                  <a
                    className="button button-primary case-meta-cta"
                    href={liveUrl}
                    target={liveUrl.startsWith('http') ? '_blank' : undefined}
                    rel={liveUrl.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    View Live
                  </a>
                </div>
              
              </aside>
            </div>
          </section>

          <section className="case-challenge-card">
            <div className="case-section-inner">
              <SectionLabel>The challenge</SectionLabel>
              <h2>What wasn&apos;t working.</h2>
              <div className="case-two-column">
                <article className="detail-card detail-card-wide ">
                  <p>{project.problem}</p>
                </article>
              </div>
            </div>
          </section>

          <section className="case-section case-section-band">
            <div className="case-section-inner">
              <SectionLabel>The solution</SectionLabel>
              <h2>What I built.</h2>
              <div className="case-solution-grid">
                <article className="detail-card detail-card-wide">
                  <p>{project.solution}</p>
                </article>

                <div className={`project-preview case-screenshot-card ${project.previewTone}`}>
                  {solutionImage ? (
                    <img className="case-project-image" src={solutionImage} alt={`${project.title} feature demo`} />
                  ) : (
                    <div className="project-preview-mark">
                      <span className="preview-icon">⌲</span>
                      <span>Solution Screenshot</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>


          <section className="case-section">
            <div className="case-section-inner">
              <SectionLabel>Impact notes</SectionLabel>
              <h2>What changed.</h2>
              <div className="case-card-grid case-card-grid-three">
                {project.impact.map((item) => (
                  <article key={item} className="detail-card case-metric-card">
                    <span className="case-impact-check" aria-hidden="true">
                      <FaCheck />
                    </span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="case-section case-section-band">
            <div className="case-section-inner">
              <SectionLabel>Final screens</SectionLabel>
              <h2>The finished product.</h2>
              <div className="case-finished-grid">
                {(featureImages.length ? featureImages : [null, null]).map((image, index) => (
                  <div key={image ?? `placeholder-${index}`} className={`project-preview case-finished-shot ${project.previewTone}`}>
                    {image ? (
                      <img className="case-project-image" src={image} alt={`${project.title} final screen ${index + 1}`} />
                    ) : (
                      <div className="project-preview-mark">
                        <span className="preview-icon">⌲</span>
                        <span>Project Screenshot</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="case-section case-section-band case-section-band-lilac">
            <div className="case-section-inner">
              <SectionLabel>Next steps</SectionLabel>
              <h2>What I&apos;d do next.</h2>
              <div className="case-next-list">
                {project.nextSteps.map((item) => (
                  <article key={item} className="case-next-item">
                    <span className="case-next-check" aria-hidden="true">
                      <FaCheck />
                    </span>
                    <span>{item}</span>
                  </article>
                ))}
              </div>
            </div>
          </section>

        </section>
      </main>
      <Footer />
    </div>
  );
}