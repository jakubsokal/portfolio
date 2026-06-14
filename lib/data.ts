import type { WorkExperience, Education, Testimonial, SkillCategory, NavLink } from "@/types";

export const personalInfo = {
  name: "Jakub Sokal",
  title: "Software Engineer",
  tagline: `I build full-stack applications with a strong focus on the backend. I care about clean architecture, 
  reliable APIs, and shipping code that holds up in production.`,
  currentlyWorkingOn:
    `Raft Consensus Engine, a distributed consensus algorithm built from scratch in Go. Implements leader election, log 
    replication, and fault tolerance across multiple nodes. Includes chaos testing that deliberately drops network messages 
    and kills servers mid-operation to prove correctness under failure, not just happy paths.`,
  bio: `Hey. I'm Jakub, a software engineer based in Carlow, Ireland. I work with Java, C#, JavaScript and Python and 
  enjoy turning rough ideas into clean, usable applications. I care about readable code, solid architecture, thoughtful APIs, 
  and UIs that feel snappy. I'm open to freelance work or full-time roles where I can learn, build, and ship live products.`,
  email: "jakubsokal13@gmail.com",
  github: "https://github.com/jakubsokal",
  linkedin: "https://linkedin.com/in/jakub-sokal",
  cvUrl: "/Jakub_Sokal_CV_Portfolio.pdf",
  location: "Carlow, Ireland",
  available: true,
};

export const featuredProjects = [
  {
    name: "Campus2Company",
    description: "A microservices-based platform connecting students, universities, and businesses through industry-led final year projects.",
    bullets: [
      "Designed a Java Spring Boot microservices architecture with an API gateway to decouple services.",
      "Implemented secure, stateless session management using JWT authentication.",
      "Containerised core system services using Docker to ensure consistent deployments across environments.",
      "Developed a responsive React frontend supporting interactive workflows for multiple user roles.",
      "Integrated Kafka for async event-driven messaging between microservices.",
      "Built a full JWT auth system with access tokens, refresh tokens, and long-lived tokens for session management across services.",
    ],
    github: "https://github.com/Campus2Company/campus2company",
    language: "Java",
  },
  {
    name: "SimOrch",
    description: "A domain-specific multi-agent framework built to simulate and automate Requirements Engineering elicitation sessions.",
    bullets: [
      "Developed specialised agent personas to conduct interactive, real-time requirement extraction sessions.",
      "Engineered a dual-layered evaluation engine using SBERT semantic embeddings and TF-IDF cosine similarity.",
      "Built an LLM integration layer supporting OpenAI, Anthropic, Gemini, and Groq alongside local inference via Ollama.",
      "Created a React UI for scenario monitoring and real-time agent metrics tracking.",
    ],
    github: "https://github.com/jakubsokal/SimOrch-Framework",
    language: "Python",
  },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "code",
    skills: [
      { name: "Java", icon: "java", color: "#ED8B00" },
      { name: "C#", icon: "csharp", color: "#239120" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "SQL", icon: "postgresql", color: "#336791" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "layers",
    skills: [
      { name: "Spring Boot", icon: "springboot", color: "#6DB33F" },
      { name: "ASP.NET Core", icon: "dotnet", color: "#512BD4" },
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextdotjs", color: "#000000" },
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Angular", icon: "angular", color: "#DD0031" },
      { name: "Kafka", icon: "kafka", color: "#231F20" },
      { name: "Redis", icon: "redis", color: "#D82C20" },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "wrench",
    skills: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "#181717" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Linux", icon: "linux", color: "#FCC624" },
      { name: "VS Code", icon: "visualstudiocode", color: "#007ACC" },
      { name: "IntelliJ", icon: "intellijidea", color: "#000000" },
      { name: "Postman", icon: "postman", color: "#FF6C37" },
      { name: "Azure DevOps", icon: "azuredevops", color: "#0078D4" },
      { name: "Visual Studio", icon: "visualstudio", color: "#5C2D91" },
    ],
  },
  {
    category: "Databases & AI",
    icon: "database",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "PyTorch", icon: "pytorch", color: "#EE4C2C" },
      { name: "Hugging Face", icon: "huggingface", color: "#FFD21E" },
      { name: "LangChain", icon: "langchain", color: "#F9A825" },
    ],
  },
];

export const workExperience: WorkExperience[] = [
   {
    id: "1",
    title: "Associate Software Developer",
    company: "AMCS Group",
    location: "Limerick, Ireland",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    current: false,
    responsibilities: [
      "Designed and delivered production Stripe Card and SEPA payment integrations end-to-end.",
      "Resolved a critical double-charge defect in the live payment flow impacting customer billing accuracy.",
      "Optimised a high-volume transaction endpoint processing 5,000+ records, reducing response time by 40%.",
      "Built Azure Data Factory pipelines for ETL processes and managed CI/CD deployments across Azure environments.",
    ],
    technologies: ["C#", ".NET", "Angular", "SQL Server", "Git", "Azure Data Factory", "Azure DevOps"],
  },
  {
    id: "2",
    title: "Intern Software Developer",
    company: "AMCS Group",
    location: "Limerick, Ireland",
    startDate: "May 2024",
    endDate: "Jan 2025",
    current: false,
    responsibilities: [
      "Established unit test coverage across core payment and API components, writing 500+ tests.",
      "Shipped bug fixes and feature enhancements to the ACI Cards payment integration during an active refactoring cycle.",
      "Traced a data integrity defect in the Payment Express feature to an upstream service misappending results.",
      "Extended and maintained 30+ RESTful APIs across live payment and data flows.",
    ],
    technologies: ["C#", ".NET", "Angular", "SQL Server", "Git", "Azure DevOps", "Postman", "NUnit"],
  },
];

export const education: Education[] = [
  {
    id: "1",
    degree: "BSc Computer Science",
    field: "Computer Science",
    institution: "University of Limerick",
    location: "Ireland",
    startYear: 2022,
    endYear: 2026,
    current: false,
    description: "A software-intensive systems degree covering programming languages, operating systems, database technologies, computer networks, systems analysis and design, and an eight-month industry co-op placement.",
    achievements: [],
  },
];

export const testimonials: Testimonial[] = [];
