import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Brain, Code2, Sparkles, Github, Linkedin, Mail, Phone, MapPin,
  ArrowRight, ExternalLink, Award, Briefcase, GraduationCap,
  MessageCircle, Send, Download, Cpu, Database, Globe, Zap,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Divyanshi Singh — AI/ML Engineer & Developer" },
      { name: "description", content: "Portfolio of Divyanshi Singh — B.Tech AI & ML student crafting intelligent systems with Python, ML, React and modern web tech." },
      { property: "og:title", content: "Divyanshi Singh — AI/ML Engineer & Developer" },
      { property: "og:description", content: "Explore projects, internships and certifications in Artificial Intelligence, Machine Learning and Full-stack development." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Portfolio,
});

const WHATSAPP_NUMBER = "919236016751";
const EMAIL = "myemail@gmail.com";

const skills = [
  { name: "Python", icon: Code2, level: 92 },
  { name: "Machine Learning", icon: Brain, level: 85 },
  { name: "Artificial Intelligence", icon: Cpu, level: 85 },
  { name: "HTML", icon: Globe, level: 95 },
  { name: "CSS", icon: Zap, level: 88 },
  { name: "JavaScript", icon: Code2, level: 86 },
  { name: "React", icon: Sparkles, level: 80 },
  { name: "Git", icon: Terminal, level: 82 },
  { name: "SQL", icon: Database, level: 78 },
];

const projects = [
  {
    title: "AI Chatbot Project",
    desc: "An intelligent conversational agent built with natural language processing to understand and respond to user queries in real time.",
    tags: ["Python", "NLP", "AI"],
  },
  {
    title: "Student Management System",
    desc: "A full-stack application to manage student records, attendance, and grades with a clean, intuitive dashboard.",
    tags: ["HTML", "CSS", "JavaScript", "SQL"],
  },
  {
    title: "Portfolio Website",
    desc: "A responsive, animated personal portfolio built with React, TanStack Start, and Tailwind CSS — the site you're viewing now.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Machine Learning Prediction Model",
    desc: "A supervised learning model trained on structured data to make accurate predictions and visualize results.",
    tags: ["Python", "scikit-learn", "Pandas"],
  },
];

const experience = [
  {
    role: "Machine Learning Intern",
    org: "TechVidvan / Internship Studio",
    period: "Jun 2025 — Aug 2025",
    points: [
      "Built supervised ML models for regression and classification on real datasets.",
      "Deployed a model-serving API and wrote model evaluation dashboards.",
    ],
  },
  {
    role: "AI Research Trainee",
    org: "AICTE Virtual Internship",
    period: "Jan 2025 — Mar 2025",
    points: [
      "Worked on TensorFlow image classification pipelines and data augmentation.",
      "Collaborated on documentation, notebooks and presentation of results.",
    ],
  },
];

const certifications = [
  { title: "Machine Learning Specialization", issuer: "Coursera · DeepLearning.AI" },
  { title: "Python for Data Science", issuer: "IBM" },
  { title: "AI Foundations", issuer: "AICTE · Microsoft" },
  { title: "Frontend Development", issuer: "Meta / freeCodeCamp" },
];

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Toaster position="top-center" />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
    ["Experience", "#experience"], ["Contact", "#contact"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">DS</span>
          <span className="hidden sm:block">Divyanshi</span>
        </a>
        <ul className="hidden gap-7 text-sm text-muted-foreground md:flex">
          {links.map(([l, h]) => (
            <li key={h}><a className="transition-colors hover:text-foreground" href={h}>{l}</a></li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:block">
          <Button size="sm" className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
            Hire me
          </Button>
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden animate-fade-up">
          <ul className="flex flex-col gap-3">
            {links.map(([l, h]) => (
              <li key={h}><a onClick={() => setOpen(false)} className="block py-1 text-sm" href={h}>{l}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-4 pt-28 pb-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-accent animate-glow-pulse" />
            Available for internships & collaborations
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Divyanshi</span>.
            <br />
            <span className="text-gradient">AI & ML</span> Student.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            B.Tech AI & ML Student passionate about AI, web development, and building innovative projects.
            I enjoy learning new technologies and solving real-world problems through technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 glow-primary">
                View Projects <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="rounded-full border-primary/40 bg-transparent hover:bg-primary/10">
                Get in Touch
              </Button>
            </a>
          </div>
          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a href="#" className="transition hover:text-foreground hover:-translate-y-0.5" aria-label="GitHub"><Github className="h-5 w-5" /></a>
            <a href="#" className="transition hover:text-foreground hover:-translate-y-0.5" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            <a href={`mailto:${EMAIL}`} className="transition hover:text-foreground hover:-translate-y-0.5" aria-label="Email"><Mail className="h-5 w-5" /></a>
            <span className="text-xs">/ Lucknow, India</span>
          </div>
        </div>
        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/40 to-accent/30 blur-2xl animate-glow-pulse" />
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 animate-float">
            <img src={heroImg} alt="Abstract AI neural network" width={1024} height={1280} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">B.Tech · AI & ML</p>
                  <p className="text-xs text-muted-foreground truncate">Engineering intelligent systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About me" title={<>Curious mind, <span className="text-gradient">engineering soul</span>.</>}>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="card-premium card-premium-hover rounded-2xl p-7 lg:col-span-2">
          <p className="text-base leading-relaxed text-muted-foreground">
            I'm <span className="text-foreground font-semibold">Divyanshi Singh</span>, a B.Tech student
            specializing in Artificial Intelligence and Machine Learning. I am passionate about AI,
            web development, and building innovative projects that make a real impact.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I enjoy learning new technologies and solving real-world problems through technology. My work
            combines solid programming fundamentals with creative problem-solving, and I constantly seek
            opportunities to grow as a developer and AI enthusiast.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            { k: "4", v: "Projects built" },
            { k: "9", v: "Core skills" },
            { k: "B.Tech", v: "AI & ML" },
          ].map((s) => (
            <div key={s.v} className="card-premium card-premium-hover rounded-2xl p-6">
              <p className="text-4xl font-bold text-gradient">{s.k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title={<>Skills & <span className="text-gradient">technologies</span></>}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s, i) => (
          <div key={s.name} className="card-premium card-premium-hover group rounded-2xl p-5 animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
            <div className="mb-4 flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 text-foreground transition group-hover:scale-110">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="text-xs text-muted-foreground">{s.level}%</span>
            </div>
            <h3 className="text-sm font-semibold">{s.name}</h3>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title={<>Projects I'm <span className="text-gradient">proud of</span></>}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.title} className="card-premium card-premium-hover group relative overflow-hidden rounded-2xl p-7 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/20 blur-3xl transition group-hover:bg-primary/40" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <Sparkles className="h-5 w-5" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
              </div>
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title={<>Internships & <span className="text-gradient">milestones</span></>}>
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />
        <div className="space-y-10">
          {experience.map((e, i) => (
            <div key={e.role} className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-background md:left-1/2" />
              <div className="card-premium card-premium-hover ml-10 rounded-2xl p-6 md:ml-0">
                <div className="flex items-center gap-2 text-xs text-accent">
                  <Briefcase className="h-3.5 w-3.5" /> {e.period}
                </div>
                <h3 className="mt-2 text-xl font-bold">{e.role}</h3>
                <p className="text-sm text-muted-foreground">{e.org}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{pt}</li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certs" eyebrow="Achievements" title={<>Certifications & <span className="text-gradient">courses</span></>}>
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <div key={c.title} className="card-premium card-premium-hover flex items-start gap-4 rounded-2xl p-5 animate-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <Award className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
    }, 600);
  };

  return (
    <Section id="contact" eyebrow="Get in touch" title={<>Let's build <span className="text-gradient">something</span></>}>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="card-premium rounded-2xl p-7">
          <h3 className="text-xl font-bold">Contact details</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Whether it's a collaboration, internship, or just a hello — my inbox is open.
          </p>
          <div className="mt-6 space-y-4">
            {[
              { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Phone, label: "+91 92360 16751", href: `tel:+${WHATSAPP_NUMBER}` },
              { icon: MapPin, label: "Lucknow, India", href: "#" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="group flex items-center gap-3 rounded-xl border border-border/50 p-3 transition hover:border-primary/50 hover:bg-primary/5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary/30 to-accent/20">
                  <c.icon className="h-4 w-4" />
                </div>
                <span className="min-w-0 truncate text-sm">{c.label}</span>
              </a>
            ))}
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Divyanshi! I came across your portfolio.")}`}
            target="_blank" rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[oklch(0.72_0.18_150)] px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <form onSubmit={submit} className="card-premium rounded-2xl p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Name</label>
              <Input maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="bg-secondary/50 border-border/60" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</label>
              <Input type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="bg-secondary/50 border-border/60" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
            <Textarea maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project or idea…" rows={6} className="bg-secondary/50 border-border/60" />
          </div>
          <Button type="submit" disabled={sending} size="lg" className="mt-5 w-full rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
            {sending ? "Sending…" : (<>Send message <Send className="ml-1 h-4 w-4" /></>)}
          </Button>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border/40 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Divyanshi Singh. Crafted with care.</p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="GitHub" className="transition hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn" className="transition hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="transition hover:text-foreground"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Divyanshi!")}`}
      target="_blank" rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.72_0.18_150)] text-primary-foreground shadow-[0_10px_40px_-5px_oklch(0.72_0.18_150/0.6)] transition hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.72_0.18_150)] animate-ping opacity-30" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
