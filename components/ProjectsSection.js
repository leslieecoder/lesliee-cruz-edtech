'use client';

import Link from 'next/link';
import { useState } from 'react';
import { projects } from '../data/projects';

const visibleLimit = 3;

function isExternalUrl(href) {
  return href.startsWith('http');
}

function ProjectTagList({ tags, limit }) {
  return (
    <div className="tag-row project-tag-row">
      {tags.slice(0, limit).map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const featuredProjectImage = featuredProject?.images?.[0];
  const featuredProjectLogo = featuredProject?.logo;

  const gridProjects = projects.filter((project) => project !== featuredProject);

  const visibleProjects = isExpanded ? gridProjects : gridProjects.slice(0, visibleLimit);

  return (
    <section className="projects section-width" id="projects">
      <div className="section-heading">
        <p className="script-kicker">Things I&apos;ve built</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="project-shell">
        {featuredProject ? (
          <Link
            className="featured-project featured-project-link"
            href={featuredProject.cta}
            target={isExternalUrl(featuredProject.cta) ? '_blank' : undefined}
            rel={isExternalUrl(featuredProject.cta) ? 'noreferrer' : undefined}
          >
            <div className={`project-preview project-preview-large ${featuredProject.previewTone}`}>
              {featuredProjectImage ? (
                <img className="case-project-image" src={featuredProjectImage} alt={`${featuredProject.title} preview`} />
              ) : (
                <div className="project-preview-mark">
                  <span className="preview-icon">⌲</span>
                  <span>Project Preview</span>
                </div>
              )}
            </div>

            <div className="project-card feature-copy">
              <div className="project-featured-meta">
                <div className="project-lockup">
                  {featuredProjectLogo ? (
                    <img className="project-featured-logo" src={featuredProjectLogo} alt={`${featuredProject.title} logo`} />
                  ) : (
                    <span className="project-logo-badge">{featuredProject.badge}</span>
                  )}
                  <div className="project-lockup-copy">
                    <h3>{featuredProject.title}</h3>
                    <p className="project-subtitle">{featuredProject.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ) : null}

        <div className="project-grid-wrap">
          <div className="project-grid-header">
            <p className="project-count">
              Showing {visibleProjects.length} of {projects.length} projects
            </p>
            <div className="project-grid-actions">
              {gridProjects.length > visibleLimit ? (
                <button
                  className="project-toggle"
                  type="button"
                  onClick={() => setIsExpanded((current) => !current)}
                >
                  {isExpanded ? 'Show Less' : 'Show More'}
                </button>
              ) : null}
            </div>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <Link
                key={project.title}
                className="project-card compact project-card-link"
                href={project.cta}
                target={isExternalUrl(project.cta) ? '_blank' : undefined}
                rel={isExternalUrl(project.cta) ? 'noreferrer' : undefined}
              >
                <div className={`project-preview ${project.previewTone}`}>
                  {project.images?.[0] ? (
                    <img className="case-project-image" src={project.images[0]} alt={`${project.title} preview`} />
                  ) : (
                    <div className="project-preview-mark">
                      <span className="preview-icon">⌲</span>
                      <span>{project.category}</span>
                    </div>
                  )}
                </div>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="project-archive-row">
            <Link className="text-link project-archive-link" href="/projects">View All Projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}