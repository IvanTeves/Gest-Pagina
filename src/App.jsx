import './App.css'

function Icon({ children }) {
  return (
    <span aria-hidden className="icon">
      {children}
    </span>
  )
}

export default function App() {
  return (
    <main>
      {/* Header */}
      <header className="header container">
        <a href="#" className="brand" aria-label="GestSoft - Inicio">
          <span className="brand-mark" />
          <span className="brand-name">GestSoft</span>
        </a>
        <nav className="nav">
          <a href="#servicios">Servicios</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero container section">
        <div className="hero-copy">
          <span className="pill">Startup de desarrollo de software</span>
          <h1>
            Construimos productos digitales modernos, rápidos y escalables.
          </h1>
          <p className="lead">
            Equipo full‑stack, metodologías ágiles y foco total en el impacto de
            tu negocio. De la idea al despliegue en semanas, no meses.
          </p>
          <div className="cta-group">
            <a href="#contacto" className="btn btn-primary">
              <Icon>✨</Icon> Hablemos de tu proyecto
            </a>
            <a href="#servicios" className="btn btn-ghost">
              Ver servicios
            </a>
          </div>
          <div className="hero-stats">
            <div className="chip">⏱ Entregas quincenales</div>
            <div className="chip">🛡 QA automatizado</div>
            <div className="chip">☁️ Infra en la nube</div>
          </div>
        </div>
        <div className="hero-art" aria-hidden>
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="gridlines" />
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="container section">
        <div className="section-head">
          <h2>Servicios end‑to‑end</h2>
          <p>Desde el descubrimiento hasta la operación en producción.</p>
        </div>
        <div className="grid cols-3">
          <article className="card">
            <h3>Desarrollo Web</h3>
            <p>
              SPAs y SSR con React, APIs escalables y dashboards de alto
              rendimiento.
            </p>
            <ul className="bullets">
              <li>Front‑end con React 19</li>
              <li>APIs REST/GraphQL</li>
              <li>SEO y accesibilidad</li>
            </ul>
          </article>
          <article className="card">
            <h3>Apps Móviles</h3>
            <p>
              Aplicaciones iOS/Android con experiencia nativa y despliegue
              continuo.
            </p>
            <ul className="bullets">
              <li>React Native</li>
              <li>Notificaciones push</li>
              <li>Publicación en stores</li>
            </ul>
          </article>
          <article className="card">
            <h3>Cloud & DevOps</h3>
            <p>
              Infraestructura como código, CI/CD y observabilidad desde el día
              1.
            </p>
            <ul className="bullets">
              <li>Docker y contenedores</li>
              <li>CI/CD GitHub Actions</li>
              <li>Monitoreo y alertas</li>
            </ul>
          </article>
          <article className="card">
            <h3>UI/UX</h3>
            <p>
              Diseño centrado en el usuario con prototipos de alta fidelidad.
            </p>
            <ul className="bullets">
              <li>Design systems</li>
              <li>Prototipado rápido</li>
              <li>Pruebas con usuarios</li>
            </ul>
          </article>
          <article className="card">
            <h3>Integraciones</h3>
            <p>
              Pagos, analítica, CRMs y servicios de terceros listos para
              producción.
            </p>
            <ul className="bullets">
              <li>Stripe, Mercado Pago</li>
              <li>Zapier, Make</li>
              <li>Google Analytics</li>
            </ul>
          </article>
          <article className="card">
            <h3>Calidad</h3>
            <p>
              Pruebas unitarias, E2E y análisis estático para código confiable.
            </p>
            <ul className="bullets">
              <li>Playwright / Vitest</li>
              <li>Lighthouse</li>
              <li>Auditorías de seguridad</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Tecnologías */}
      <section id="tecnologias" className="container section">
        <div className="section-head">
          <h2>Stack moderno</h2>
          <p>Elegimos la tecnología según tu contexto, no al revés.</p>
        </div>
        <div className="techs">
          {[
            'React',
            'Node.js',
            'TypeScript',
            'Vite',
            'Docker',
            'AWS/Azure',
            'PostgreSQL',
            'Redis',
          ].map((t) => (
            <span key={t} className="pill tech" aria-label={t}>
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section id="contacto" className="container section cta">
        <div className="cta-inner">
          <h2>¿Listo para acelerar tu roadmap?</h2>
          <p>
            Agendemos una reunión para entender tu objetivo y armar un plan.
          </p>
          <div className="cta-group">
            <a
              href="mailto:contacto@gestsoft.example"
              className="btn btn-primary"
            >
              <Icon>📩</Icon> Solicitar propuesta
            </a>
            <a href="#servicios" className="btn btn-ghost">
              Ver casos similares
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <p>© {new Date().getFullYear()} GestSoft. Hecho con ❤️ desde LATAM.</p>
        <div className="footer-links">
          <a href="#privacidad">Privacidad</a>
          <span>·</span>
          <a href="#terminos">Términos</a>
        </div>
      </footer>
    </main>
  )
}
