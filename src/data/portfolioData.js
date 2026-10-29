import trekkingImg from '../assets/project-trekking.png';
import mrugayaImg from '../assets/project-mrugaya.png';
import villaImg from '../assets/project-villa.png';
import villaVideo from '../assets/villa-video.mp4';
import aevoraImg from '../assets/project-aevora.png';
import linimarsImg from '../assets/project-linimars.png';
import crmImg from '../assets/project-crm.png';
import royalRoyceImg from '../assets/project-royal-royce.png';
import zelixImg from '../assets/project-zelix.png';

export const personalInfo = {
  name: "Ganesh Kale",
  role: "Full Stack Developer",
  email: "ganeshkale2002@gmail.com",
  phone: "+91 98765 43210",
  location: "Pune, Maharashtra, India",
  availability: "Available for work",
  yearsExperience: "2+",
  websitesDelivered: "10+",
  happyClients: "5+",
  clientSatisfaction: "100%",
  heroHeadline: "I build modern websites that create real impact.",
  heroSubtitle: "Full Stack Developer focused on building high-performing, scalable and visually stunning websites and web applications using React, Next.js, Node.js, PHP and more.",
  aboutHeadline: "Web Developer who turns ideas into digital experiences.",
  aboutBio: "I'm Ganesh Kale, a Full Stack Developer with a strong focus on website development, web applications and business solutions. I enjoy creating clean, modern and user-friendly websites that help businesses grow online.",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:ganeshkale2002@gmail.com"
  }
};

export const experienceSummary = {
  title: "2+ Years in Software Development",
  badge: "Full Stack Development",
  period: "2+ Years Experience",
  summary: "2+ years of hands-on experience engineering high-performance web applications, business portals, CRM, and LMS platforms. Specialized in building scalable, production-ready solutions using React, Next.js, Node.js, and MySQL with clean architecture.",
  highlights: [
    "Full-stack development of web apps, CRM, LMS, and client portals",
    "Modern frontend UI with React, Next.js, and Tailwind CSS",
    "Scalable backend APIs and database modeling with Node.js & MySQL",
    "Focus on performance optimization, clean code, and client delivery"
  ],
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "MySQL",
    "Tailwind CSS",
    "REST APIs"
  ]
};

export const workExperience = [
  {
    id: "combined-experience",
    role: "2+ Years in Software Development",
    period: "2+ Years Experience",
    icon: "code",
    color: "blue",
    summary: experienceSummary.summary,
    skills: experienceSummary.skills
  }
];

export const projectCategories = [
  "All",
  "Business Websites",
  "E-Commerce",
  "Web Applications",
  "Enterprise",
  "Personal"
];

export const projectsList = [
  {
    id: "villa-horizon",
    title: "Villa Horizon",
    subtitle: "Architectural Residence",
    badge: "Featured • Architecture",
    badgeColor: "bg-blue-600 text-white shadow-xs",
    category: "Business Websites",
    description: "Framing nature through floor-to-ceiling glass. An architectural estate tour with interactive scroll storytelling, floor plans, and modern luxury aesthetics.",
    image: villaImg,
    video: villaVideo,
    tags: ["React", "Next.js", "Interactive UI", "Video Tour", "Vercel"],
    liveUrl: "https://scroll-villa.vercel.app/",
    featured: true
  },
  {
    id: "aevora-blue",
    title: "Aevora",
    subtitle: "Fine Properties & Architectural Residences | Pune",
    badge: "Featured • Real Estate",
    badgeColor: "bg-blue-600 text-white shadow-xs",
    category: "Business Websites",
    description: "Discover curated luxury penthouses, private villas, and bespoke riverfront residences across Pune with modern architectural layout.",
    image: aevoraImg,
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://aevora-blue.vercel.app/",
    featured: true
  },
  {
    id: "royal-royce",
    title: "Royal Royce",
    subtitle: "Detailing Atelier • The Art of Preservation",
    badge: "Luxury Auto & Atelier",
    badgeColor: "bg-amber-950/80 text-amber-300 border border-amber-600/40",
    category: "Business Websites",
    description: "A private detailing atelier for the world's most coveted automobiles. High-end automotive studio showcase with consultation booking, cinema gallery, and bespoke service packages.",
    image: royalRoyceImg,
    tags: ["React", "Node.js", "Tailwind CSS", "Netlify"],
    liveUrl: "https://royalroycee.netlify.app/"
  },
  {
    id: "zelix-store",
    title: "ZELIX",
    subtitle: "The Social Hour • Luxury Fashion",
    badge: "Shopify Store",
    badgeColor: "bg-rose-950/80 text-rose-300 border border-rose-500/40",
    category: "E-Commerce",
    description: "Bespoke luxury fashion and evening couture boutique built on Shopify. Features seasonal lookbooks, collections showcase, currency conversion, and optimized checkout.",
    image: zelixImg,
    tags: ["Shopify", "Liquid", "E-Commerce", "Custom Theme"],
    liveUrl: "https://ibtfjc-04.myshopify.com/"
  },
  {
    id: "mrugaya-jewellery",
    title: "Mrugaya Jewellery",
    subtitle: "Exclusive Handcrafted Jewellery",
    badge: "E-Commerce",
    badgeColor: "bg-amber-50 text-amber-700 border border-amber-200",
    category: "E-Commerce",
    description: "Discover luxury jewellery at Mrugaya Jewellery. Curated collection of handcrafted gold, silver and bespoke bridal designs.",
    image: mrugayaImg,
    tags: ["React", "E-Commerce", "Tailwind CSS", "Netlify"],
    liveUrl: "https://mrugayajewellery.netlify.app/"
  },
  {
    id: "trekking-maharashtra",
    title: "Maharashtra Trekking Company",
    subtitle: "Book Sahyadri Treks via WhatsApp",
    badge: "Booking & Travel",
    badgeColor: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    category: "Business Websites",
    description: "Book Sahyadri fort treks, valley trails and peak climbs in Maharashtra. Instant WhatsApp booking integration with modern UI — no forms.",
    image: trekkingImg,
    tags: ["React", "Tailwind CSS", "WhatsApp API", "Netlify"],
    liveUrl: "https://trekkinggk-company.netlify.app/"
  }
];

export const servicesList = [
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Modern, responsive and SEO-friendly websites for businesses and brands.",
    icon: "globe",
    color: "blue"
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Custom web applications with powerful features and clean UI/UX.",
    icon: "layers",
    color: "indigo"
  },
  {
    id: "crm-erp-solutions",
    title: "CRM & ERP Solutions",
    description: "Custom enterprise CRM & ERP platforms with workflow automation, dashboards, and role management.",
    icon: "database",
    color: "emerald"
  },
  {
    id: "ui-ux",
    title: "UI/UX Implementation",
    description: "Pixel-perfect, modern and responsive designs from Figma to code.",
    icon: "wand",
    color: "purple"
  }
];

export const techStackCategories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools & DevOps"
];

export const allTechnologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Git", category: "Tools & DevOps" },
  { name: "Docker", category: "Tools & DevOps" },
  { name: "Figma", category: "Tools & DevOps" }
];

export const processSteps = [
  {
    step: "01",
    title: "Understand Requirements",
    description: "Discuss goals, target audience and key features.",
    icon: "clipboard-list"
  },
  {
    step: "02",
    title: "Design & Plan",
    description: "Create UI/UX design and technical architecture.",
    icon: "layout"
  },
  {
    step: "03",
    title: "Development",
    description: "Build using modern technologies with clean and scalable code.",
    icon: "code"
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description: "Test for performance, SEO and deploy to live server.",
    icon: "rocket"
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Ganesh built an intuitive trekking booking platform with instant WhatsApp integration. Our booking conversions increased significantly and user feedback has been tremendous.",
    author: "Founder & Director",
    company: "Maharashtra Trekking Company",
    rating: 5
  },
  {
    id: 2,
    quote: "Working with Ganesh was a seamless experience. He delivered a stunning, high-converting luxury jewellery platform ahead of schedule.",
    author: "Founder & Director",
    company: "Mrugaya Jewellery",
    rating: 5
  },
  {
    id: 3,
    quote: "Exceptional technical skills and great attention to modern architectural aesthetics. The interactive estate walkthrough runs smoothly with outstanding performance.",
    author: "Creative Director",
    company: "Villa Horizon",
    rating: 5
  }
];

export const resumeDetails = {
  summary: "Results-driven Full Stack Developer focused on building high-performing, scalable and visually stunning websites and web applications using React, Next.js, Node.js, PHP, and modern tools.",
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Pune University",
      period: "2020 - 2024",
      grade: "First Class with Distinction"
    }
  ],
  certifications: [
    "Meta Front-End Developer Professional Certificate",
    "Full Stack Web Development - Modern JavaScript & React",
    "AWS Certified Cloud Practitioner - Foundational"
  ]
};

export const experiences = [
  {
    id: "full-stack",
    company: "Professional Experience",
    role: "Full Stack Developer",
    period: "2+ Years Experience",
    location: "Pune, India",
    highlights: [
      "Developing and maintaining web applications, portals, CRM, LMS and client websites.",
      "Working with React, Node.js, MySQL and modern web technologies.",
      "Collaborating with clients to deliver scalable solutions."
    ],
    skills: ["React", "Node.js", "MySQL", "Tailwind CSS", "JavaScript"]
  }
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }, { name: "JavaScript" }, { name: "HTML/CSS" }]
  },
  {
    title: "Backend & DB",
    skills: [{ name: "Node.js" }, { name: "PHP" }, { name: "MySQL" }, { name: "MongoDB" }, { name: "Spring Boot" }]
  },
  {
    title: "Tools & Cloud",
    skills: [{ name: "Git" }, { name: "Docker" }, { name: "Figma" }, { name: "AWS" }, { name: "Postman" }]
  }
];
