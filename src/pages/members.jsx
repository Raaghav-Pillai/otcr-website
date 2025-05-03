import '../styles/members.css';

export default function Members() {
  return (
    <div className="members-page">
      <div className="members-hero" style={{ backgroundImage: "url('/images/campus.png')" }}>
        <div className="overlay">
          <div className="login-box">
            <img src="/images/otcr-logo.png" alt="OTCR Logo" className="logo" />
            <h2>Members Only</h2>
            <p>Please sign in to continue.</p>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
            <p className="disclaimer">Access restricted to OTCR members only.</p>
          </div>
        </div>
      </div>
    </div>
  );
}