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
    description: "Executing administrative tasks, managing events, and leading a volunteer team of 30 members to ensure smooth operations.",
  },
  {
    role: "Senior Member (Software and Automation Sub Team)",
    organization: "Project Altair",
    period: "August 2023 - December 2024",
    description: "Contributing Machine Learning applications to the Software and Science Exploration Sub-Team for Mars Rover Competitions.",
  },
  {
    role: "Assistant Head of PR and Outreach",
    organization: "IUT Robotics Society",
    period: "October 2023 - November 2024",
    description: "Planning PR activities and leading a 12-member team to collaborate with renowned organizations.",
  },
  {
    role: "International Ambassador of Bangladesh",
    organization: "JoinThe.Space",
    period: "September 2023 - Present",
    description: "Serving in the Asia and Oceania Team to facilitate Central Team activities in the space industry.",
  },
  {
    role: "Campus Coordinator",
    organization: "Orange Corners Bangladesh",
    period: "March 2023 - February 2024",
    description:
      "Facilitating campus activities to promote the entrepreneurship ecosystem for an initiative by the Kingdom of Netherlands.",
  },
  {
    role: "Instructor and Academic Content Developer",
    organization: "EduHive",
    period: "February 2022 - December 2022",
    description: "Teaching 500+ students via live and recorded classes, providing feedback, and developing academic content.",
  },
];

export const achievements = [
  {
    role: "Finalist",
    organization: "Blockchain Olympiad Bangladesh",
    period: "2023",
    tasks: [
      "Worked on the tax evasion problem in Bangladesh due to a weak centralized tax system.",
      "Proposed DefTax, a blockchain-based solution to decentralize tax collection and prevent evasion.",
    ],
  },
  {
    role: "5th Place",
    organization: "Capture the Flag Competition (CodeRush 1.0)",
    period: "2023", // Assumed 2023; adjust if incorrect
    tasks: [
      "Solved challenges in computer forensics, steganography, network packet analysis, cryptography, and OSINT.",
      "Served as the team leader.",
    ],
  },
  {
    role: "Champion",
    organization: "Hult Prize at Islamic University of Technology",
    period: "2023", // Assumed 2023; adjust if incorrect
    tasks: [
      "Addressed waste issues in the global fashion industry and environmental degradation.",
      "Proposed Impacto, a startup integrating supply chain and recycling solutions.",
      "Contributed to the technical architecture and system design.",
    ],
  },
  {
    role: "Regional Finalist",
    organization: "Hult Prize Mumbai Summit",
    period: "2023",
    tasks: [
      "Presented Impacto to solve fashion industry waste in Bangladesh.",
      "Developed a mobile app with AR and AI to enhance recycling and customer experience.",
    ],
  },
  {
    role: "60% Scholarship Winner",
    organization: "ISCEA PTAK Global Supply Chain Case Competition",
    period: "2023",
    tasks: [
      "Tackled energy consumption and power disruption in Bangladesh’s RMG sector.",
      "Proposed a Joint Energy Manufacturing Facility, Logistics Optimization System, and Renewable Energy Microgrid System.",
      "Worked on the technical architecture of the solution.",
    ],
  },
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
