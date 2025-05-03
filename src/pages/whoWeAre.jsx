import '../styles/whoWeAre.css';

export default function WhoWeAre() {
  return (
    <div className="who-we-are-page">
      {/* Hero Section */}
      <section className="who-hero" style={{ backgroundImage: "url('/images/campus.png')" }}>
        <div className="overlay">
          <div className="hero-content">
            <h1>Who We Are</h1>
            <p>
              We pride ourselves on delivering high quality, impactful work at every level of our firm. Our partners create robust SoWs that are carried out by teams of 5 consultants overseen by a PM.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Partners</h2>
        <div className="team-grid">
          {[
            ['Jeff Pape', 'Executive Partner', 'jeff.jpg'],
            ['Atharva Awasthi', 'Managing Partner', 'atharva.jpg'],
            ['Luke Pollack', 'Senior Advisor', 'luke.jpg'],
            ['Nyssa Aftab', 'Social Partner', 'nyssa.jpg'],
            ['Kriti Gangadharan', 'Career Placement Partner', 'kriti.jpg'],
            ['James Weiland', 'Professional Development Partner', 'james.jpg'],
            ['John Warning', 'Alumni Relations Partner', 'john.jpg'],
            ['Siddhaarta Venkatesh', 'Project Excellence Partner', 'siddhaarta.jpg'],
            ['Mann Sheth', 'New Hire Development Partner', 'mann.jpg'],
            ['Sneha Chaliki', 'Technology Partner', 'sneha.jpg'],
          ].map(([name, title, img]) => (
            <div className="team-card" key={name}>
              <img src={`/images/team/${img}`} alt={name} />
              <h4>{name}</h4>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Instagram Section */}
      <section className="instagram-section">
        <h2>Follow OTCR on Instagram...</h2>
        <div className="instagram-grid">
            {[
            ['insta1.jpg', 'SP25 NEW HIRE CLASS'],
            ['insta2.jpg', 'OTCR at McDonough School of Business'],
            ['insta3.jpg', 'Final Application Deadline'],
            ].map(([img, alt], i) => (
            <div className="insta-post" key={i}>
                <img src={`/images/instagram/${img}`} alt={alt} />
            </div>
            ))}
        </div>
      </section>
      {/* After OTCR Section */}
      <section className="after-otcr-section">
        <h2>After OTCR</h2>
        <div className="after-otcr-image-container">
            <img src="/images/after-otcr.jpg" alt="Companies OTCR alumni have joined" />
        </div>
      </section>
    </div>
  );
}