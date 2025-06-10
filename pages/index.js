export default function Home() {
  return (
    <>
      <header className="hero">
        <h1>Protecting Markets from Mispricing.</h1>
        <h2>
          We empower institutions and businesses with real-time, impact-aware
          trade decision systems—built on deep market microstructure intelligence.
        </h2>
        <a className="cta" href="#system">See the System</a>
      </header>
      <section className="grid">
        <div>
          <h3>Accurate Pricing Under Liquidity Constraints</h3>
          <p>Adaptive strategies that model execution cost and real-time order book dynamics.</p>
        </div>
        <div>
          <h3>Dynamic Volatility Insights</h3>
          <p>Volatility surfaces arise organically from agent behavior—not fitted.</p>
        </div>
        <div>
          <h3>Behavioral-Driven Trading Engine</h3>
          <p>Rational agents learn and evolve to optimize actions, not just react.</p>
        </div>
      </section>
      <section id="system" className="system">
        <svg width="400" height="200">
          <text x="20" y="50">Order Book Data → Agent Perception → Decision Tree → Optimized Trades</text>
        </svg>
        <p>Built as a multi-agent decision process with adaptive strategies and real-time intelligence.</p>
      </section>
      <section className="table-container">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Traditional Models</th>
              <th>Open Street System</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Execution Cost</td>
              <td>Ignored</td>
              <td>Square-root price impact</td>
            </tr>
            <tr>
              <td>Trading Actions</td>
              <td>Continuous</td>
              <td>Discrete & friction-aware</td>
            </tr>
            <tr>
              <td>Volatility Surface</td>
              <td>Manually fitted</td>
              <td>Emerges naturally</td>
            </tr>
            <tr>
              <td>Trader Behavior</td>
              <td>Static</td>
              <td>Adaptive agents</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To reduce institutional vulnerability to market mispricing by replacing outdated,
          frictionless models with a modern, microstructure-aware decision framework.
          Open Street stands between your strategy and suboptimal execution.
        </p>
      </section>
      <section className="cta-section">
        <p>Want to learn how our system could shield your desk from pricing inefficiencies?</p>
        <a className="cta" href="mailto:hello@openstreet.consulting">Request a Demo</a>
      </section>
      <footer>
        <p>Built with integrity, driven by clarity.</p>
        <p>Contact: <a href="mailto:hello@openstreet.consulting">hello@openstreet.consulting</a></p>
        <p>
          <a href="https://www.linkedin.com/company/open-street-consulting/">LinkedIn</a> |
          <a href="https://github.com/openstreetconsulting">GitHub</a>
        </p>
      </footer>
    </>
  );
}
