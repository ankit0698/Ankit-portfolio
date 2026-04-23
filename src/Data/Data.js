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
    "Messy product problems become clean, usable interfaces through sharp frontend craft, practical system thinking, and hands-on work across APIs, mobile apps, cloud deployments, and AI-driven workflows.",
  metrics: [
    { label: "Professional experience", value: "4+" },
    { label: "Current focus", value: "AI UI" },
    { label: "Main area", value: "Frontend" },
  ],
};

export const aboutHighlights = [
  "Product requirements become practical screens, flows, APIs, and reusable frontend pieces.",
  "Web and mobile work spans React, Next.js, React Native, TypeScript, Node.js, NestJS, and database-backed features.",
  "Recent focus: AI-driven interfaces, agent workflows, MCP-based systems, and multi-step automation flows.",
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
    name: "Riya Sharma",
    role: "Product Manager",
    image: "https://i.pravatar.cc/160?img=47",
    quote:
      "Ankit thinks beyond the screen. He understood the product goal quickly, questioned unclear flows, and turned rough requirements into a clean interface that felt ready for real users.",
  },
  {
    name: "Karan Mehta",
    role: "Engineering Lead",
    image: "https://i.pravatar.cc/160?img=12",
    quote:
      "Working with Ankit was smooth because his components were structured, readable, and easy to extend. He cared about responsive behavior, edge cases, and the small details that usually create rework.",
  },
  {
    name: "Neha Kapoor",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/160?img=32",
    quote:
      "He translated the design with care instead of only copying the layout. Spacing, states, naming, and interactions stayed consistent, which made the handoff feel clear and dependable.",
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
