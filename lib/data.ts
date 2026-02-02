export const technicalProjects = [
  {
    id: "cakra-news",
    title: "Cakra News",
    subtitle: "Full-Stack News Platform",
    description: "Built a complete news website with admin dashboard, category management, and responsive design. Implemented full CRUD operations and dynamic content delivery system.",
    tech: ["Laravel", "PHP", "SQLite", "Tailwind CSS", "HTML/CSS"],
    highlights: [
      "Admin panel with authentication",
      "Dynamic news categorization",
      "Responsive design implementation",
      "Real-time content management"
    ],
    links: {
      github: "https://github.com/khrunisafadh/cakranews-fullstack.git",
      report: "https://docs.google.com/document/d/1_SXItWu87dnM5tLUCDtCklnu4IjYeCkvX2tApTu8k28/edit?tab=t.0"
    },
    image: "/images/projects/cakra-news.png"
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    subtitle: "Console-Based Application",
    description: "Developed a robust inventory system using C programming with file-based data persistence. Managed stock operations for retail business use case.",
    tech: ["C Programming", "File I/O", "Data Structures", "CLI"],
    highlights: [
      "Core CRUD operations for inventory",
      "File handling with .txt data storage",
      "Stock tracking and reporting system",
      "Efficient data structure implementation"
    ],
    links: {
      github: "https://github.com/khrunisafadh/mascoolin-inventory-c-project.git",
      demo: "https://www.youtube.com/watch?v=wXTPRb6TaxQ"
    },
    image: "/images/projects/inventory.png"
  },
  {
    id: "system-analysis",
    title: "System Analysis & Redesign",
    subtitle: "kegiatan.upnvj.ac.id Evaluation",
    description: "Conducted comprehensive system analysis using PIECES framework. Performed user research with 30+ respondents and statistical validation using SPSS.",
    tech: ["SPSS", "System Analysis", "UX Research", "PIECES Framework"],
    highlights: [
      "Quantitative analysis with SPSS",
      "User satisfaction evaluation",
      "System improvement recommendations",
      "Formal research documentation"
    ],
    links: {
      report: "https://docs.google.com/document/d/1eOb8VYNOvCnVo-KzenEUQ8LEQzu8Mt2bMNmhso_cnbU/edit?tab=t.0",
      prototype: "https://t.maze.co/247083273?guerilla=true"
    },
    image: "/images/projects/system-analysis.png"
  },
  {
    id: "ubuntu-remaster",
    title: "Custom Ubuntu Remastering",
    subtitle: "Operating System Customization",
    description: "Customized and remastered Ubuntu ISO using Cubic. Personalized distribution with pre-installed applications and system configurations.",
    tech: ["Linux", "Ubuntu", "Cubic", "VirtualBox", "Bash"],
    highlights: [
      "ISO customization with added software",
      "UI personalization and theming",
      "Successful virtualization testing",
      "System configuration management"
    ],
    links: {
      demo: "https://www.youtube.com/watch?v=ylwXdXjrr8g",
      report: "https://docs.google.com/document/d/1n-ujH66wjhLxEZRPGnq0Pg5dUyDl3imNfyzNrzZFNI4/edit?usp=sharing"
    },
    image: "/images/projects/ubuntu.png"
  },
  {
    id: "netflix-analytics",
    title: "Netflix Content Analytics",
    subtitle: "Business Intelligence Dashboard",
    description: "Created interactive Tableau dashboards analyzing Netflix content trends, audience segmentation, and production patterns using Kaggle dataset.",
    tech: ["Tableau", "Data Analysis", "Business Intelligence"],
    highlights: [
      "Multi-dimensional data visualization",
      "Content distribution analysis",
      "Trend identification and insights",
      "Interactive dashboard design"
    ],
    links: {
      dashboard: "https://public.tableau.com/views/Kel5BI/DASHBOARD?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    },
    image: "/images/projects/netflix.png"
  }
];

export const creativeProjects = [
  {
    id: "readrite",
    title: "ReadRite - Book Review App",
    type: "UI/UX Design",
    description: "Designed a mobile application for book discovery and community engagement. Conducted user research, created wireframes, and built interactive prototypes.",
    tools: ["Figma", "User Research", "Prototyping"],
    image: "/images/creative/readrite.png",
    link: "#"
  },
  {
    id: "maxim",
    title: "Maxim App Redesign",
    type: "UI/UX & Project Management",
    description: "Led UI/UX redesign for ride-sharing platform services. Managed complete project documentation including WBS, risk analysis, and stakeholder management.",
    tools: ["Figma", "Project Management", "Draw.io"],
    image: "/images/creative/maxim.png",
    link: "https://www.figma.com/proto/eZwxH03tQRRH4j1xFUyUgJ/IMK-KEL-8?node-id=3-1935&starting-point-node-id=17%3A98&t=tFU7fYA2KjPSZYuP-1"
  },
  {
    id: "smf-design",
    title: "SMF-IK Social Media Design",
    type: "Visual Design",
    description: "Created consistent Instagram content and visual campaigns for university student senate. Maintained brand guidelines and design system across publications.",
    tools: ["Canva", "Adobe Illustrator", "Brand Design"],
    image: "/images/creative/smfik.png",
    link: "#"
  },
  {
    id: "video-editing",
    title: "Event Video Production",
    type: "Video Editing",
    description: "Produced promotional and recap videos for campus events. Handled full editing workflow from footage selection to final export.",
    tools: ["Video Editing", "Content Production"],
    image: "/images/creative/video.png",
    link: "#"
  }
];

export const skills = {
  backend: [
    "PHP", "Laravel", "C Programming", "Python", "SQL", 
    "SQLite", "MySQL", "REST API", "File I/O"
  ],
  frontend: [
    "HTML/CSS", "Tailwind CSS", "JavaScript", "Responsive Design"
  ],
  tools: [
    "Git & GitHub", "VS Code", "Laragon", "VirtualBox", "Linux/Ubuntu"
  ],
  analysis: [
    "SPSS", "System Analysis", "PIECES Framework", 
    "UX Research", "Business Intelligence", "Tableau"
  ],
  creative: [
    "Figma", "Canva", "Adobe Illustrator", "UI/UX Design", 
    "Video Editing", "Prototyping"
  ]
};

export const socialLinks = {
  email: "khoirunnisafadilah05@gmail.com",
  github: "https://github.com/khrunisafadh",
  linkedin: "https://www.linkedin.com/in/khoirunnisa-fadilah-a349ba201",
  instagram: "https://instagram.com/khrunisafadh"
};

export const certificates = [
  // Technical Certificates
   {
    id: "cert-tech-1",
    title: "Data Analytics Specialist",
    issuer: "Certiport",
    date: "December 2024",
    description: "Completed comprehensive data analytics certification covering data interpretation, digital communication, critical thinking, and collaborative problem-solving.",
    skills: ["Data Analytics", "Data Interpretation", "Critical Thinking", "Problem Solving"],
    image: "/images/certificates/data-analytics-certif.jpg",
    credentialUrl: "https://drive.google.com/file/d/1sVh6BvZaPXluFnYMIj_-ZwdaVOCpCjFC/view?usp=sharing",
    category: "technical" as const
  },
  {
    id: "cert-tech-2",
    title: "21st Century Employability Skills Program - Advanced",
    issuer: "Wadhwani Foundation",
    date: "April 2024",
    description: "Completed advanced employability skills training focusing on communication, collaboration, and digital literacy.",
    skills: ["Communication", "Collaboration", "Digital Literacy"],
    image: "/images/certificates/employability-certif.jpg",
    credentialUrl: "https://drive.google.com/file/d/1g4G5lmxXBh50qe4TDb9uN7Q_U-8-4972/view?usp=sharing",
    category: "technical" as const
  },
  {
    id: "cert-tech-3",
    title: "Short Class - Website Development: Back End",
    issuer: "MySkill",
    date: "October 2025",
    description: "Completed back-end web development course covering server-side programming, database management, and API integration.",
    skills: ["JavaScript", "Database Management", "API Integration"],
    image: "/images/certificates/website-dev-certif.jpg",
    credentialUrl: "https://drive.google.com/file/d/1v89nihirJeU9wY_EwBHocOx_xUDrbvi8/view?usp=sharing",
    category: "technical" as const
  },
  // Organizational Certificates
  {
    id: "cert-organizational-1",
    title: "Expert Staff of the Communications and Information Bureau",
    issuer: "SMF-IK 2024/2025",
    date: "January 2025",
    description: "Recognized for expertise in communication and information management within the Faculty Student Senate.",
    skills: ["Communication", "Information Management", "Teamwork"],
    image: "/images/certificates/tenaga-ahli-certif.jpg",
    credentialUrl: "https://drive.google.com/file/d/1ByBfVQUlD4Na2QYl8Z8lHxr2K5mgG6vx/view?usp=sharing",
    category: "organizational" as const
  },
  {
    id: "cert-organizational-2",
    title: "Staff of Marketing & Public Relations",
    issuer: "Veteran Premier Cup 2023",
    date: "November 2023",
    description: "Contributed to marketing and public relations efforts for a major university sports event.",
    skills: ["Marketing", "Public Relations", "Event Promotion"],
    image: "/images/certificates/vpc-marketing-certif.jpg",
    credentialUrl: "https://drive.google.com/file/d/1RSae375-8uMu0sYCw34Y1pv_3ckGuCDQ/view?usp=sharing",
    category: "organizational" as const
  },
  {
    id: "cert-organizational-3",
    title: "Staff of Public Relations, Publication, and Documentation Division",
    issuer: "PEMIRA FIK UPNVJ 2023",
    date: "November 2023",
    description: "Contributed to public relations, publication, and documentation efforts for the Faculty Student Parliament.",
    skills: ["Public Relations", "Documentation", "Event Management"],
    image: "/images/certificates/pemira-certif.jpg",
    credentialUrl: "https://drive.google.com/file/d/13aCvkXnVMpfujh1egWtWeb0sTw5rnIet/view?usp=sharing",
    category: "organizational" as const
  }
]