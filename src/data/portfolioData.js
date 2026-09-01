// ============================================================
// portfolioData.js — Centralized configuration for Kavinda Selvan's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Kavinda Selvan",
  firstName: "Kavinda Selvan",
  brandName: "Kavinda Selvan",
  title: "QA Engineer",
  location: "Nuwara Eliya,Sri Lanka",
  phone: "+94 76700-9023",
  emails: {
    secondary: "selvankavindaselvan@gmail.com",
  },
  summary:
    "Aspiring software engineer and motivated B.Tech Computer Science student with solid skills in Java, Spring Boot, React, and Python. Passionate about building scalable full-stack applications with clean architecture and modern tech stacks.",
};

export const socialLinks = {
  github: "https://github.com/KavindaSelvan",
  linkedin: "https://www.linkedin.com/in/kavindaselvan/",
};

export const heroContent = {
  greeting: "Hi, I'm Kavinda Selvan",
  titleHighlight: "QA Engineer",
  subtitle:
    "I deliver reliable software through thorough testing, automation, and a passion for quality.",
  ctaPrimary: { text: "View My Experience", href: "#experience" },
  ctaSecondary: {
      text: "Contact Me",
      href: "mailto:selvankavindaselvan@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Kavinda Selvan,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  image2: "/portfolio_image.png",
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Kavinda Selvan</span>, a QA Engineer based in Nuwara-Eliya, Sri Lanka, passionate about ensuring software quality through thorough testing, automation, and attention to detail. Over the course of my career, I've tested 50+ websites, reviewed 25+ Figma designs, and QA'd 20+ mobile apps across various industries. I'm dedicated to delivering reliable, user-friendly, and high-quality applications.`,
  techStack: ["Java", "Spring Boot", "MERN Stack"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn software into reliable, high-quality experiences.",
  description:
    "I follow a structured and detail-oriented approach to test applications, identify defects, and ensure reliable, user-friendly software.",
  cards: [
    {
      number: "01",
      title: "Understand Requirements",
      text: "Analyze the project requirements and identify expected behavior.",
    },
    {
      number: "02",
      title: "Create Test Cases",
      text: "Design test scenarios covering functional, UI, edge-case, and negative testing.",
    },
    {
      number: "03",
      title: "Execute & Report",
      text: "Perform manual and automated tests, identify defects, and document them clearly.",
    },
    {
      number: "04",
      title: "Retest & Validate",
      text: "Verify bug fixes, perform regression testing, and ensure the application is stable and ready for release.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 70 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "MERN Stack", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Test Automation",
      skills: [
        { name: "Playwright", level: 90 },
        { name: "Selenium", level: 85 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        { name: "MongoDB Compass", level: 85 },
        { name: "Antigravity", level: 80 },
        { name: "Codex", level: 75 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "DBMS", level: 86 },
        { name: "OOP", level: 90 },
        { name: "Software Engineering", level: 84 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "Cinematic Content",
  heading: "Creative Direction & Cinematic Edits",
  description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories: [
    {
      title: "Cinematic Reels",
      description: "Visual stories crafted with cinematic lighting, premium color grading, and high-impact sound design.",
      stats: "50+ Reels Created",
      icon: "🎥"
    },
    {
      title: "Travel Videos",
      description: "Immersive travel vlogs and aesthetic edits capturing cultures, landscapes, and visual rhythms.",
      stats: "15+ Countries/Cities",
      icon: "✈️"
    },
    {
      title: "Educational Reels",
      description: "Fast-paced tech tutorials and educational content designed to simplify coding and software engineering.",
      stats: "100k+ Views",
      icon: "🧠"
    },
    {
      title: "My Own Creative Edits",
      description: "Experimental transitions, 3D overlays, and trendsetting visual effects that push creative bounds.",
      stats: "Personal Projects",
      icon: "⚡"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "IEEE Madhya Pradesh Section (Social Media Team)",
    description: "Managed and coordinated digital content, driving audience engagement and designing interactive visual campaigns for tech events.",
    role: "Social Media Coordinator",
    badge: "Volunteer"
  },
  {
    title: "Team Coordinator – Go-Kart International Racing 2K25",
    description: "Led multi-disciplinary teams in project management, budget control, and logistics coordination for a high-profile international racing event.",
    role: "Team Coordinator",
    badge: "Leadership"
  },
  {
    title: "5-Day MOE IDE Bootcamp, Roorkee",
    description: "Participated in an intensive Innovation, Design, and Entrepreneurship Bootcamp organized by the Ministry of Education at IIT Roorkee.",
    role: "Bootcamp Graduate",
    badge: "Innovation"
  },
  {
    title: "Hosted INFORIA Tech Summit Hackathon",
    description: "Organized and hosted the flagship hackathon, managing registrations, mentoring participant teams, and coordinating judge evaluations.",
    role: "Hackathon Organizer",
    badge: "Co-Curricular"
  },
  {
    title: "Event Coordinator & Anchoring – INFORIA 2K25",
    description: "Coordinated technical events and served as the main stage anchor, speaking in front of large crowds and managing the summit flow.",
    role: "Stage Anchor & Coordinator",
    badge: "Public Speaking"
  }
];

// Professional and organizational experience
export const internshipsList = [
  {
    organization: "Ever Efficient Business Management (Pvt) Ltd",
    role: "QA Intern",
    duration: "June 2026 - December 2026",
    description: "Manually tested 50+ websites, 20+ mobile apps, and 25+ Figma designs to identify functional and UI/UX issues. Performed test case creation, functional testing, regression testing, bug reporting, and usability testing."
  },
  {
    organization: "NIBM IT Society",
    role: "Member",
    duration: "2024 - 2025",
    description: "Organized the CyBots robotics exhibition and conducted a school outreach event with a robot football competition to promote robotics."
  },
  {
    organization: "AIESEC NIBM",
    role: "Member",
    duration: "2025 - 2026",
    description: "Member of AIESEC NIBM since 2025; served in Product Strategy (Frontend Office) and contributed to Talent Management. Participated in team projects, events, and professional development activities."
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Prompt Engineering", icon: "🤖", desc: "Crafting clear, precise prompts to guide AI tools toward useful and reliable results." },
  { name: "Critical Thinking", icon: "🧠", desc: "Analyzing problems from multiple perspectives and making thoughtful, evidence-based decisions." }
];

export const projects = [
  {
    id: "foodmesh",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "FoodMesh",
    description:
      "FoodMesh — An enterprise-grade multi-tenant restaurant management and food ordering SaaS platform inspired by UrbanPiper. It enables restaurants to manage multiple outlets, menus, inventory, customers, staff, and orders through a scalable architecture with secure authentication, role-based access control, and real-time operations. Built with React, Next.js, NestJS, PostgreSQL, Redis, Kafka, Elasticsearch, Docker, Kubernetes, and AWS.",
    techTags: [
      "React",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Elasticsearch",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    links: {
      github: "https://github.com/ersamirsingh/UrbanPiper",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "karigar",
    number: "02",
    badge: null,
    title: "Karigar",
    description:
      "A platform connecting local skilled workers with customers, featuring real-time search, worker profiles, and booking management with full database integration.",
    techTags: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    links: {
      frontendDemo: "https://karigar-frontend.onrender.com",
      backendApi: "https://karigar-zny2.onrender.com",
    },
    isFlagship: false,
  },
  {
    id: "sentiment-analysis",
    number: "03",
    badge: null,
    title: "AI-Powered Sentiment Analysis",
    description:
      "A full-stack web application that analyzes citizen feedback using Artificial Intelligence to classify sentiments as positive, negative, or neutral. Features a responsive React frontend, a Node.js backend, MongoDB for data storage, and n8n automation for workflow orchestration — enabling real-time insights and efficient feedback management.",
    techTags: ["React", "Node.js", "MongoDB", "n8n", "AI/ML", "REST API"],
    links: {
      github: "#", // Update when available
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Certificate in Software Quality Assurance",
      issuer: "University of Moratuwa",
      icon: "🎓",
      url: "/Introduction_to_Software_Quality_Assurance_E-Certificate.pdf",
    },
    {
      name: "Certificate in Playwright",
      issuer: "Udemy",
      icon: "✅",
    },
    {
      name: "Certificate in Selenium",
      issuer: "Udemy",
      icon: "✅",
    },
    {
      name: "Certificate in API Testing",
      issuer: "Udemy",
      icon: "✅",
    },
    {
      name: "Certificate in Web Development",
      issuer: "University of Moratuwa",
      icon: "🎓",
      url: "/Web_Design_for_Beginners_E-Certificate.pdf",
    },
    {
      name: "Certificate in Python Development",
      issuer: "University of Moratuwa",
      icon: "🎓",
      url: "/Python_for_Beginners_E-Certificate.pdf",
    },
    {
      name: "Certificate in Frontend Development",
      issuer: "University of Moratuwa",
      icon: "🎓",
      url: "/Front-End_Web_Development_E-Certificate.pdf",
    },
  ],
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "IES College of Technology (RGPV)",
  cgpa: "8.35",
  graduation: "2027",
  twelfth: "12th Science – 81%",
  tenth: "10th CBSE – 70%",
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "Java · Spring Boot · React",
    "Full Stack Applications",
  ],
  credential: "B.Tech CSE · CGPA 8.35",
  copyright: `© ${new Date().getFullYear()} Kavinda Selvan | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
