import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform, useInView, animate } from 'framer-motion'
import {
  profile, bio, stats, focusAreas, researchPhilosophy, publications, workingPapers,
  teachingPhilosophy, teachingImpact, teachingScholarship, teachingBreadth, teachingInitiatives,
  mediaThemes, commentary, researchPress, appointments, education, skills, cvFile,
} from './data.js'

/* ---------- Animated background ---------- */
function ParticleField() {
  const ref = useRef(null)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf, w, h, pts = []
    const mouse = { x: -999, y: -999 }
    function resize() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      const count = Math.min(90, Math.floor(w / 16))
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      }))
    }
    function tick() {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        const dx = p.x - mouse.x, dy = p.y - mouse.y
        const d = Math.hypot(dx, dy)
        if (d < 130) { p.x += dx / d * 1.4; p.y += dy / d * 1.4 }
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            ctx.strokeStyle = `rgba(255,138,66,${(1 - d / 130) * 0.18})`
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = 'rgba(255,255,255,0.45)'
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2); ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }
    resize()
    if (!reduce) tick()
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onMove) }
  }, [])
  return <div className="bg-field"><canvas ref={ref} /></div>
}

function Blobs() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -260])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 320])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -180])
  return (
    <>
      <motion.div className="blob b1" style={{ top: '-8%', left: '-6%', y: y1 }} />
      <motion.div className="blob b2" style={{ top: '38%', right: '-10%', y: y2 }} />
      <motion.div className="blob b3" style={{ top: '78%', left: '8%', y: y3 }} />
      <div className="grain" />
    </>
  )
}

/* ---------- Reveal helper ---------- */
function Reveal({ children, delay = 0, y = 28, as = 'div', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const MO = motion[as] || motion.div
  return (
    <MO
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MO>
  )
}

/* ---------- Animated counter ---------- */
function Counter({ value, suffix = '', raw = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    if (raw) { setVal(value); return }
    const controls = animate(0, value, {
      duration: 1.6, ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, raw])
  return <span ref={ref}>{val}{suffix}</span>
}

/* ---------- Nav ---------- */
const NAV = [
  ['About', '#about'],
  ['Research', '#research'],
  ['Teaching', '#teaching'],
  ['Media', '#media'],
  ['CV', '#cv'],
  ['Contact', '#contact'],
]
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a className="brand" href="#top">Yen Teik <b>Lee</b></a>
      <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>≡</button>
      <div className={`links ${open ? 'open' : ''}`}>
        {NAV.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </div>
    </nav>
  )
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 160])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  return (
    <header className="hero wrap" id="top" ref={ref}>
      <motion.div style={{ y, opacity }}>
        <motion.div className="role"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {profile.title} · {profile.org}
        </motion.div>
        <h1>
          {'Yen Teik'.split('').map((c, i) => (
            <motion.span key={i} style={{ display: 'inline-block', whiteSpace: 'pre' }}
              initial={{ opacity: 0, y: 60, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.15 + i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              {c}
            </motion.span>
          ))}
          <br />
          <span className="grad-text">
            {'Lee'.split('').map((c, i) => (
              <motion.span key={i} style={{ display: 'inline-block' }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
                {c}
              </motion.span>
            ))}
          </span>
        </h1>
        <motion.p className="lede"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}>
          {profile.tagline}
        </motion.p>
        <motion.div className="chips"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.6 }}>
          {profile.interests.map(i => <span className="chip" key={i}>{i}</span>)}
        </motion.div>
        <motion.div className="cta-row"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}>
          <a className="btn btn-primary" href="#research">Explore the research →</a>
          <a className="btn btn-ghost" href={cvFile} target="_blank" rel="noopener">Download CV ↓</a>
        </motion.div>
      </motion.div>
      <div className="scroll-hint"><span>Scroll</span><span className="line" /></div>
    </header>
  )
}

/* ---------- Stats ---------- */
function Stats() {
  return (
    <section className="wrap" style={{ paddingTop: 0 }}>
      <Reveal>
        <div className="stats">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="num grad-text cool"><Counter value={s.value} suffix={s.suffix} raw={s.raw} /></div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

/* ---------- About / Bio ---------- */
function About() {
  return (
    <section id="about" className="wrap">
      <Reveal>
        <span className="eyebrow">00 — About</span>
        <h2 className="section-title">Who I <span className="grad-text">am</span></h2>
      </Reveal>
      <div className="bio">
        {bio.map((p, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <p className={i === 0 ? 'bio-lead' : ''}>{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------- Research (with interactive filtering) ---------- */
function Research() {
  // filter = { type: 'all' | 'focus' | 'venue', value: string }
  const [filter, setFilter] = useState({ type: 'all', value: null })
  const isActive = (type, value) => filter.type === type && filter.value === value
  const toggle = (type, value) =>
    setFilter(f => (f.type === type && f.value === value ? { type: 'all', value: null } : { type, value }))
  const clear = () => setFilter({ type: 'all', value: null })

  const pubs = publications.filter(p => {
    if (filter.type === 'all') return true
    if (filter.type === 'focus') return p.focus?.includes(filter.value)
    if (filter.type === 'venue') return p.venue === filter.value
    return true
  })
  const wps = workingPapers.filter(p => {
    if (filter.type === 'all') return true
    if (filter.type === 'focus') return p.focus?.includes(filter.value)
    return false // venue filter doesn't apply to working papers
  })
  const showWP = filter.type !== 'venue'

  const PaperLink = ({ url, children, className }) =>
    url ? (
      <a className={className} href={url} target="_blank" rel="noopener noreferrer">{children}</a>
    ) : (
      <span className={className}>{children}</span>
    )

  return (
    <section id="research" className="wrap">
      <Reveal>
        <span className="eyebrow">01 — Research</span>
        <h2 className="section-title">A research <span className="grad-text">philosophy</span></h2>
      </Reveal>
      <div className="grid-2">
        <div className="prose">
          {researchPhilosophy.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}><p>{p}</p></Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="card filter-card">
            <span className="eyebrow">Explore by focus area</span>
            <div className="filter-group">
              {focusAreas.map(f => (
                <button key={f} className={`fchip ${isActive('focus', f) ? 'on' : ''}`} onClick={() => toggle('focus', f)}>{f}</button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="list-head">
        <h3>Selected publications</h3>
        {filter.type !== 'all' && (
          <button className="clear-filter" onClick={clear}>
            Filtering: <b>{filter.value}</b> <span aria-hidden>×</span>
          </button>
        )}
      </div>
      <div className="pub-list">
        {pubs.map((p) => (
          <Reveal key={p.title} delay={0}>
            <article className="pub">
              <div className="yr">{p.year}</div>
              <div>
                <PaperLink url={p.url} className="pub-title-link"><h4>{p.title} {p.url && <span className="ext">↗</span>}</h4></PaperLink>
                <div className="auth">{p.authors}</div>
                <div className="venue">
                  <em>{p.venue}</em>{p.detail ? ` · ${p.detail}` : ''}
                </div>
                {p.focus && (
                  <div className="tags">
                    {p.focus.map(t => (
                      <button key={t} className={`tag tag-btn ${isActive('focus', t) ? 'on' : ''}`} onClick={() => toggle('focus', t)}>{t}</button>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
        {pubs.length === 0 && <p className="empty-note">No publications in this filter.</p>}
      </div>

      {showWP && (
        <>
          <Reveal><h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', margin: '70px 0 28px', fontWeight: 600 }}>Working papers</h3></Reveal>
          <div className="wp-grid">
            {wps.map((p) => (
              <Reveal key={p.title} delay={0}>
                <article className="card wp">
                  <PaperLink url={p.url} className="pub-title-link"><h4>{p.title} {p.url && <span className="ext">↗</span>}</h4></PaperLink>
                  <div className="auth">{p.authors}</div>
                  <div className="tags" style={{ marginTop: 10 }}>
                    {p.focus.map(t => (
                      <button key={t} className={`tag tag-btn ${isActive('focus', t) ? 'on' : ''}`} onClick={() => toggle('focus', t)}>{t}</button>
                    ))}
                  </div>
                  <span className="status">{p.status}</span>
                </article>
              </Reveal>
            ))}
            {wps.length === 0 && <p className="empty-note">No working papers in this filter.</p>}
          </div>
        </>
      )}
    </section>
  )
}

/* ---------- Teaching ---------- */
function Teaching() {
  return (
    <section id="teaching" className="wrap">
      <Reveal>
        <span className="eyebrow">02 — Teaching</span>
        <h2 className="section-title">Making finance <span className="grad-text cool">fluent</span></h2>
      </Reveal>
      <div className="grid-2">
        <div className="prose">
          {teachingPhilosophy.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}><p>{p}</p></Reveal>
          ))}
          <Reveal delay={0.2}>
            <ul className="init-list" style={{ marginTop: 28 }}>
              {teachingInitiatives.map((t, i) => (
                <li key={i}><span className="mk">›</span><span>{t}</span></li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="scholarship">
              <span className="eyebrow" style={{ display: 'inline-flex' }}>Teaching scholarship</span>
              {teachingScholarship.map((s, i) => (
                <a key={i} className="scholarship-item" href={s.url} target="_blank" rel="noopener noreferrer">
                  <span className="arrow">↗</span>
                  <span><b>{s.title}</b><span className="note">{s.note}</span></span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
        <div>
          <Reveal>
            <div className="impact-grid">
              {teachingImpact.map((t, i) => (
                <div className="card impact" key={i}>
                  <div className="big">{t.stat}</div>
                  <div className="desc">{t.detail}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="list-head" style={{ margin: '64px 0 22px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 600 }}>
            Courses taught across programmes
          </h3>
          <span className="nus-legend"><span className="dot" /> Taught at NUS</span>
        </div>
        <div className="breadth breadth-full">
          {teachingBreadth.map((b, i) => (
            <div className="breadth-row" key={i}>
              <div className="lvl">{b.level}</div>
              <div className="cs">{b.courses.map(c => (
                <span key={c.n} className={c.nus ? 'nus-course' : ''}>{c.n}</span>
              ))}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

/* ---------- Media ---------- */
function Media() {
  const [theme, setTheme] = useState(null)
  const toggle = (t) => setTheme(cur => (cur === t ? null : t))
  const items = theme ? commentary.filter(c => c.theme === theme) : commentary

  return (
    <section id="media" className="wrap">
      <Reveal>
        <span className="eyebrow">03 — Media & Commentary</span>
        <h2 className="section-title">Finance, <span className="grad-text">in public</span></h2>
        <p className="lede" style={{ maxWidth: 620, marginBottom: 36 }}>
          Selected commentary on the money questions people actually face — cashless payments and memecoins, bank outages and cyber insurance, and whether powerful politicians favour their friends.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="filter-group" style={{ marginBottom: 36 }}>
          <button className={`fchip ${theme === null ? 'on' : ''}`} onClick={() => setTheme(null)}>All topics</button>
          {mediaThemes.map(t => (
            <button key={t} className={`fchip ${theme === t ? 'on' : ''}`} onClick={() => toggle(t)}>{t}</button>
          ))}
        </div>
      </Reveal>

      <div className="media-grid">
        {items.map((c) => (
          <Reveal key={c.label} delay={0}>
            <a className="card commentary-card" href={c.url} target="_blank" rel="noopener noreferrer">
              <span className="c-outlet">{c.outlet}</span>
              <span className="c-title">{c.label} <span className="arrow">↗</span></span>
              <button
                className="c-theme"
                onClick={(e) => { e.preventDefault(); toggle(c.theme) }}
              >{c.theme}</button>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', margin: '70px 0 10px', fontWeight: 600 }}>
          Research in the press
        </h3>
        <p style={{ color: 'var(--text-dim)', maxWidth: 560, marginBottom: 28 }}>
          When the work itself makes the news.
        </p>
      </Reveal>
      <div className="press-grid">
        {researchPress.map((r) => (
          <Reveal key={r.label} delay={0}>
            <a className="card press-card" href={r.url} target="_blank" rel="noopener noreferrer">
              <span className="c-title">{r.label} <span className="arrow">↗</span></span>
              <span className="press-meta">{r.outlet}{r.year ? ` · ${r.year}` : ''}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------- CV / At a glance ---------- */
function CV() {
  return (
    <section id="cv" className="wrap">
      <Reveal>
        <span className="eyebrow">04 — Curriculum Vitae</span>
        <h2 className="section-title">At a <span className="grad-text cool">glance</span></h2>
      </Reveal>
      <Reveal delay={0.05}>
        <div style={{ marginBottom: 36 }}>
          <a className="btn btn-primary" href={cvFile} target="_blank" rel="noopener">Download full CV (PDF) ↓</a>
        </div>
      </Reveal>
      <div className="facts">
        <Reveal>
          <div className="fact-block card">
            <h5>Academic appointments</h5>
            {appointments.map((a, i) => (
              <div className="row" key={i}><span className="l">{a.role}</span><span className="r">{a.period}</span></div>
            ))}
          </div>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Reveal delay={0.06}>
            <div className="fact-block card">
              <h5>Education</h5>
              {education.map((e, i) => (
                <div className="row" key={i}><span className="l">{e.degree} · {e.school}</span><span className="r">{e.period}</span></div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="fact-block card">
              <h5>Skills & credentials</h5>
              <div className="row"><span className="l">Software</span><span className="r">{skills.software.join(', ')}</span></div>
              <div className="row"><span className="l">Languages</span><span className="r" style={{ whiteSpace: 'normal', textAlign: 'right' }}>{skills.languages.join(', ')}</span></div>
              <div className="row" style={{ borderBottom: 'none' }}><span className="l">Certification</span><span className="r" style={{ whiteSpace: 'normal', textAlign: 'right' }}>CAIA I & II</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------- Footer / Contact ---------- */
function Footer() {
  return (
    <footer id="contact" className="footer wrap">
      <Reveal>
        <span className="eyebrow">Get in touch</span>
        <h2>Let's <span className="grad-text">talk</span> finance.</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="contact-row">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn btn-ghost" href={profile.profileUrl} target="_blank" rel="noopener">NUS profile ↗</a>
          <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>{profile.phone}</span>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <p style={{ color: 'var(--text-faint)', maxWidth: 560, marginTop: 28, fontSize: '0.92rem' }}>{profile.address}</p>
      </Reveal>
      <div className="meta">
        <span>© {new Date().getFullYear()} Yen Teik Lee</span>
        <span>NUS Business School · Singapore</span>
      </div>
    </footer>
  )
}

/* ---------- App ---------- */
export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  return (
    <>
      <ParticleField />
      <Blobs />
      <motion.div className="progress" style={{ scaleX, width: '100%' }} />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Research />
        <Teaching />
        <Media />
        <CV />
      </main>
      <Footer />
    </>
  )
}
