import '../styles/recruitment.css';

export default function Recruitment() {
  return (
    <div className="recruitment-page">
      <section className="recruitment-hero" style={{ backgroundImage: "url('/images/campus.png')" }}>
        <div className="overlay">
          <div className="hero-text">
            <h1>Recruitment</h1>
            <p>
              Want to explore the world of consulting? OTCR recruits students from a variety of majors
              and backgrounds to join the firm every semester. Please view the information below to learn
              more about our recruitment process and to explore our preparation materials. 
            </p>
            <a href="/interest-form" className="interest-button">Interest Form</a>
            <a href="/apply" className="apply-button">Apply Now</a>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2>Recruitment Timeline</h2>
        <div className="timeline">
            {[
            {
                date: '01/30',
                title: 'Info Night #1',
                fullDate: 'January 30, 2025',
                time: '6:00 PM – 7:00 PM',
                location: 'Location TBA',
                description: 'Learn more about us and our recruitment process.',
                dressCode: 'Business Casual',
            },
            {
                date: '01/31',
                title: 'Cycle 1 Application Due',
                fullDate: 'January 31, 2025',
                time: 'Due by 11:59 PM',
                location: 'Online Submission',
                description: 'All applications will be evaluated equally regardless of cycle.',
                dressCode: 'N/A',
            },
            {
                date: '02/04',
                title: 'Info Night #2',
                fullDate: 'February 4, 2025',
                time: '7:00 PM – 8:00 PM',
                location: 'Location TBA',
                description: 'Discover more about the firm and our recruitment process.',
                dressCode: 'Business Casual',
            },
            {
                date: '02/05',
                title: 'Case Training + Meet & Greet',
                fullDate: 'February 5, 2025',
                time: '7:00 PM – 9:00 PM',
                location: 'Location TBA',
                description: 'Learn about our case interviews and get to know members of the firm afterwards.',
                dressCode: 'Business Casual',
            },
            {
                date: '02/07',
                title: 'Cycle 2 Application Due',
                fullDate: 'February 7, 2025',
                time: 'Due by 11:59 PM',
                location: 'Online Submission',
                description: 'Final deadline to submit your membership application. All applications will be evaluated equally regardless of cycle.',
                dressCode: 'N/A',
            },
            ].map((item, index) => (
            <div className="timeline-item" key={index}>
                <div className="dot">
                <div className="hover-card">
                    <h4>{item.title}</h4>
                    <p><strong>{item.fullDate} • {item.time}</strong></p>
                    <p><em>{item.location}</em></p>
                    <p>{item.description}</p>
                    {item.dressCode !== 'N/A' && (
                    <p><strong>Dress Code:</strong> {item.dressCode}</p>
                    )}
                </div>
                </div>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-label">{item.title}</div>
            </div>
            ))}
        </div>
      </section>

      {/* Interview Practice Section */}
      <section className="interview-section">
        <div className="interview-card">
            <img src="/images/group.png" alt="Globe Icon" />
            <h3>Round 1 Interview Practice</h3>
            <p>
            There are two portions, behavioral and analytical. Within the behavioral section, we are looking to identify individuals with high internal motivation, strong leadership skills, and diverse personalities. During the analytical section, we are looking for logical problem solving and critical thinking abilities.
            </p>
        </div>
        <div className="interview-card">
            <img src="/images/writing.png" alt="Paper Icon" />
            <h3>Round 2 Interview Practice</h3>
            <p>
            Second round is more heavily focused on the traditional case interview, which will be interviewee led. We look for the ability to break down a problem into manageable and understandable pieces, draw concise conclusions from available data, and engage in a focused conversation with the interviewer.
            </p>
        </div>
        <div className="interview-buttons">
            <a href="/pdfs/case_1.pdf" download className="case-button">Practice Case 1</a>
            <a href="/pdfs/case_2.pdf" download className="case-button">Practice Case 2</a>
            <a href="/pdfs/case_3.pdf" download className="case-button">Practice Case 3</a>
        </div>
        </section>

        {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
            {[
            { category: 'How much prior experience do I need to join?', questions: ['None! OTCR promotes collaborative learning through our trainings and project work. All members gain useful business and technical insights throughout their experience in the firm.'] },
            { category: 'What\'s the expected time commitment?', questions: ['Your time commitment varies based on your roles and responsibilities in OTCR, but a typical full-time consultant project runs the length of the semester. Your weekly hours will then depend on your project scope and client feedback.'] },
            { category: 'What skills will I develop as a part of OTCR?', questions: ['You will not only develop the technical skills of consulting such as market research and slide design, but also soft skills such as public speaking and professional interaction.'] },
            { category: 'I have some individualized questions on my application?', questions: ['Please contact us or reach out to us during our info night/meet and greet sessions! We\'d love to have a thorough in-person chat with you there.'] },
            { category: 'What does a semester in OTCR look like?', questions: ['In addition to project work, our consultants have the chance to attend client visits, enjoy frequent social events, help share the firm\'s future through internal initiatives, and much more!'] },
            { category: 'Are there any restrictions on who can join OTCR?', questions: ['None! We welcome all majors and minors regardless of where you hail from.'] },
            { category: 'What kind of leadership opportunities does OTCR offer?', questions: ['We offer roles as a full-time consultant, lead consultant, project manager, internal project manager of our initiatives, and partner. There are various pathways to leadership you can take!'] },
            { category: 'How can I prepare more for interviews?', questions: ['Please utilize our practice cases and visit our case training sessions! We will have some excellent tips to get you started.'] },
            { category: 'What if I don\'t know if I want to go into consulting?', questions: ['That\'s okay! Even if you haven\'t decided on your career path yet, OTCR will help you develop skills necessary across all professions. Our members gain real-world experience in a variety of industries and roles that they carry with them into countless fields.'] },
            ].map((item, index) => (
            <details className="faq-item" key={index}>
                <summary>{item.category}</summary>
                <ul>
                {item.questions.map((q, i) => (
                    <li key={i}>{q}</li>
                ))}
                </ul>
            </details>
            ))}
        </div>
      </section>
    </div>
  );
}