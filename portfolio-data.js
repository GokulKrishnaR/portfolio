// Centralized Portfolio Data
// Edit this file to easily update your portfolio content!

const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Gokul Krishna R",
    shortName: "GKR",
    tagline: "MSc Computer Science (Data Science) • AI Developer • Data Analyst • ML Enthusiast",
    aboutMe: "I am currently pursuing an MSc in Computer Science with a specialization in Data Science at CUSAT. My interests lie at the intersection of Machine Learning, Deep Learning, Federated Learning, Machine Unlearning, Data Analytics, NLP, and AI applications. I enjoy building intelligent systems and solving real-world challenges through data-driven solutions.",
    email: "gokulkrishnar04@gmail.com",
    linkedin: "https://www.linkedin.com/in/GokulKrishnaR04",
    github: "https://github.com/GokulKrishnaR",
    resumeUrl: "assets/resume.pdf",
    location: "Kochi, Kerala, India"
  },

  // Roles for the dynamic typewriter typing effect in the hero section
  roles: [
    "Machine Learning Engineer",
    "Data Analyst",
    "AI Developer",
    "Federated Learning Researcher"
  ],

  // Education Section
  education: [
    {
      degree: "MSc Computer Science (Data Science)",
      institution: "Cochin University of Science and Technology (CUSAT)",
      duration: "2025 – 2027",
      details: "Specializing in advanced data structures, machine learning theory, big data analytics, and neural networks."
    },
    {
      degree: "BSc Computer Applications",
      institution: "Sacred Heart College",
      duration: "2022 – 2025",
      details: "Acquired fundamental computing skills in database management, software engineering, and object-oriented programming."
    }
  ],

  // Professional Experience Section
  experience: [
    {
      role: "Data Analytics Intern",
      company: "IBM SkillsBuild",
      duration: "December 2024",
      details: "Analyzed large-scale datasets, performed data visualization, and extracted insights for business intelligence operations."
    },
    {
      role: "Python Intern",
      company: "Klickwents Infosolutions",
      duration: "May 2024",
      details: "Developed automation scripts and backend components using Python, contributing to project workflows."
    }
  ],

  // Skills categorized by domain. Each category has an icon (FontAwesome brand/solid) and a list of skills.
  skills: [
    {
      category: "Programming Languages",
      icon: "fa-code",
      items: ["Python", "C", "C++", "SQL"]
    },
    {
      category: "AI & Machine Learning",
      icon: "fa-brain",
      items: ["Machine Learning", "Deep Learning", "Federated Learning", "Machine Unlearning", "NLP", "LLMs"]
    },
    {
      category: "Libraries & Frameworks",
      icon: "fa-cubes",
      items: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Django", "Gradio"]
    },
    {
      category: "Data Science & Analytics",
      icon: "fa-chart-pie",
      items: ["Data Analytics", "Feature Engineering", "Data Visualization", "Predictive Modeling"]
    }
  ],

  // Projects. 'category' is used for the interactive tab filtering system.
  projects: [
    {
      title: "Federated Learning & Machine Unlearning",
      description: "Implemented and evaluated machine unlearning techniques including Gradient Ascent, Negative Gradient Plus (NG+), Loss-NG+, and Fisher Forgetting on MNIST and CIFAR datasets in federated systems.",
      category: "AI & ML",
      tags: ["PyTorch", "Federated Learning", "Machine Unlearning", "MNIST", "CIFAR"],
      githubUrl: "https://github.com/GokulKrishnaR", // General profile fallback or project link
      liveUrl: ""
    },
    {
      title: "Auto Traffic – Traffic Sign Recognition",
      description: "A deep learning system capable of classifying traffic signs with high accuracy. Built using a Convolutional Neural Network (CNN) in TensorFlow and trained on the GTSRB dataset.",
      category: "AI & ML",
      tags: ["TensorFlow", "CNN", "Deep Learning", "Computer Vision"],
      githubUrl: "https://github.com/GokulKrishnaR/autotraffic-traffic-sign-recognizer",
      liveUrl: ""
    },
    {
      title: "AI Resume & Portfolio Builder",
      description: "An LLM-powered application that generates ATS-friendly resumes and responsive personal portfolio websites based on simple text prompts.",
      category: "Web Apps",
      tags: ["LLMs", "Python", "Gradio", "ATS Optimizer"],
      githubUrl: "https://github.com/GokulKrishnaR/ai-resume-portfolio-builder",
      liveUrl: ""
    },
    {
      title: "Sales Forecasting & Analysis",
      description: "An end-to-end data analytics and predictive modeling project forecasting retail sales patterns using historical sales data and regression algorithms.",
      category: "Data Science",
      tags: ["Machine Learning", "Pandas", "Scikit-Learn", "Data Analytics"],
      githubUrl: "https://github.com/GokulKrishnaR/CODSOFT",
      liveUrl: ""
    }
  ]
};
