import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Download,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  Smartphone,
  Zap,
  Shield,
  Layout,
  Code2,
  Database,
  Globe,
  Cpu,
} from "lucide-react";

// --- Types ---
interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  apkUrl: string;
  features: string[];
  tech: string[];
}

interface Skill {
  category: string;
  icon: React.ReactNode;
  items: string[];
}

interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

// --- Data ---
const projects: Project[] = [
  {
    id: "calculator",
    title: "Focus Pro Timer",
    tagline: "Precision Timing for Peak Productivity",
    description: "Precision Timing for Peak Productivity.",
    longDescription:
      "Focus Pro Timer streamlines your time management with a distraction-free, high-contrast interface. Ideal for workouts, or deep work, it tracks your progress clearly and works offline, keeping you focused.",
    image: "/timer2.jpg",
    apkUrl: "#",
    features: [
      "Precision Interval Engine",
      "High-Contrast Field UI",
      "Mechanical Status Alerts",
      "Offline Operational Mode",
    ],
    tech: ["React Native", "Expo Router", "SVG Graphics", "TypeScript"],
  },
];

const skills: Skill[] = [
  {
    category: "Frontend",
    icon: <Globe className="text-blue-500" />,
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend",
    icon: <Database className="text-blue-500" />,
    items: ["Node.js", "Firebase"],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="text-blue-500" />,
    items: ["React Native"],
  },
  {
    category: "Tools",
    icon: <Cpu className="text-blue-500" />,
    items: ["Git", "Vite", "Figma"],
  },
];

const galleryItems: GalleryItem[] = [
  { id: 1, title: "", image: "/1.jpg" },
  { id: 2, title: "", image: "/2.jpg" },
  { id: 3, title: "", image: "3.jpg" },
  { id: 4, title: "", image: "4.jpg" },
  { id: 5, title: "", image: "5.jpg" },
  { id: 6, title: "", image: "6.jpg" },
];

// --- Components ---

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "Project", href: "/#projects" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
    { name: "View App", href: "/#projects" },
  ];

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled || !isHome ? "bg-black/80 backdrop-blur-xl py-4 border-b border-white/10" : "bg-transparent py-8"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-serif font-bold text-white tracking-tighter group">
          K <span className="text-blue-500 group-hover:text-white transition-colors italic">M</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-serif text-white hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white">
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Home = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black"></div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]"
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-blue-500 text-xs uppercase tracking-[0.5em] font-bold mb-4 block">
              Third-Year Student & Developer
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tighter leading-none">
              Kert <br />{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-white/20">
                Macarate
              </span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              A passionate developer based in the Philippines, focused on building innovative web and mobile solutions
              while pursuing academic excellence.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="#projects"
                className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
              >
                Contact Me <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/20">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src="/kert.jpg" alt="Kert Macarate" className="w-full h-full object-cover opacity-60" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"></div>
            </div>
            <div>
              <span className="text-blue-500 text-xs uppercase tracking-[0.3em] font-bold mb-4 block">About Me</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                Third-Year Student <br /> with a Vision
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                I study IT at Christ the King College in the Philippines and enjoy exploring different areas of
                technology while working on practical projects.
              </p>
              <div className="grid grid-cols-2 gap-6 sm:gap-12">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-500 mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-bold text-lg">Philippines</h4>
                    <p className="text-white/40 text-xs uppercase tracking-widest">Current Location</p>
                  </div>
                </div>
                <div className="flex items-start gap-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-blue-500 text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Expertise</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-white/40 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-blue-500 text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
                Selected Work
              </span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">Featured Apps</h2>
            </div>
            <p className="text-white/40 max-w-sm md:text-right">
              A curated collection of mobile applications focused on utility and user experience.
            </p>
          </div>

          <div className="grid gap-20 md:gap-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 md:gap-16 items-center`}
              >
                <div className="flex-1 group cursor-pointer overflow-hidden rounded-3xl w-full">
                  <Link to={`/app/${project.id}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="flex-1 space-y-6 md:space-y-8 w-full">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">{project.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Link
                      to={`/app/${project.id}`}
                      className="inline-flex items-center gap-4 text-white font-bold group"
                    >
                      <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <ChevronRight size={20} />
                      </span>
                      View app
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-blue-500 text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Moments</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <p className="text-white font-serif font-bold text-center text-lg">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-12">
            Let's Create <br /> Something <span className="text-blue-500 italic">Iconic</span>
          </h2>
          <form className="space-y-6 text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
            ></textarea>
            <button className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </PageTransition>
  );
};

const AppDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Not Found</div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-black pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </button>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div>
                <span className="text-blue-500 text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
                  Case Study
                </span>
                <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-none">
                  {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/60 font-light italic">{project.tagline}</p>
              </div>

              <div className="space-y-6">
                <h3 className="text-white text-xl font-bold">Overview</h3>
                <p className="text-white/40 text-lg leading-relaxed">{project.longDescription}</p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest border-b border-white/10 pb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((f) => (
                      <li key={f} className="text-white/40 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest border-b border-white/10 pb-2">
                    Technologies
                  </h4>
                  <ul className="space-y-2">
                    {project.tech.map((t) => (
                      <li key={t} className="text-white/40 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-white/20 rounded-full"></div> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={project.apkUrl}
                  className="inline-flex items-center gap-4 px-10 py-5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all shadow-2xl shadow-blue-900/40"
                >
                  <Download size={20} /> Download APK Version
                </a>
              </div>
            </div>

            <div className="space-y-12">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <Smartphone className="mx-auto mb-4 text-blue-500" />
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Mobile First</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <Zap className="mx-auto mb-4 text-blue-500" />
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Performance</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <Shield className="mx-auto mb-4 text-blue-500" />
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

const Footer = () => (
  <footer className="py-20 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-serif font-bold text-white mb-2">Kert Macarate</h3>
        <p className="text-white/20 text-sm">© 2026 AC. All rights reserved. Crafted with care.</p>
      </div>
      <div className="flex gap-8">
        <a href="#" className="text-white/40 hover:text-white transition-colors">
          <Github size={20} />
        </a>
        <a href="#" className="text-white/40 hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="#" className="text-white/40 hover:text-white transition-colors">
          <Twitter size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen selection:bg-blue-500 selection:text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app/:id" element={<AppDetail />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}
