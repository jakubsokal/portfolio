import type { WorkExperience, Education, Testimonial, SkillCategory, NavLink } from "@/types";

export const personalInfo = {
  name: "Jakub Sokal",
  title: "Full Stack Developer",
  tagline: "I build useful web apps. I make friendly React frontends and solid Java/C# backends.",
  currentlyWorkingOn:
    "Shipping small portfolio projects in Java, C# and JavaScript and experimenting with AI orchestration in Python.",
  bio: `Hey. I'm Jakub, a full-stack developer based in Carlow, Ireland. I work with Java, C#, JavaScript and Python and enjoy turning rough ideas into clean, usable applications.
  I care about readable code, thoughtful APIs, and UIs that feel snappy. I'm open to freelance work or full-time roles where I can learn, build, and ship things people actually enjoy.`,
  email: "jakubsokal@email.com",
  github: "https://github.com/jakubsokal",
  linkedin: "https://linkedin.com/in/jakubsokal",
  cvUrl: "/Jakub_Sokal_CV_Portfolio.pdf",
  location: "Carlow, Ireland",
  available: true,
};

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
    ],
  },
];

export const workExperience: WorkExperience[] = [
   {
    id: "1",
    title: "Associate Software Developer",
    company: "AMCS Group",
    location: "Limerick, Ireland",
    startDate: "May 2025",
    endDate: "Aug 2025",
    current: false,
    responsibilities: [
      "Built and maintained C# and .NET applications for internal business processes.",
      "Developed RESTful APIs consumed by frontend React applications.",
      "Collaborated with cross-functional teams to deliver features on time.",
      "Participated in code reviews and contributed to improving team standards.",
    ],
    technologies: ["C#", ".NET", "React", "SQL Server", "Git"],
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
      "Built and maintained C# and .NET applications for internal business processes.",
      "Developed RESTful APIs consumed by frontend React applications.",
      "Collaborated with cross-functional teams to deliver features on time.",
      "Participated in code reviews and contributed to improving team standards.",
    ],
    technologies: ["C#", ".NET", "React", "SQL Server", "Git"],
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
    description: "Studied software engineering, algorithms, databases and web development.",
    achievements: [],
  },
];

export const testimonials: Testimonial[] = [];
