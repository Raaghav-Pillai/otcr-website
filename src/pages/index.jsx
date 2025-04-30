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

      {/* Services Section */}

      {/* Carousel Placeholder */}

    </div>
  );
}