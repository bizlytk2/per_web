import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform, useInView, animate } from 'framer-motion'
import {
  profile, headshot, stats, focusAreas, publications, workingPapers,
  teachingScholarship, teachingBreadth,
  commentary, researchPress, mediaThemes,
  refereeing, skills, cvFile,
} from './data.js'
import { L, tr } from './i18n.js'

/* ---------- Language context ---------- */
const LangCtx = React.createContext({ lang: 'en', t: L.en, setLang: () => {}, theme: 'light', setTheme: () => {} })
const useApp = () => React.useContext(LangCtx)

/* ---------- Animated background ---------- */
function ParticleField() {
  const ref = useRef(null)
  const { theme } = useApp()
  useEffect(() => {
    if (theme !== 'dark') return
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
  }, [theme])
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
    <MO ref={ref} className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
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
    const controls = animate(0, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setVal(Math.round(v)) })
    return () => controls.stop()
  }, [inView, value, raw])
  return <span ref={ref}>{val}{suffix}</span>
}

/* ---------- Section title helper ---------- */
function Title({ part, cool }) {
  return <h2 className="section-title">{part.a}<span className={cool ? 'grad-text cool' : 'grad-text'}>{part.b}</span></h2>
}

/* ---------- Nav ---------- */
const NAV_KEYS = [
  ['about', '#about'], ['teaching', '#teaching'], ['research', '#research'],
  ['media', '#media'], ['service', '#service'], ['cv', '#cv'], ['contact', '#contact'],
]
function Nav() {
  const { t, lang, setLang, theme, setTheme } = useApp()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const ids = NAV_KEYS.map(([, href]) => href.slice(1))
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a className="brand" href="#top">Yen Teik <b>Lee</b></a>
      <div className="nav-right">
        <button className="theme-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle light/dark theme">
          {theme === 'dark' ? '☀' : '☾'}
        </button>
        <button className="lang-btn" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} aria-label="Switch language">
          {t.langToggle}
        </button>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>≡</button>
        <div className={`links ${open ? 'open' : ''}`}>
          {NAV_KEYS.map(([key, href]) => (
            <a key={href} href={href} className={active === href.slice(1) ? 'active' : ''} onClick={() => setOpen(false)}>{t.nav[key]}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

/* ---------- Hero ---------- */
function Hero() {
  const { t } = useApp()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 160])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  return (
    <header className="hero wrap" id="top" ref={ref}>
      <motion.div style={{ y, opacity }}>
        <motion.div className="role" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {t.profile.title} · {t.profile.org}
          <span className="role-lead">{t.profile.roleLine}</span>
        </motion.div>
        <h1>
          {'Yen Teik'.split('').map((c, i) => (
            <motion.span key={i} style={{ display: 'inline-block', whiteSpace: 'pre' }}
              initial={{ opacity: 0, y: 60, rotate: 6 }} animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.15 + i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>{c}</motion.span>
          ))}
          <br />
          <span className="grad-text">
            {'Lee'.split('').map((c, i) => (
              <motion.span key={i} style={{ display: 'inline-block' }}
                initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>{c}</motion.span>
            ))}
          </span>
        </h1>
        <motion.p className="lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}>
          {t.profile.tagline}
        </motion.p>
        <motion.div className="chips" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.6 }}>
          {t.interests.map(i => <span className="chip" key={i}>{i}</span>)}
        </motion.div>
        <motion.div className="cta-row" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}>
          <a className="btn btn-primary" href="#research">{t.hero.explore}</a>
          <a className="btn btn-ghost" href={cvFile} target="_blank" rel="noopener">{t.hero.downloadCv}</a>
        </motion.div>
      </motion.div>
      <div className="scroll-hint"><span>{t.hero.scroll}</span><span className="line" /></div>
    </header>
  )
}

/* ---------- Stats ---------- */
function Stats() {
  const { t } = useApp()
  return (
    <section className="wrap" style={{ paddingTop: 0 }}>
      <Reveal>
        <div className="stats">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="num"><Counter value={s.value} suffix={s.suffix} raw={s.raw} /></div>
              <div className="lbl">{t.statLabels[i]}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

/* ---------- Headshot ---------- */
function Headshot() {
  const [ok, setOk] = useState(true)
  const src = `${import.meta.env.BASE_URL}${headshot}`
  return (
    <div className="photo-frame">
      {ok ? <img src={src} alt="Yen Teik Lee" onError={() => setOk(false)} />
          : <div className="photo-fallback"><span>YTL</span></div>}
    </div>
  )
}

/* ---------- About ---------- */
function About() {
  const { t } = useApp()
  return (
    <section id="about" className="wrap">
      <Reveal>
        <span className="eyebrow">01 — {t.eyebrow.about}</span>
        <Title part={t.titles.about} />
      </Reveal>
      <div className="about-grid">
        <Reveal><Headshot /></Reveal>
        <div className="bio">
          {t.bio.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}><p className={i === 0 ? 'bio-lead' : ''}>{p}</p></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Teaching ---------- */
function Teaching() {
  const { t, lang } = useApp()
  return (
    <section id="teaching" className="wrap">
      <Reveal>
        <span className="eyebrow">02 — {t.eyebrow.teaching}</span>
        <Title part={t.titles.teaching} cool />
      </Reveal>
      <div className="grid-2">
        <div className="prose">
          {t.teachingPhilosophy.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}><p>{p}</p></Reveal>
          ))}
          <Reveal delay={0.2}>
            <ul className="init-list" style={{ marginTop: 28 }}>
              {t.teachingInitiatives.map((it, i) => (
                <li key={i}><span className="mk">›</span><span>{it}</span></li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="scholarship">
              <span className="eyebrow" style={{ display: 'inline-flex' }}>{t.teachingScholarshipLabel}</span>
              {teachingScholarship.map((s, i) => (
                <a key={i} className="scholarship-item" href={s.url} target="_blank" rel="noopener noreferrer">
                  <span className="arrow">↗</span>
                  <span><b>{t.teachingScholarship[i]?.title || s.title}</b><span className="note">{t.teachingScholarship[i]?.note || s.note}</span></span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
        <div>
          <Reveal>
            <div className="impact-grid">
              {t.teachingImpact.map((it, i) => (
                <div className="card impact" key={i}>
                  <div className="big">{it.stat}</div>
                  <div className="desc">{it.detail}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="list-head" style={{ margin: '64px 0 22px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 600 }}>{t.coursesTitle}</h3>
          <span className="nus-legend">
            <span className="lg"><span className="swatch built" /> {t.legend.designed}</span>
            <span className="lg"><span className="swatch nus" /> {t.legend.taught}</span>
          </span>
        </div>
        <div className="breadth breadth-full">
          {teachingBreadth.map((b, i) => (
            <div className="breadth-row" key={i}>
              <div className="lvl">{tr(t.levels, b.level)}</div>
              <div className="cs">{b.courses.map(c => (
                <span key={c.n} className={c.built ? 'built-course' : (c.nus ? 'nus-course' : '')}>
                  {lang === 'zh' && c.zh ? c.zh : c.n}
                </span>
              ))}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {t.testimonials.length > 0 && (
        <>
          <Reveal><h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', margin: '64px 0 22px', fontWeight: 600 }}>{t.inTheirWords}</h3></Reveal>
          <Reveal>
            <div className="quote-grid">
              {t.testimonials.map((it, i) => (
                <figure className="quote-card" key={i}>
                  <blockquote>“{it.quote}”</blockquote>
                  <figcaption>{it.name}{it.role ? <span> · {it.role}</span> : null}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </>
      )}
    </section>
  )
}

/* ---------- Research (with interactive filtering) ---------- */
function Research() {
  const { t } = useApp()
  const [filter, setFilter] = useState({ type: 'all', value: null })
  const isActive = (type, value) => filter.type === type && filter.value === value
  const toggle = (type, value) =>
    setFilter(f => (f.type === type && f.value === value ? { type: 'all', value: null } : { type, value }))
  const clear = () => setFilter({ type: 'all', value: null })

  const pubs = publications.filter(p => filter.type === 'all' || (filter.type === 'focus' && p.focus?.includes(filter.value)))
  const wps = workingPapers.filter(p => filter.type === 'all' || (filter.type === 'focus' && p.focus?.includes(filter.value)))

  const PaperLink = ({ url, children, className }) =>
    url ? <a className={className} href={url} target="_blank" rel="noopener noreferrer">{children}</a>
        : <span className={className}>{children}</span>

  return (
    <section id="research" className="wrap">
      <Reveal>
        <span className="eyebrow">03 — {t.eyebrow.research}</span>
        <Title part={t.titles.research} />
      </Reveal>
      <div className="grid-2">
        <div className="prose">
          {t.researchPhilosophy.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}><p>{p}</p></Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="card filter-card">
            <span className="eyebrow">{t.research.exploreFocus}</span>
            <div className="filter-group">
              {focusAreas.map(f => (
                <button key={f} className={`fchip ${isActive('focus', f) ? 'on' : ''}`} onClick={() => toggle('focus', f)}>{tr(t.focus, f)}</button>
              ))}
            </div>
            <a className="scholar-link" href={profile.scholar} target="_blank" rel="noopener noreferrer">{t.research.scholar}</a>
          </div>
        </Reveal>
      </div>

      <div className="list-head">
        <h3>{t.research.selectedPubs}</h3>
        {filter.type !== 'all' && (
          <button className="clear-filter" onClick={clear}>
            {t.research.filtering} <b>{tr(t.focus, filter.value)}</b> <span aria-hidden>×</span>
          </button>
        )}
      </div>
      <Reveal>
        <div className="pub-list">
          {pubs.map((p) => (
            <article className="pub" key={p.title}>
              <div className="yr">{p.year}</div>
              <div>
                <PaperLink url={p.url} className="pub-title-link"><h4>{p.title} {p.url && <span className="ext">↗</span>}</h4></PaperLink>
                <div className="auth">{p.authors}</div>
                <div className="venue"><em>{p.venue}</em>{p.detail ? ` · ${p.detail}` : ''}</div>
                {p.focus && (
                  <div className="tags">
                    {p.focus.map(tg => (
                      <button key={tg} className={`tag tag-btn ${isActive('focus', tg) ? 'on' : ''}`} onClick={() => toggle('focus', tg)}>{tr(t.focus, tg)}</button>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
          {pubs.length === 0 && <p className="empty-note">{t.research.noPubs}</p>}
        </div>
      </Reveal>

      <Reveal><h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', margin: '70px 0 28px', fontWeight: 600 }}>{t.research.workingPapers}</h3></Reveal>
      <Reveal>
        <div className="wp-grid">
          {wps.map((p) => (
            <article className="card wp" key={p.title}>
              <PaperLink url={p.url} className="pub-title-link"><h4>{p.title} {p.url && <span className="ext">↗</span>}</h4></PaperLink>
              <div className="auth">{p.authors}</div>
              <div className="tags" style={{ marginTop: 10 }}>
                {p.focus.map(tg => (
                  <button key={tg} className={`tag tag-btn ${isActive('focus', tg) ? 'on' : ''}`} onClick={() => toggle('focus', tg)}>{tr(t.focus, tg)}</button>
                ))}
              </div>
              <span className="status">{tr(t.wpStatus, p.status)}</span>
            </article>
          ))}
          {wps.length === 0 && <p className="empty-note">{t.research.noWps}</p>}
        </div>
      </Reveal>
    </section>
  )
}

/* ---------- Media ---------- */
function Media() {
  const { t } = useApp()
  const [theme, setTheme] = useState(null)
  const toggle = (x) => setTheme(cur => (cur === x ? null : x))
  const items = theme ? commentary.filter(c => c.theme === theme) : commentary

  return (
    <section id="media" className="wrap">
      <Reveal>
        <span className="eyebrow">04 — {t.eyebrow.media}</span>
        <Title part={t.titles.media} />
        <p className="lede" style={{ maxWidth: 620, marginBottom: 36 }}>{t.media.intro}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="filter-group" style={{ marginBottom: 36 }}>
          <button className={`fchip ${theme === null ? 'on' : ''}`} onClick={() => setTheme(null)}>{t.media.allTopics}</button>
          {mediaThemes.map(x => (
            <button key={x} className={`fchip ${theme === x ? 'on' : ''}`} onClick={() => toggle(x)}>{tr(t.themes, x)}</button>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="media-grid">
          {items.map((c) => (
            <a className="card commentary-card" key={c.label} href={c.url} target="_blank" rel="noopener noreferrer">
              <span className="c-outlet">{c.outlet}</span>
              <span className="c-title">{c.label} <span className="arrow">↗</span></span>
              <button className="c-theme" onClick={(e) => { e.preventDefault(); toggle(c.theme) }}>{tr(t.themes, c.theme)}</button>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', margin: '70px 0 10px', fontWeight: 600 }}>{t.media.researchInPress}</h3>
        <p style={{ color: 'var(--text-dim)', maxWidth: 560, marginBottom: 28 }}>{t.media.pressSub}</p>
      </Reveal>
      <Reveal>
        <div className="press-grid">
          {researchPress.map((r) => (
            <a className="card press-card" key={r.label} href={r.url} target="_blank" rel="noopener noreferrer">
              <span className="c-title">{r.label} <span className="arrow">↗</span></span>
              <span className="press-meta">{r.outlet}{r.year ? ` · ${r.year}` : ''}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

/* ---------- Leadership & Service ---------- */
function LeadershipService() {
  const { t } = useApp()
  return (
    <section id="service" className="wrap">
      <Reveal>
        <span className="eyebrow">05 — {t.eyebrow.service}</span>
        <Title part={t.titles.service} cool />
      </Reveal>
      <div className="grid-2">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Reveal>
            <div className="fact-block card">
              <h5>{t.service.leadership}</h5>
              {t.leadershipRoles.map((a, i) => (
                <div className="row" key={i}><span className="l">{a.role}</span><span className="r">{a.period}</span></div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="fact-block card">
              <h5>{t.service.committees}</h5>
              {t.serviceRoles.map((a, i) => (
                <div className="row" key={i}><span className="l">{a.role}</span><span className="r">{a.period}</span></div>
              ))}
              <div className="row" style={{ borderBottom: 'none' }}>
                <span className="l">{t.service.referee}</span>
                <span className="r" style={{ whiteSpace: 'normal', textAlign: 'right' }}>{refereeing.join(', ')}</span>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="fact-block card">
            <h5>{t.service.grants}</h5>
            {t.grants.map((g, i) => (
              <div className="grant-row" key={i}>
                <div className="grant-top">
                  <span className="grant-amt">{g.amount}</span>
                  <span className="grant-role">{tr(t.grantRole, g.role)} · {g.year}</span>
                </div>
                <div className="grant-title">{g.title}</div>
                <div className="grant-funder">{g.funder}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- CV ---------- */
function CV() {
  const { t } = useApp()
  return (
    <section id="cv" className="wrap">
      <Reveal>
        <span className="eyebrow">06 — {t.eyebrow.cv}</span>
        <Title part={t.titles.cv} cool />
      </Reveal>
      <Reveal delay={0.05}>
        <div style={{ marginBottom: 36 }}>
          <a className="btn btn-primary" href={cvFile} target="_blank" rel="noopener">{t.cv.download}</a>
        </div>
      </Reveal>
      <div className="facts">
        <Reveal>
          <div className="fact-block card">
            <h5>{t.cv.appointments}</h5>
            {t.appointments.map((a, i) => (
              <div className="row" key={i}><span className="l">{a.role}</span><span className="r">{a.period}</span></div>
            ))}
          </div>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Reveal delay={0.06}>
            <div className="fact-block card">
              <h5>{t.cv.education}</h5>
              {t.education.map((e, i) => (
                <div className="row" key={i}><span className="l">{e.degree} · {e.school}</span><span className="r">{e.period}</span></div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="fact-block card">
              <h5>{t.cv.skills}</h5>
              <div className="row"><span className="l">{t.cv.software}</span><span className="r">{skills.software.join(', ')}</span></div>
              <div className="row"><span className="l">{t.cv.languages}</span><span className="r" style={{ whiteSpace: 'normal', textAlign: 'right' }}>{t.languages.join(', ')}</span></div>
              <div className="row" style={{ borderBottom: 'none' }}><span className="l">{t.cv.certification}</span><span className="r" style={{ whiteSpace: 'normal', textAlign: 'right' }}>CAIA I & II</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------- Footer ---------- */
function Footer() {
  const { t } = useApp()
  return (
    <footer id="contact" className="footer wrap">
      <Reveal>
        <span className="eyebrow">{t.eyebrow.contact}</span>
        <h2>{t.titles.footer.a}<span className="grad-text">{t.titles.footer.b}</span>{t.titles.footer.c}</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="contact-row">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn btn-ghost" href={profile.profileUrl} target="_blank" rel="noopener">{t.footer.nusProfile}</a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener">{t.footer.linkedin}</a>
          <a className="btn btn-ghost" href={profile.scholar} target="_blank" rel="noopener">{t.footer.scholar}</a>
          <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>{profile.phone}</span>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <p style={{ color: 'var(--text-faint)', maxWidth: 560, marginTop: 28, fontSize: '0.92rem' }}>{t.profile.address}</p>
      </Reveal>
      <div className="meta">
        <span>© {new Date().getFullYear()} Yen Teik Lee</span>
        <span>{t.footer.metaRight}</span>
      </div>
    </footer>
  )
}

/* ---------- Back to top ---------- */
function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button className={`to-top ${show ? 'show' : ''}`} aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
  )
}

/* ---------- App ---------- */
export default function App() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lang') || 'en' } catch { return 'en' }
  })
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'light' } catch { return 'light' }
  })
  useEffect(() => {
    try { localStorage.setItem('lang', lang) } catch {}
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en'
  }, [lang])
  useEffect(() => {
    try { localStorage.setItem('theme', theme) } catch {}
    document.documentElement.dataset.theme = theme
  }, [theme])
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  const t = L[lang]
  return (
    <LangCtx.Provider value={{ lang, t, setLang, theme, setTheme }}>
      <ParticleField />
      <Blobs />
      <motion.div className="progress" style={{ scaleX, width: '100%' }} />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Teaching />
        <Research />
        <Media />
        <LeadershipService />
        <CV />
      </main>
      <Footer />
      <BackToTop />
    </LangCtx.Provider>
  )
}
