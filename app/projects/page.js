import Link from 'next/link';
import ProjectsArchiveClient from '../../components/ProjectsArchiveClient';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export const metadata = {
  title: 'Projects | Lesliee Cruz',
  description: 'Project archive and case studies for Lesliee Cruz.'
};

export default function ProjectsArchivePage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="subpage-main section-width">
        <section className="subpage-hero">
          <Link className="back-link" href="/">Back Home</Link>
          <p className="script-kicker">Take a look to all</p>
          <h1>My Projects</h1>
        </section>

        <ProjectsArchiveClient />
      </main>
      <Footer />
    </div>
  );
}