import portfolioImg from "../assets/portfolio.png";
import travelpediaImg from "../assets/onlinetravelpedia.png";
import careTrackImg from "../assets/care-track.png";
import paySmarterImg from "../assets/pay-smarter.png";
import investmentImg from "../assets/investment.png";
import youtubeImg from "../assets/youtube.png";
import weatherImg from "../assets/weather.jpeg";

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export const profile = {
  name: "Ankit Mishra",
  role: "Developer",
  experience: "4+ years",
  location: "India",
  email: "ankit0698@gmail.com",
  linkedin: "https://www.linkedin.com/in/ankit-mishra-a0874619a",
  github: "https://github.com/ankit0698",
  pitch:
    "I enjoy turning messy product problems into clean, usable interfaces. My main strength is frontend development, with hands-on work across APIs, mobile apps, cloud deployments, and AI-driven workflows.",
  metrics: [
    { label: "Professional experience", value: "4+" },
    { label: "Current focus", value: "AI UI" },
    { label: "Main area", value: "Frontend" },
  ],
};

export const aboutHighlights = [
  "I like breaking product requirements into practical screens, flows, APIs, and reusable frontend pieces.",
  "I have worked across web and mobile apps using React, Next.js, React Native, TypeScript, Node.js, NestJS, and databases.",
  "Recently, I have been building AI-driven interfaces, agent workflows, MCP-based systems, and multi-step automation flows.",
];

export const skillGroups = [
  {
    title: "Frontend & Mobile",
    description:
      "Product UI, responsive screens, mobile experiences, state, routing, and component systems.",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "API integration, authentication, data modeling, backend services, and database-backed features.",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "JWT",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
    ],
  },
  {
    title: "AI, Cloud & Delivery",
    description:
      "AI product workflows, agentic systems, deployment, automation, and production delivery.",
    skills: [
      "Generative AI",
      "Agentic AI",
      "MCP Servers",
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
    ],
  },
];

export const skills = skillGroups.flatMap((group) => group.skills);

export const projects = [
  {
    title: "CareTrack",
    category: "Healthcare CRM",
    subtitle: "CRM + case management",
    description:
      "A CRM tool for medical assistance companies that streamlines case management, operational tracking, and assistance workflows.",
    image: careTrackImg,
    link: "https://caretrack.health/",
    isLive: true,
    stack: ["CRM", "Case Management", "Healthcare Operations"],
    outcomes: [
      "Streamlined cases",
      "Assistance workflows",
      "Operational visibility",
    ],
  },
  {
    title: "PaySmarter",
    category: "Healthcare payments",
    subtitle: "Virtual payment cards",
    description:
      "A virtual payment card provider built to make healthcare payments secure, seamless, and fast through a smart payment gateway.",
    image: paySmarterImg,
    link: "https://staging.paysmarterglobal.com/",
    isLive: true,
    stack: ["Virtual Cards", "Payment Gateway", "Healthcare Payments"],
    outcomes: [
      "Secure payments",
      "Fast settlement flow",
      "Simple card experience",
    ],
  },
  {
    title: "Online Travel Pedia",
    category: "Editorial platform",
    subtitle: "Next.js + Firebase",
    description:
      "A destination-focused travel publishing experience with structured content, responsive reading flows, and a fast static-first front end.",
    image: travelpediaImg,
    link: "https://onlinetravelpedia.netlify.app/",
    isLive: true,
    stack: ["Next.js", "Firebase", "Responsive UI"],
    outcomes: [
      "Content architecture",
      "Fast navigation",
      "Mobile-first layouts",
    ],
  },
  {
    title: "Weather Intelligence App",
    category: "API product",
    subtitle: "React hooks + weather API",
    description:
      "A real-time weather interface focused on clean API integration, searchable locations, current conditions, and compact forecast display.",
    image: weatherImg,
    link: "https://salmon-adrian-51.tiiny.site",
    stack: ["React", "Hooks", "OpenWeather API"],
    outcomes: ["API orchestration", "Forecast UI", "Loading states"],
  },
  {
    title: "YouTube Clone",
    category: "Media interface",
    subtitle: "React + Redux + Routing",
    description:
      "A video browsing experience that recreates familiar media navigation patterns while separating UI, state, and route responsibilities.",
    image: youtubeImg,
    link: "https://github.com/ankit0698/YoutubeClone",
    stack: ["React", "Redux", "Routes"],
    outcomes: ["Media cards", "Browse flows", "State separation"],
  },
  {
    title: "Investment Calculator",
    category: "Financial tool",
    subtitle: "React hooks",
    description:
      "A calculation-focused interface that turns user inputs into projected investment outcomes with clear controls and readable results.",
    image: investmentImg,
    link: "https://github.com/ankit0698/Investment-calculator-app",
    stack: ["React", "Hooks", "Forms"],
    outcomes: ["Input model", "Computed output", "Accessible forms"],
  },
  {
    title: "Portfolio System",
    category: "Personal brand",
    subtitle: "React + Tailwind",
    description:
      "A portfolio shell designed to communicate technical depth, project ownership, and front-end craft through reusable React sections.",
    image: portfolioImg,
    link: "https://github.com/ankit0698/Ankit-portfolio",
    stack: ["React", "Tailwind", "Vite"],
    outcomes: ["Design tokens", "Section system", "Responsive shell"],
  },
];

export const experience = [
  {
    period: "Sep 2024 - Present",
    role: "Full Stack Developer",
    company: "23 Ventures",
    description:
      "Leading development of multi-LLM and agentic AI product workflows across web, mobile, backend, and deployment layers.",
    points: [
      "AI platforms",
      "React and Next.js",
      "React Native",
      "MCP servers",
      "NestJS APIs",
      "AWS and Docker",
    ],
  },
  {
    period: "Mar 2022 - Aug 2024",
    role: "Software Developer",
    company: "Wipro Technologies",
    description:
      "Worked on enterprise-scale frontend applications, reusable UI components, API integration, performance improvements, and responsive production interfaces.",
    points: [
      "Enterprise UI",
      "React.js",
      "TypeScript",
      "Next.js",
      "REST APIs",
      "Performance fixes",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Ankit brings product thinking into front-end work. He does not stop at matching screens; he asks how the interface should behave.",
    source: "Product collaborator",
  },
  {
    quote:
      "He is strongest where UI craft and implementation discipline meet: structure, responsiveness, and small interaction details.",
    source: "Engineering teammate",
  },
  {
    quote:
      "The handoff stayed smooth because the components were predictable, named clearly, and easy to reason about.",
    source: "Design partner",
  },
];

export const contactChannels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "LinkedIn",
    value: "ankit-mishra-a0874619a",
    href: profile.linkedin,
  },
  { label: "GitHub", value: "ankit0698", href: profile.github },
];
