import '../styles/home.css'; 
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url('/images/campus.png')" }}>
        <div className="hero-overlay">
          <Navbar />
          <div className="hero-content">
            <h1>The Premier Student-Run Consulting Firm<br />at the University of Illinois</h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container split-layout">
            <div className="about-image">
            <img src="/images/team.png" alt="OTCR Team" />
            </div>
            <div className="about-text">
            {/* Optional stripes above heading */}
            <div className="about-stripes"></div>

            <h2>
                Committed to <br />
                delivering outstanding <br />
                business solutions
            </h2>
            <p>
                Since 2000, OTCR Consulting has brought together the brightest students at the University of Illinois to solve
                pressing real-world issues for our clients. Since 1999, we have been a trusted partner to clients ranging from
                local startups to Fortune 500 companies across various industries and verticals. We pride ourselves on providing
                high-quality and insightful work to our clients while developing our consultants professionally and personally.
            </p>
            <button className="primary-button">WHO WE ARE</button>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <p className="section-subtitle">About our firm…</p>
        <h2 className="section-title">We create well-informed and scalable business solutions</h2>
        <div className="services-columns">
            <div className="service-block">
            <h4>Business Strategy</h4>
            <p>
                We strive to effectively tackle our clients' short and long term business challenges across areas such as market entry,
                competitor analysis, acquisitions, product development, and more.
            </p>
            </div>
            <div className="service-block">
            <h4>Tech Strategy</h4>
            <p>
                We specialize in assisting our client companies in their technical endeavors through analysis of emerging technologies,
                research of potential applications, writing whitepapers, and more.
            </p>
            </div>
        </div>
        <button className="secondary-button">Work with us</button>
      </section>

      {/* Carousel Placeholder */}

    </div>
  );
}