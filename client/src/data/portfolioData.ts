// Projects data
export const projects = [
  {
    title: "CampusWorks",
    technologies: "NodeJS, Express, React, Tailwind, MongoDB",
    description: "A platform for IUT students, alumni, and faculty to share freelance work, resources and internships.",
    link: "https://github.com/mahdin70/CampusWorks",
    github: "https://github.com/mahdin70/CampusWorks",
  },
  {
    title: "EcoConnect",
    technologies: "NodeJS, Express, React, Tailwind, MongoDB",
    description: "A social network for eco-conscious individuals to create and join sustainability initiatives.",
    link: "https://github.com/mahdin70/EcoConnect",
    github: "https://github.com/mahdin70/EcoConnect",
  },
  {
    title: "VoyageVerse",
    technologies: "NodeJS, Express, React, Tailwind, MongoDB",
    description: "Travel blogging platform with image/video uploads and threaded commenting.",
    link: "https://github.com/mahdin70/VoyageVerse",
    github: "https://github.com/mahdin70/VoyageVerse",
  },
  {
    title: "Audio Transcript Translator",
    technologies: "Streamlit, OpenAI API, LangChain.js",
    description: "Transcribes audio files to text and translates them to multiple languages using OpenAI's GPT-4o-mini and whisper.",
    link: "https://dino-audio.streamlit.app/",
    github: "https://github.com/mahdin70/Audio-Transcript-Translator",
  },
  {
    title: "Mars Rock Classifier",
    technologies: "Python, Streamlit, SVM, OpenCV",
    description:
      "Classifies rock images from Martian terrain into categories such as Basalt, Coal, Granite, Limestone, Marble, Quartzite, and Sandstone",
    link: "https://github.com/mahdin70/Mars-Rock-Classification-using-SVM",
    github: "https://github.com/mahdin70/Mars-Rock-Classification-using-SVM",
  },
  {
    title: "Movie Recommendation App",
    technologies: "Python, Streamlit, Scikit-Learn, NLTK",
    description:
      "This app recommends multiple movies that have similarities in themes and stories with the user-preferred movie. It is built using the TMDB dataset from Kaggle and features a web interface created with Streamlit.",
    link: "https://github.com/mahdin70/Movie-Recommendation-App-Based-On-TMDB-Data",
    github: "https://github.com/mahdin70/Movie-Recommendation-App-Based-On-TMDB-Data",
  },
];

// Skills data
// Programming Languages
export const programmingSkills = [
  { name: "JavaScript/TypeScript", percentage: 90 },
  { name: "Python", percentage: 85 },
  { name: "Java", percentage: 80 },
  { name: "C/C++", percentage: 75 },
];

// Frameworks
export const frameworkSkills = [
  { name: "React", percentage: 90 },
  { name: "NodeJS/Express", percentage: 85 },
  { name: "Tailwind CSS", percentage: 95 },
  { name: "LangChain", percentage: 70 },
];

// Libraries
export const librarySkills = [
  { name: "NumPy", percentage: 85 },
  { name: "Pandas", percentage: 85 },
  { name: "Matplotlib", percentage: 80 },
  { name: "Scikit-Learn", percentage: 75 },
];

// Databases
export const databaseSkills = [
  { name: "MongoDB", percentage: 85 },
  { name: "MySQL", percentage: 80 },
  { name: "Neo4j", percentage: 70 },
];

// Generative AI Skills
export const generativeAISkills = [
  { name: "RAG Pipeline", percentage: 75 },          // Retrieval-Augmented Generation
  { name: "Vector Databases", percentage: 70 },      // e.g., Pinecone, Weaviate
  { name: "Prompt Engineering", percentage: 80 },    // Crafting effective AI prompts
  { name: "Fine-Tuning Models", percentage: 65 },    // e.g., LLMs like BERT, GPT
];

// Testing Tools
export const testingSkills = [
  { name: "Postman", percentage: 85 },
  { name: "JUnit", percentage: 75 },
  { name: "JMeter", percentage: 70 },
];

// Project Management Tools
export const projectManagementSkills = [
  { name: "Jira", percentage: 85 },
  { name: "Trello", percentage: 80 },
  { name: "Notion", percentage: 75 },
];

// Cyber Security Skills
export const cyberSecuritySkills = [
  { name: "OSINT", percentage: 70 },                // Open-Source Intelligence
  { name: "Cryptography", percentage: 65 },
  { name: "Wireshark", percentage: 70 },
];

// UI/UX Design Tools
export const uiUxSkills = [
  { name: "Figma", percentage: 75 },
  { name: "LucidChart", percentage: 70 },
  { name: "Draw.io", percentage: 65 },
];

// Education data
export const education = [
  {
    institute: "Islamic University of Technology (IUT)",
    period: "June 2021 – Present",
    degree: "Bachelor of Science in Software Engineering",
    grade: "CGPA: 3.65 (Upto 6th Semester)"
  },
  {
    institute: "Adamjee Cantonment College",
    period: "July 2018 – April 2020",
    degree: "Higher Secondary School Certificate",
    grade: "GPA: 5.00"
  },
  {
    institute: "Shamsul Haque Khan School and College",
    period: "January 2016 – February 2018",
    degree: "Secondary School Certificate",
    grade: "GPA: 5.00"
  }
];

// Work Experience data
export const workExperience = [
  {
    role: "Research Assistant",
    company: "Independent University, Bangladesh",
    period: "November 2024 - February 2025",
    tasks: [
      "Conducted Human-Computer Interaction (HCI) research focusing on AI usability and ethical considerations.",
      "Performed user interaction surveys for AI-driven technologies."
    ]
  },
  {
    role: "Intern Software Engineer",
    company: "KAZ Software",
    period: "June 2024 – September 2024",
    tasks: [
      "Did Frontend development for P1ston - An USA based Supply Chain and Order Tracking Startup.",
      "Performed Manual Testing for the P1ston's Quote Module",
      "Performed R&D for Magazine.ai, working with LLMs, text extraction, prompt engineering, and chained image generation.",
      "Developed PoC using OpenAI API and LangChain.js for magazine content and image generation."
    ]
  }
];

// Leadership data
export const leadership = [
  {
    role: "Vice President",
    organization: "IUT Computer Society",
    period: "June 2024 - Present",
    description: "Leading operations and managing a team of 30 members."
  },
  {
    role: "Senior Member (Software & Automation)",
    organization: "Project Altair",
    period: "August 2023 – Present",
    description: "Working on Machine Learning applications for Mars Rover Competitions."
  },
  {
    role: "Assistant Head of PR",
    organization: "IUT Robotics Society",
    period: "October 2023 – Present",
    description: "Leading PR collaborations with major organizations."
  },
  {
    role: "International Ambassador",
    organization: "JoinThe.Space",
    period: "September 2023 – Present",
    description: "Assisting the Asia & Oceania Team in space industry projects."
  }
];

// Achievements data
export const achievements = [
  {
    title: "Finalist - Blockchain Olympiad Bangladesh 2023",
    description: "Developed DefTax, a blockchain-based decentralized tax collection system to prevent tax evasion."
  },
  {
    title: "5th Place - Capture the Flag (CodeRush 1.0)",
    description: "Led a team solving forensics, steganography, network security, cryptography, and OSINT challenges."
  },
  {
    title: "Champion - Hult Prize at IUT",
    description: "Developed Impacto, a solution addressing fashion industry waste through a recycling-integrated supply chain."
  },
  {
    title: "Regional Finalist - Hult Prize Mumbai Summit 2023",
    description: "Enhanced Impacto with AR and AI for an improved customer experience."
  }
];

// Open Source Contributions data
export const openSourceProjects = [
  {
    title: "Text Summarizer Model",
    description: "A fine-tuned model for generating concise summaries from long articles and documents.",
    downloads: "1.2K",
    link: "https://huggingface.co/"
  },
  {
    title: "Bengali NLP Model",
    description: "Fine-tuned language model for Bangla text generation and classification tasks.",
    downloads: "850",
    link: "https://huggingface.co/"
  },
  {
    title: "Code Assistant",
    description: "Fine-tuned model for providing coding help and generating boilerplate code.",
    downloads: "2.3K",
    link: "https://huggingface.co/"
  }
];
