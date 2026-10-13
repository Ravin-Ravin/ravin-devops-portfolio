import { useState } from 'react'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Download,
  Terminal, Cloud, Boxes, GitBranch, ShieldCheck, Workflow, Server,
  ExternalLink, CheckCircle2, Send, Code2, Cpu, Database, Activity
} from 'lucide-react'

const GITHUB_USERNAME = 'Ravin-Ravin'
const EMAIL = 'ravinravin7483@gmail.com'
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`
const LINKEDIN_URL = 'https://www.linkedin.com/in/ravin1104?utm_source=share_via&utm_content=profile&utm_medium=member_android'
const RESUME_PATH = '/Ravin-DevOps-Resume.pdf'
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

const skills = [
  { name: 'AWS', detail: 'EC2 · S3 · IAM · VPC · Auto Scaling', icon: Cloud },
  { name: 'Docker', detail: 'Docker Compose · Containerization', icon: Boxes },
  { name: 'Kubernetes', detail: 'Pods · Deployments · Services · Ingress', icon: Boxes },
  { name: 'Jenkins', detail: 'Pipeline-as-Code · Jenkinsfile · Webhooks', icon: Workflow },
  { name: 'Terraform', detail: 'Infrastructure as Code · State', icon: Code2 },
  { name: 'Linux & Bash', detail: 'Ubuntu · Shell scripts · Cron jobs', icon: Terminal },
  { name: 'Git & GitHub', detail: 'Version control · GitOps workflow', icon: GitBranch },
  { name: 'Ansible', detail: 'Configuration automation · YAML', icon: Server },
  { name: 'Monitoring', detail: 'Prometheus (basic) · Grafana · Logs', icon: Activity },
  { name: 'Java & Spring Boot', detail: 'Core Java · Advanced Java · APIs', icon: Code2 },
  { name: 'SQL & Databases', detail: 'Oracle SQL · MySQL', icon: Database },
  { name: 'Web Technologies', detail: 'HTML · CSS · JavaScript · PHP', icon: Cpu },
]

const projects = [
  {
    number: '01',
    title: 'Spring Boot & Java CI/CD Deployment',
    category: 'CI/CD · Containers · Orchestration',
    description: 'Automated an end-to-end delivery pipeline using GitHub, Jenkins, Docker, and Kubernetes on Ubuntu. Practiced Docker Compose for multi-service setups and Kubernetes Deployments, Services, and Ingress.',
    tags: ['Jenkins', 'Docker', 'Kubernetes', 'Ubuntu', 'GitHub'],
    icon: Workflow,
    repo: `https://github.com/${GITHUB_USERNAME}/springboot-project`,
    demo: '',
    status: 'Hands-on project',
  },
  {
    number: '02',
    title: 'Automated Web App Deployment on AWS',
    category: 'AWS · CI/CD · Infrastructure',
    description: 'Built a Jenkins deployment workflow triggered from GitHub, transferring build artifacts to an Nginx web directory. Practiced EC2, S3, IAM roles, SSH keys, security groups, and build notifications.',
    tags: ['AWS EC2', 'S3', 'Jenkins', 'Nginx', 'GitHub Webhooks'],
    icon: Cloud,
    repo: `https://github.com/${GITHUB_USERNAME}/DevOps-project`,
    demo: '',
    status: 'Hands-on project',
  },
  {
    number: '03',
    title: 'Campus Recruitment Management System',
    category: 'Full Stack · Database',
    description: 'Developed a multi-role campus recruitment platform for students, administrators, and hiring companies using PHP, HTML/CSS, and MySQL, with responsive UI and form authentication.',
    tags: ['PHP', 'HTML', 'CSS', 'MySQL', 'XAMPP/WAMP'],
    icon: Database,
    repo: `https://github.com/${GITHUB_USERNAME}`,
    demo: '',
    status: 'Project details to link',
  },
]

const focusAreas = [
  { icon: GitBranch, title: 'CI/CD Pipelines', text: 'Automating build, test, and delivery workflows.' },
  { icon: Boxes, title: 'Containerization', text: 'Packaging and running apps with Docker and Kubernetes.' },
  { icon: Cloud, title: 'Cloud Infrastructure', text: 'Learning and building on AWS cloud services.' },
  { icon: ShieldCheck, title: 'Reliable Delivery', text: 'Using repeatable workflows and practical troubleshooting.' },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [formState, setFormState] = useState('idle')
  const [formError, setFormError] = useState('')
  const [emailDraft, setEmailDraft] = useState('')
  const [mailAppDraft, setMailAppDraft] = useState('')

  const nav = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Experience', '#experience'],
    ['Projects', '#projects'],
    ['Education', '#education'],
    ['Contact', '#contact'],
  ]

  async function handleContact(event) {
    event.preventDefault()
    setFormError('')
    const form = event.currentTarget
    const data = new FormData(form)
    if (!FORMSPREE_ENDPOINT) {
      const subject = String(data.get('subject') || '')
      const body = [
        `Name: ${data.get('name') || ''}`,
        `Email: ${data.get('email') || ''}`,
        '',
        String(data.get('message') || ''),
      ].join('\n')
      const params = new URLSearchParams({ view: 'cm', fs: '1', to: EMAIL, su: subject, body })
      const draftUrl = `https://mail.google.com/mail/?${params.toString()}`
      const mailAppParams = new URLSearchParams({ subject, body })
      setEmailDraft(draftUrl)
      setMailAppDraft(`mailto:${EMAIL}?${mailAppParams.toString()}`)
      setFormState('email')
      // A Gmail compose page works even when no local mail app is configured.
      window.location.href = draftUrl
      return
    }
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Submission failed')
      setFormState('success')
      form.reset()
    } catch {
      setFormError('Message could not be sent. Please try again or email me directly.')
      setFormState('error')
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-slate-100">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav-shell page-wrap" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="Ravin home">
            <span className="brand-mark"><Terminal size={19} /></span>
            <span>ravin<span className="text-sky-400">.</span></span>
          </a>
          <div className="desktop-nav">
            {nav.map(([label, href]) => <a key={label} href={href} className="nav-link">{label}</a>)}
            <a className="button button-small button-outline" href={RESUME_PATH} download>
              Resume <Download size={14} />
            </a>
          </div>
          <button className="mobile-menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {mobileOpen && (
          <div className="mobile-nav page-wrap">
            {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMobileOpen(false)}>{label}</a>)}
            <a href={RESUME_PATH} download onClick={() => setMobileOpen(false)}>Download resume</a>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero page-wrap">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> OPEN TO DEVOPS & CLOUD OPPORTUNITIES</div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Ravin<span className="gradient-text">.</span></h1>
            <h2>DevOps Engineer <span className="muted-separator">/</span> Cloud Enthusiast</h2>
            <p className="hero-description">
              I build, automate, and deploy reliable applications with cloud infrastructure,
              CI/CD pipelines, and container technologies.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a>
              <a className="button button-outline" href={RESUME_PATH} download>Download CV <Download size={16} /></a>
            </div>
            <div className="social-links">
              <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
              <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer"><Mail size={17} /> Email <ArrowUpRight size={13} /></a>
            </div>
          </div>

          <div className="terminal-card" aria-label="Terminal-style skills summary">
            <div className="terminal-top">
              <div className="window-dots"><span /><span /><span /></div>
              <span className="terminal-title">ravin@devops:~</span>
              <span className="terminal-live"><span className="status-dot" /> ONLINE</span>
            </div>
            <div className="terminal-body">
              <p><span className="prompt">$</span> whoami</p>
              <p className="terminal-output">Ravin — Junior DevOps Engineer</p>
              <p><span className="prompt">$</span> cat skills.txt</p>
              <div className="terminal-code">
                <span>AWS · Linux · Git</span>
                <span>Docker · Kubernetes</span>
                <span>Jenkins · Terraform</span>
                <span>Ansible · CI/CD</span>
              </div>
              <p><span className="prompt">$</span> ./ship-it.sh <span className="cursor" /></p>
              <div className="terminal-success"><CheckCircle2 size={15} /> Ready to automate and deploy.</div>
            </div>
            <div className="terminal-footer">
              <span><Activity size={13} /> BUILD · AUTOMATE · DEPLOY</span>
              <span className="terminal-version">v1.0.0</span>
            </div>
          </div>
          <a href="#about" className="scroll-cue"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
        </section>

        <section id="about" className="section page-wrap">
          <SectionHeading eyebrow="01 / ABOUT ME" title="Turning learning into delivery." description="A practical, project-first approach to cloud and automation." />
          <div className="about-grid">
            <div className="about-copy panel">
              <p className="large-copy">I'm a BCA graduate from <span className="text-slate-100">Williams International College, Bengaluru</span> (CGPA 7.88/10), with certified Java Full Stack and DevOps training from JSpiders, Hebbal.</p>
              <p className="body-copy">I'm currently a DevOps Trainee at <span className="text-slate-100">Myventis Technologies Pvt. Ltd.</span> (Jul 2026 – Present), gaining exposure to CI/CD, cloud infrastructure, containerization, Linux, and deployment workflows.</p>
              <p className="body-copy">My training and projects cover AWS, Jenkins, Docker, Kubernetes, Terraform, Ansible, GitHub workflows, Java, Spring Boot, and SQL. I'm keen to contribute to reliable deployments and keep growing in DevOps and Cloud Engineering.</p>
              <div className="about-tags"><span>BCA · CGPA 7.88/10</span><span>JSpiders · 2025</span><span>DevOps Trainee · 2026</span></div>
            </div>
            <div className="focus-grid">
              {focusAreas.map(({ icon: Icon, title, text }) => (
                <div className="focus-card" key={title}>
                  <div className="focus-icon"><Icon size={19} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section page-wrap">
          <SectionHeading eyebrow="02 / EXPERIENCE" title="Learning in a real team." description="Professional experience listed in my current resume." />
          <article className="experience-card panel">
            <div className="experience-marker"><span className="status-dot" /></div>
            <div className="experience-main">
              <div className="experience-heading">
                <div><h3>DevOps Trainee</h3><p>Myventis Technologies Pvt. Ltd. · Bengaluru, India</p></div>
                <span className="experience-date">Jul 2026 – Present</span>
              </div>
              <ul>
                <li>Practical exposure to CI/CD, cloud infrastructure, containerization, Linux, and deployment workflows.</li>
                <li>Applying Git, GitHub, Jenkins, Docker, Kubernetes, AWS, Terraform, and Linux in hands-on development and deployment activities.</li>
                <li>Supporting automated build, deployment, and environment-management practices while learning industry-standard DevOps workflows.</li>
              </ul>
            </div>
          </article>
        </section>

        <section id="skills" className="section page-wrap">
          <SectionHeading eyebrow="03 / TECH STACK" title="Tools I work with." description="Core technologies I've studied and practiced through hands-on labs and projects." />
          <div className="skills-grid">
            {skills.map(({ name, detail, icon: Icon }, index) => (
              <article className="skill-card" key={name}>
                <div className="skill-card-top"><span className="skill-icon"><Icon size={21} /></span><span className="skill-index">0{index + 1}</span></div>
                <h3>{name}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
          <div className="learning-strip"><Cpu size={18} /><span><strong>Currently growing:</strong> cloud architecture, observability, security practices, and production-ready deployments.</span></div>
        </section>

        <section id="projects" className="section page-wrap">
          <div className="project-heading-row">
            <SectionHeading eyebrow="04 / SELECTED WORK" title="Projects in practice." description="Projects listed in my resume, with repository links to be verified and updated where needed." />
            <a className="text-link desktop-only" href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer">View all repositories <ArrowUpRight size={16} /></a>
          </div>
          <div className="projects-grid">
            {projects.map(({ number, title, category, description, tags, icon: Icon, repo, demo, status }) => (
              <article className="project-card" key={number}>
                <div className="project-card-top">
                  <div className="project-icon"><Icon size={22} /></div>
                  <span className="project-number">{number}</span>
                </div>
                <p className="project-category">{category}</p>
                <h3>{title}</h3>
                <p className="project-description">{description}</p>
                <div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <a href={repo} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a>
                  {demo ? <a href={demo} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Live demo</a> : <span className="demo-placeholder">Add live demo URL</span>}
                </div>
                <div className="project-status"><span className="status-dot" /> {status}</div>
              </article>
            ))}
          </div>
          <p className="project-note">Live demos are placeholders until you add deployed project URLs. Replace any repository links that don't match your final GitHub repositories.</p>
        </section>

        <section id="education" className="section page-wrap">
          <SectionHeading eyebrow="05 / EDUCATION & TRAINING" title="Strong foundations. Practical learning." description="Education and professional training from my resume." />
          <div className="education-grid">
            <article className="education-card panel">
              <span className="education-label">EDUCATION</span>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>Williams International College · Bengaluru, India</p>
              <strong>CGPA 7.88 / 10</strong>
            </article>
            <article className="education-card panel">
              <span className="education-label">CERTIFICATION & TRAINING</span>
              <h3>Java Full Stack Development with DevOps</h3>
              <p>JSpiders · Hebbal, Bengaluru · Completed 2025</p>
              <strong>Java · Spring Boot · SQL · AWS · CI/CD toolchain</strong>
            </article>
            <article className="education-card panel">
              <span className="education-label">HIGHER SECONDARY</span>
              <h3>12th Std / 2nd PU</h3>
              <p>Mount Park Hr. Sec. School · Tamil Nadu, India</p>
              <strong>CGPA 7.01 / 10 · 70.01%</strong>
            </article>
          </div>
        </section>

        <section className="section page-wrap">
          <div className="pipeline-panel">
            <div>
              <p className="eyebrow">DELIVERY MINDSET</p>
              <h2>From commit to cloud.</h2>
              <p className="body-copy">My goal is to make software delivery repeatable, observable, and easier to maintain.</p>
            </div>
            <div className="pipeline-steps">
              {[
                { icon: GitBranch, label: 'Code', sub: 'Git' },
                { icon: Workflow, label: 'Build', sub: 'CI/CD' },
                { icon: Boxes, label: 'Package', sub: 'Docker' },
                { icon: Cloud, label: 'Deploy', sub: 'Cloud' },
              ].map(({ icon: Icon, label, sub }, i) => (
                <div className="pipeline-step" key={label}>
                  <div className="pipeline-icon"><Icon size={20} /></div>
                  <strong>{label}</strong><span>{sub}</span>
                  {i < 3 && <div className="pipeline-connector" />}
                </div>
              ))}
            </div>
            <div className="ci-badge"><span className="status-dot" /> CI/CD PIPELINE <strong>PROJECT-BASED</strong></div>
          </div>
          <p className="badge-note">The badge above describes the portfolio theme, not a live build status. Add a real GitHub Actions or Jenkins status badge after configuring a workflow.</p>
        </section>

        <section id="contact" className="section page-wrap contact-section">
          <SectionHeading eyebrow="05 / GET IN TOUCH" title="Let's build something reliable." description="Have a junior DevOps opportunity, project idea, or question? Send me a message." />
          <div className="contact-grid">
            <div className="contact-copy">
              <h3>Open to opportunities.</h3>
              <p className="body-copy">I'm interested in entry-level DevOps, Cloud, and Infrastructure roles where I can learn from a team and contribute to automation and deployment work.</p>
              <a className="contact-method" href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer"><span className="contact-method-icon"><Mail size={18} /></span><span><small>Email</small><strong>{EMAIL}</strong></span><ArrowUpRight size={16} /></a>
              <a className="contact-method" href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer"><span className="contact-method-icon"><Github size={18} /></span><span><small>GitHub</small><strong>github.com/{GITHUB_USERNAME}</strong></span><ArrowUpRight size={16} /></a>
              <a className="contact-method" href={LINKEDIN_URL} target="_blank" rel="noreferrer"><span className="contact-method-icon"><Linkedin size={18} /></span><span><small>LinkedIn</small><strong>LinkedIn.in</strong></span><ArrowUpRight size={16} /></a>
            </div>
            <form className="contact-form panel" onSubmit={handleContact}>
              <div className="form-row">
                <label>Your name<input name="name" placeholder="" required /></label>
                <label>Email address<input type="email" name="email" placeholder="" required /></label>
              </div>
              <label>Subject<input name="subject" placeholder="" required /></label>
              <label>Message<textarea name="message" rows="5" placeholder="" required /></label>
              {formState === 'success' && <p className="form-success"><CheckCircle2 size={16} /> Message sent successfully.</p>}
              {formState === 'email' && (
                <div className="form-hint">
                  <strong>Message not sent yet.</strong> Gmail should open with your details filled in. You must press Send in Gmail to send the message.
                  <div className="email-fallback-actions">
                    <a href={emailDraft} target="_blank" rel="noreferrer">Open Gmail draft again <ArrowUpRight size={14} /></a>
                    <a href={mailAppDraft}>Try your default email app <ArrowUpRight size={14} /></a>
                    <span>If neither opens, email {EMAIL} directly.</span>
                  </div>
                </div>
              )}
              {formState === 'error' && <p className="form-error">{formError}</p>}
              <button className="button button-primary form-submit" type="submit">Send message <Send size={16} /></button>
              <p className="form-footnote">Messages submit through Formspree when configured; otherwise Gmail opens with the message ready to send.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-wrap footer-inner">
          <a href="#home" className="brand"><span className="brand-mark"><Terminal size={17} /></span><span>Ravin<span className="text-sky-400">.</span></span></a>
          <p>Developed by Ravin © 2026
DevOps Engineer | Cloud & Automation <span>© {new Date().getFullYear()} Ravin.</span></p>
          <a href="#home" className="back-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App