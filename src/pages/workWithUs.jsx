import '../styles/workWithUs.css';

export default function WorkWithUs() {
    return (
      <div className="work-with-us-page">
        <section className="work-hero" style={{ backgroundImage: "url('/images/campus.png')" }}>
          <div className="overlay">
            <div className="hero-content">
              <h1>Work With Us</h1>
              <p>
                With over two decades and 150 successful projects of invaluable experience, OTCR has established itself as a trusted partner for clients across diverse sectors. Our team will help accomplish your goals through our consulting services of business strategy, quantitative analysis, and technical solutions.
              </p>
            </div>
          </div>
        </section>
        {/* Our Services Section */}
        <section className="services-section">
            <h2>Our Services</h2>
            <div className="services-grid">
                {[
                {
                    title: 'Industry, technology, and market trends analysis',
                    color: 'blue',
                    description: 'Using data and insights to create conclusions and forecast the trajectory of industries/technology'
                },
                {
                    title: 'Marketing Strategies',
                    color: 'cream',
                    description: 'Analyzing marketing trends, competitor insights, and consumer data to develop the most effective marketing approach'
                },
                {
                    title: 'Growth Strategies',
                    color: 'blue',
                    description: 'Identifying a clients\' goals and objectives, current and future obstacles, and strategies to increase market share and revenue'
                },
                {
                    title: 'Market Entry',
                    color: 'cream',
                    description: 'Pinpointing market size, competition, and opportunities to determine the value and risk of the client entering a new market'
                },
                {
                    title: 'Competitor analysis & partnership strategy',
                    color: 'blue',
                    description: 'Analyzing competitor and partnership landscape to map acquisition opportunities for the client'
                },
                {
                    title: 'Operations analysis & improvements',
                    color: 'cream',
                    description: 'Using a deep internal analysis to improve the client\'s business strategy and performance'
                },
                {
                    title: 'Product Development',
                    color: 'blue',
                    description: 'Performing product and market research to improve and tailor the product\'s design/functionality'
                },
                {
                    title: 'Product Validation',
                    color: 'cream',
                    description: 'Conducting competitive analysis and compiling consumer feedback to identify the effectiveness of the client\'s product(s) in the market'
                },
                {
                    title: 'Technology commercialization',
                    color: 'blue',
                    description: 'Analyzing market research and consumer data to guide the client\'s technology product(s) into the commercial space'
                }
                ].map(({ title, color, description }, i) => (
                <div key={i} className={`service-card ${color}`}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                ))}
            </div>
        </section>
        <section className="info-deck-section" style={{ backgroundImage: "url('/images/handshake.jpg')" }}>
            <div className="info-overlay">
                <div className="info-content">
                <p>
                    For a more in-depth look into our qualifications, services offered, past work, and potential engagement, please refer to our information deck.
                </p>
                <a href="/pdfs/deck.pdf" target="_blank" rel="noopener noreferrer" className="info-button">
                    Information Deck
                </a>
                </div>
            </div>
        </section>
        {/* <section className="clients-section">
            <h2>Our Past Clients</h2>
            <img src="/images/clients.png" alt="Our Past Clients" className="clients-image" />
        </section> */}
        <section className="after-otcr-section">
            <h2>Past Clients</h2>
            <div className="after-otcr-image-container">
                <img src="/images/clients.png" alt="Our Past Clients" />
            </div>
      </section>
      </div>
    );
  }