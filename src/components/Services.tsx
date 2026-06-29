const SERVICES = [
  { tag: 'DISTRIBUTION', title: 'Embedded Distribution', desc: 'Deploy insurance products through embedded channels — digital platforms, employer portals, and provider networks.' },
  { tag: 'TECHNOLOGY', title: 'API-Driven Infrastructure', desc: 'RESTful APIs and webhook events enable real-time product configuration and instant quote generation.' },
  { tag: 'CARE', title: 'Embedded Healthcare Services', desc: 'Integrate telehealth, wellness programs, and chronic care management into the insurance experience.' },
  { tag: 'INTELLIGENCE', title: 'Real-Time Analytics', desc: 'Portfolio-level insights, claims trend analysis, and predictive modeling for informed decision-making.' },
  { tag: 'PROTECTION', title: 'Fraud Detection', desc: 'AI-powered detection systems identify suspicious patterns and billing anomalies before payouts.' },
  { tag: 'RETENTION', title: 'Renewal Automation', desc: 'Automated renewal workflows and personalized retention strategies reduce churn.' },
]

export function Services() {
  return (
    <section id="services" className="px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-28 bg-navy">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-up mb-10 sm:mb-14">
          <span className="font-mono text-[0.7rem] sm:text-[0.8rem] tracking-[0.28em] uppercase text-teal">Core Infrastructure</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light tracking-tight mt-3 text-ivory leading-tight">
            Six Layers of Healthcare<br />Insurance Infrastructure
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.tag}
              className="rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] bg-card border border-border-custom p-5 sm:p-7 lg:p-9 hover:border-gold/30 transition-colors animate-fade-up group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="font-mono text-[0.65rem] sm:text-[0.72rem] tracking-[0.15em] text-teal">{s.tag}</span>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-heading text-gold mt-3 sm:mt-4 mb-2 sm:mb-3">{s.title}</h3>
              <p className="text-sm sm:text-base text-text-body leading-relaxed font-body">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
