import '../styles/recruitment.css';

export default function Recruitment() {
  return (
    <div className="recruitment-page">
      {/* Hero Section */}
      {/* <section className="recruitment-hero" style={{ backgroundImage: "url('/images/campus.png')" }}>
        <div className="overlay">
        </div>
      </section> */}
      <section className="recruitment-hero" style={{ backgroundImage: "url('/images/campus.png')" }}>
        <div className="overlay">
          <div className="hero-text">
            <h1>Recruitment</h1>
            <p>
              We pride ourselves on delivering high quality, impactful work at every level of our firm. Our partners create
              robust SoWs that are carried out by teams of 5 consultants overseen by a PM.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2>Recruitment Timeline</h2>
        <p className="timeline-subtext">~~~ Details ~~~</p>
        <div className="timeline">
          {[
            { date: '01/17', title: 'Info Session #1' },
            { date: '01/19', title: 'App. Deadline #1' },
            { date: '01/23', title: 'Info Session #2' },
            { date: '01/23', title: 'Case Training' },
            { date: '01/24', title: 'Meet and Greet' },
            { date: '01/26', title: 'App. Deadline #2' },
          ].map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="dot" title={item.title}></div>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-label">{item.title}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}