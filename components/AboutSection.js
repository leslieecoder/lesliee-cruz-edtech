
export default function AboutSection() {
  return (
    <section className="about-band" id="about">
      <div className="section-width about-grid">
        <div className="about-copy">
          <p className="script-kicker align-left">A bit about me</p>
          <h2>
            Engineering with a
            <br />
            <span className="light-italic">learning mindset.</span>
          </h2>
          <p>
            My journey started with a <span className="about-highlight">desire to teach</span> elementary education because of my love for helping others learn. Over time, my <span className="about-highlight">passion for design</span> took over, and my drive for a challenge pushed me into <span className="about-highlight">software engineering</span>. That&apos;s where I discovered my ideal intersection: <span className="about-highlight">UX-focused front-end development</span>. Today, I get to write code, design user-first experiences, and <span className="about-highlight">teach what I love</span>. Building tech for non-profits and educational institutions is my passion because I truly believe <span className="about-highlight about-highlight-script">everyone is capable of learning when given the right support</span>.
          </p>
        </div>

        <div className="portrait-card portrait-collage">
          <div className="portrait-frame portrait-frame-primary">
            <img src="/assets/collage-1.png" alt="Lesliee Cruz illustration portrait" />
          </div>
          <div className="portrait-side-grid">
            <div className="portrait-frame portrait-frame-secondary portrait-frame-soft">
              <img src="/assets/Collage-2.png" alt="Lesliee Cruz creative portrait" />
            </div>
            <div className="portrait-frame portrait-frame-secondary portrait-frame-angled">
              <img src="/assets/Collage-3.png" alt="Lesliee Cruz coding portrait" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}