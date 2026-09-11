'use client';

import Link from 'next/link';
import { useState } from 'react';
import { projectCategories, projects } from '../data/projects';

const archiveCategories = projectCategories.filter((category) => category !== 'All');

function isExternalUrl(href) {
  return href.startsWith('http');
}

export default function ProjectsArchiveClient() {
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleCategories = activeCategory === 'All'
    ? archiveCategories
    : archiveCategories.filter((category) => category === activeCategory);

  return (
    <section className="archive-layout">
      <div className="archive-toolbar">
        <div className="project-filters archive-filters">
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`filter-chip${activeCategory === category ? ' is-active' : ''}`}
              type="button"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {visibleCategories.map((category) => {
        const categoryProjects = projects.filter((project) => project.category === category);

        return (
          <div key={category} className="archive-group">
            <div>
              <p className="archive-group-label script-kicker">{category}</p>
            </div>
            <div className="archive-grid">
              {categoryProjects.map((project) => (
                <article key={project.slug} className="archive-card">
                  <div className={`project-preview ${project.previewTone}`}>
                    {project.images?.[0] ? (
                      <img className="case-project-image" src={project.images[0]} alt={`${project.title} preview`} />
                    ) : (
                      <div className="project-preview-mark">
                        <span className="preview-icon">⌲</span>
                        <span>{project.badge}</span>
                      </div>
                    )}
                  </div>
                  <div className="archive-card-top">
                    <h3>{project.title}</h3>
                    <span className="mini-chip">{project.year}</span>
                  </div>
                  <p>{project.subtitle}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link
                    className="text-link"
                    href={project.cta}
                    target={isExternalUrl(project.cta) ? '_blank' : undefined}
                    rel={isExternalUrl(project.cta) ? 'noreferrer' : undefined}
                  >
                    {project.ctaLabel}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}