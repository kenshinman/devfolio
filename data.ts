export const profile = {
  name: "Kehinde Orilogbon",
  title: "Senior Frontend Engineer",
  summary:
    "Senior Front End Engineer with 10+ years of experience architecting scalable, maintainable, and high-performance web and mobile applications. Deep expertise in JavaScript/TypeScript, React, and Next.js, with a strong focus on frontend architecture, state management, and responsive UI. Proven ability to deliver user-centric features, optimise performance, and collaborate cross-functionally. Passionate about code quality, accessibility (WCAG compliance), and continuous improvement through emerging frontend technologies."
};

export const experience = [
  {
    title: "Senior Front End Developer",
    company: "FlipGive Inc",
    location: "Toronto",
    date: "Dec 2021 – Mar 2025",
    bullets: [
      "Migrated legacy Rails pages to Next.js with SSR to improve SEO and handle millions of views.",
      "Built and maintained a shared component library and WCAG-compliant design system using Tailwind CSS.",
      "Improved frontend infrastructure (build optimizations, test automation, developer tooling).",
      "Mentored junior developers and promoted best practices through code reviews and pairing.",
      "Implemented analytics and tracking codes for data collection and decision-making.",
      "Built high-impact features including 2FA, custom email templates, and performance-optimized pages.",
      "Led CI/CD improvements and championed accessibility.",
      "Ran A/B experiments that improved user retention by ~30%."
    ],
    technologies: ["React", "React Native", "Next.js", "TypeScript", "GraphQL", "Apollo Client", "Tailwind CSS", "Node.js", "Ruby on Rails"]
  },
  {
    title: "Consultant, Front End Engineer",
    company: "Modus Create",
    location: "Remote",
    date: "Jan 2021 – Dec 2021",
    bullets: [
      "Built Podopolo, a social podcasting app in React Native.",
      "Delivered frontend features aligned with roadmap goals.",
      "Collaborated across departments and participated in peer code reviews.",
      "Set up Storybook for React Native for isolated component development."
    ],
    technologies: ["React", "React Native", "TypeScript", "Node.js", "Redux", "SWR"]
  },
  {
    title: "Senior Frontend Developer / Team Lead",
    company: "Softcom & Eyowo",
    location: "Lagos, Nigeria",
    date: "Nov 2017 – Jan 2021",
    bullets: [
      "Architected projects and improved dev efficiency by 20%.",
      "Created reusable frontend boilerplates and design systems.",
      "Led development of Softcom’s ERP (LEAP) with Firebase + React.",
      "Optimized app performance and bundle sizes by over 95%.",
      "Taught team SSR in React to boost SEO.",
      "Mentored engineers and collaborated with design/product."
    ],
    technologies: ["React", "Redux", "Node.js", "Firebase", "HTML5", "CSS3", "AngularJS", "Webpack"]
  },
  {
    title: "Freelance Frontend Developer",
    company: "Self-Employed",
    location: "Lagos, Nigeria",
    date: "Jul 2014 – Nov 2017",
    bullets: [
      "Developed and maintained frontend functionality.",
      "Wrote cross-browser compatible and responsive UIs.",
      "Managed databases and coordinated with clients and webmasters.",
      "Ensured design consistency and accessibility across properties."
    ],
    technologies: ["React", "Node.js", "PHP", "WordPress", "MongoDB", "Firebase", "HTML", "CSS"]
  }
];

export const education = [
  {
    degree: "B.Sc. Psychology",
    institution: "University of Lagos",
    location: "Lagos, Nigeria",
    date: "Nov 2009 – Jan 2014",
    note:
      "Background in Psychology enhances user-centered design and UX understanding."
  },
  {
    certificate: "Frontend Development Certification",
    institution: "FreeCodeCamp",
    date: "Jun 2015 – Mar 2016"
  }
];

export const portfolio = [
  {
    project: "Autochek Africa",
    url: "https://autochek.africa",
    location: "Lagos, Nigeria",
    date: "Jun 2019 – Nov 2019",
    description: "Led frontend team to build Autochek Africa from scratch using Next.js and Node.js.",
    highlights: [
      "Built shared frontend infrastructure, component libraries, and CI/CD tooling.",
      "Implemented SEO optimizations that ranked pages in Google’s top 2 organic results.",
      "Modernized legacy codebase and introduced developer-friendly tooling.",
      "Contributed to frontend architecture reviews and planning."
    ]
  },
  {
    project: "FlipGive Shop",
    url: "https://shop.flipgive.com",
    location: "Toronto, Canada",
    date: "2022 – 2025",
    description: "Migrated marketing and shopping experiences to a modern frontend stack using Next.js.",
    highlights: [
      "Enhanced SEO, page speed and reduced bounce rate significantly.",
      "Implemented WCAG-compliant components and integrated analytics.",
      "Created performance-optimized SSR pages with dynamic routing."
    ]
  },
  {
    project: "Podopolo",
    url: "https://podopolo.com",
    location: "Remote",
    date: "2021",
    description: "Built a next-gen podcasting mobile app with React Native for Modus Create.",
    highlights: [
      "Collaborated cross-functionally to deliver end-to-end user features.",
      "Implemented Storybook for improved component development.",
      "Maintained scalable, reusable UI components."
    ]
  },
  {
    project: "Bundul",
    url: "https://bundul.io",
    location: "Remote",
    date: "2020 – Present",
    description: "Built and deployed Bundul from scratch using React Native, Expo, and TypeScript.",
    highlights: [
      "Designed app architecture and built all frontend features from the ground up.",
      "Integrated APIs, payment, authentication, and analytics.",
      "Led deployment to iOS and Android app stores.",
      "Established CI/CD and error monitoring with Sentry."
    ]
  }
];

export const skills = {
  languagesAndFrameworks: [
    { name: "React", icon: "code" },
    { name: "React Native", icon: "smartphone" },
    { name: "TypeScript", icon: "file-code" },
    { name: "JavaScript (ES6+)", icon: "file-code-2" },
    { name: "Next.js", icon: "layout" },
    { name: "Node.js", icon: "server" },
    { name: "Angular", icon: "triangle" },
    { name: "HTML5", icon: "file-text" },
    { name: "CSS3", icon: "palette" },
    { name: "Tailwind CSS", icon: "paintbrush" },
    { name: "jQuery", icon: "scroll" },
    { name: "Redux", icon: "repeat" },
    { name: "React Query", icon: "search" }
  ]
};

export const tools = [
  { name: "Stripe", icon: "credit-card" },
  { name: "Plaid", icon: "shield" },
  { name: "GraphQL", icon: "git-graph" },
  { name: "Apollo Client", icon: "satellite-dish" },
  { name: "Firebase", icon: "flame" },
  { name: "MongoDB", icon: "database" },
  { name: "MySQL / PostgreSQL", icon: "table" },
  { name: "Storybook", icon: "book-open" },
  { name: "Docker", icon: "container" },
  { name: "Git", icon: "git-branch" },
  { name: "AWS", icon: "cloud" },
  { name: "Vercel", icon: "globe" },
  { name: "Jest / Testing Library", icon: "bug" },
  { name: "CI/CD Workflows", icon: "repeat" },
  { name: "Mapbox / Google Maps", icon: "map" }
];

export const softSkills = [
  "End-to-end ownership",
  "Collaboration",
  "Problem-solving",
  "Mentoring",
  "UI/UX Thinking",
  "Scalable Frontend Architecture",
  "Performance Optimisation",
  "Design Systems"
];

export const contact = {
  location: "Milton, ON, Canada",
  address: "30 Whitmer Street, Milton, L9T 0R5",
  phone: "+1 (437) 973 1380",
  email: "archkenshin@gmail.com"
};

export const links = {
  linkedin: "https://www.linkedin.com/in/paul-kehinde-orilogbon",
  github: "https://github.com/kenshinman"
};
