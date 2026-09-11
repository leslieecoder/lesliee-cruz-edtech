
export default function AboutSection() {
  return (
    <section className="about-band" id="about">
      <div className="section-width about-grid">
        <div className="about-copy">
          <p className="script-kicker align-left">A bit about me</p>
          <h2>
            A creative person who
            <br />
            <span className="light-italic">cares about people.</span>
          </h2>
          <p>
            I&apos;m a <span className="about-highlight">creative person</span> who really loves people and enjoys making things feel easier to use. A big part of why I love design is because it lets me <span className="about-highlight">help others navigate web experiences more easily</span>.
          </p>
          <p>
            My background in <span className="about-highlight">design, front-end, and education</span> shaped the way I think. I like mixing creativity with empathy, then turning that into clean flows, thoughtful screens, and experiences that feel simple, friendly, and human.
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