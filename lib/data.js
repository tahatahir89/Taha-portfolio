// All content below is drawn directly from the resume and the projects
// already live on the existing portfolio. No fabricated stats, clients,
// employers, or links — replace placeholders (marked TODO) with real
// values before shipping.

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "GSAP",
      "Locomotive.js",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    items: ["MongoDB", "PostgreSQL", "SQL"],
  },
  {
    title: "Tools & Deployment",
    items: ["Git", "GitHub", "Vercel", "Railway", "Cloudinary", "TypeScript"],
  },
];

// Flat list for the infinite marquee — order matters for the loop.
export const marqueeTech = [
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "NestJS",
  "Tailwind CSS",
  "TypeScript",
  "GSAP",
  "Git",
  "GitHub",
  "Vercel",
];

export const projects = [
  {
    slug: "maroof-sweets",
    title: "Maroof Sweets",
    tagline: "Bakery e-commerce platform",
    description:
      "A full-stack e-commerce site built for a bakery business — product catalog, cart, a multi-step checkout, and order tracking, backed by a real database and an admin dashboard.",
    features: [
      "JWT-based customer authentication",
      "Admin dashboard for products, orders and customers",
      "Cloudinary integration for product image uploads",
      "Fully responsive frontend and backend deployed on Vercel with MongoDB Atlas",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    categories: ["Full-Stack", "E-commerce"],
    liveUrl: "https://maroof-sweets-frontend.vercel.app/",
    codeUrl: "https://github.com/tahatahir89/MaroofSweets",
    featured: true,
    status: "live",
  },
  {
    slug: "mt-tutors",
    title: "MT Tutors",
    tagline: "Tutoring platform",
    description:
      "A platform connecting students with tutors, with a dedicated admin panel and a student dashboard for managing enrollment.",
    features: [
      "User authentication for students and admins",
      "Automated PDF admit-card generation for enrolled students",
      "Responsive enrollment and information pages",
      "Component-based React architecture",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "MongoDB", "Cloudinary"],
    categories: ["Full-Stack", "Web Apps"],
    liveUrl: "https://mt-tutors.vercel.app/",
    codeUrl: "https://github.com/tahatahir89/Tutoring-app",
    featured: true,
    status: "live",
  },
  {
    slug: "chat-saas",
    title: "Chat-Saas",
    tagline: "Real-time chat application",
    description:
      "A full-stack chat application with real-time messaging, authentication, and live user-status indicators.",
    features: [
      "Real-time messaging between users",
      "Live online/offline status indicators",
      "Image upload and per-user profile/username via Cloudinary",
      "NestJS + SQL backend",
    ],
    stack: ["NestJS", "TypeScript", "SQL", "Cloudinary"],
    categories: ["Full-Stack", "Web Apps"],
    liveUrl: "https://chat-saas-ppmv.vercel.app",
    codeUrl: "https://github.com/tahatahir89/Chat-saas",
    featured: true,
    status: "live",
  },
  {
    slug: "fodie-lover",
    title: "Fodie.lover",
    tagline: "Business website rebuild",
    description:
      "A front-end rebuild for a driving range, crazy golf, and café venue, turned into a fully mobile-responsive site.",
    features: [
      "Smooth-scroll animations with Locomotive.js and GSAP",
      "Fully responsive layout across devices",
      "Rebuilt from the ground up for visual flow and engagement",
    ],
    stack: ["GSAP", "Locomotive.js", "Vanilla JavaScript", "Responsive Design"],
    categories: ["Frontend", "Other"],
    liveUrl: "https://tahatahir89.github.io/Fodie-lover/",
    codeUrl: "https://github.com/tahatahir89/Fodie-lover",
    featured: false,
    status: "live",
  },
  {
    slug: "coffee-with-taha",
    title: "Coffee with Taha",
    tagline: "Animated café landing page",
    description:
      "A warm, animated landing page for a coffee brand concept, focused on mood, imagery, and smooth scroll interactions.",
    features: ["Scroll-based interactions", "Custom animation timing", "Fully static, fast-loading build"],
    stack: ["HTML", "CSS", "JavaScript", "Animations"],
    categories: ["Frontend", "Other"],
    liveUrl: "https://tahatahir89.github.io/Coffee-with-taha/",
    codeUrl: "https://github.com/tahatahir89/Coffee-with-taha",
    featured: false,
    status: "live",
  },
  {
    slug: "animated-web-iii",
    title: "Animated Web III",
    tagline: "Scroll & motion study",
    description:
      "An exploration in scroll-based animation and interaction design, built to push what a plain HTML/CSS/JS site can feel like.",
    features: ["GSAP ScrollTrigger sequencing", "Custom cloud-rendering visual effect", "No framework — pure HTML/CSS/JS"],
    stack: ["GSAP", "ScrollTrigger", "CSS"],
    categories: ["Frontend", "Other"],
    liveUrl: "https://tahatahir89.github.io/ANIMATED-WEB-3/",
    codeUrl: "https://github.com/tahatahir89/ANIMATED-WEB-3",
    featured: false,
    status: "live",
  },
];

export const projectFilters = ["All", "Full-Stack", "E-commerce", "Web Apps", "Frontend", "Other"];

export const timeline = [
  {
    period: "2022",
    title: "Started with HTML & CSS",
    description:
      "Began learning web development from the ground up — HTML structure, the CSS box model, Flexbox, and responsive layout fundamentals.",
  },
  {
    period: "2022",
    title: "JavaScript & interactivity",
    description:
      "Moved into JavaScript to bring pages to life, then picked up animation libraries like GSAP and Locomotive.js to build scroll-driven, interactive front ends.",
  },
  {
    period: "Ongoing",
    title: "Frontend frameworks",
    description:
      "Adopted React and Vite for component-based development, and Tailwind CSS / Bootstrap for building responsive UI faster and more consistently.",
  },
  {
    period: "Ongoing",
    title: "Full-stack development",
    description:
      "Extended into the backend with Node.js, Express, and NestJS — building REST APIs, JWT authentication, and MongoDB / SQL data layers for real applications.",
  },
  {
    period: "Ongoing",
    title: "Shipping real projects",
    description:
      "Built and deployed complete products end to end — Maroof Sweets, MT Tutors, and Chat-Saas — handling everything from UI to database design to production deployment on Vercel and Railway.",
  },
  {
    period: "Now",
    title: "Looking ahead",
    description:
      "Continuing to learn TypeScript and NestJS in more depth while looking for an internship or junior web developer role to grow inside a professional team.",
  },
];

export const services = [
  {
    title: "E-commerce Websites",
    description:
      "Online stores with product catalogs, cart and checkout flows, order tracking, and an admin dashboard to manage it all.",
  },
  {
    title: "Business Websites",
    description:
      "Professional, responsive websites for startups and small businesses that need a credible presence online.",
  },
  {
    title: "Personal Portfolio Websites",
    description:
      "Modern, animated portfolios for developers, professionals, and creators who want their work to stand out.",
  },
  {
    title: "Custom Web Applications",
    description:
      "Applications built around specific business logic — dashboards, booking systems, platforms with authentication and roles.",
  },
  {
    title: "Full-Stack Development",
    description:
      "Frontend, backend, database, and API integration handled together, deployed and ready for production use.",
  },
];

export const projectTypeOptions = [
  "E-commerce Store",
  "Personal Portfolio",
  "Startup Business Website",
  "Business Website",
  "Custom Web Application",
  "Other",
];
