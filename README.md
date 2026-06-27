# Modern Interactive Personal Portfolio

A premium, dynamic, and dark-themed personal portfolio website built using vanilla **HTML5**, **CSS3**, and **JavaScript (ES6+)**. The website is designed to be fully customizable, high-performance, and deployable instantly on **GitHub Pages**. 

All visual content (biography, education history, work experience, skills, and projects) is dynamically driven from a single configuration file, making updates straightforward.

## 🚀 Live Demo
Visit the live site: [gokulkrishnar.github.io/portfolio/](https://gokulkrishnar.github.io/portfolio/)

---

## ✨ Features

- **Dynamic Content Injection**: Update your portfolio by editing a single configuration file ([portfolio-data.js](portfolio-data.js)) without touching HTML tags.
- **Interactive Canvas Backdrop**: A lightweight, high-performance HTML5 canvas particle background that moves organically and draws glowing cyan trails to the visitor's cursor.
- **Typewriter Role Cycle**: Dynamically types and erases customizable career roles in the hero section.
- **Project Filter System**: Instantly filter projects by domain (e.g. AI & ML, Web Apps, Data Science) using smooth transitions.
- **Web3Forms Contact Integration**: A fully functional AJAX-powered contact form that validates input and delivers messages directly to your inbox using Web3Forms.
- **Ambient Neon Glows**: Smooth glassmorphic containers overlaying subtle, blurred cyan and purple backdrops.
- **Responsive Layout**: Designed for mobile, tablet, and desktop viewports, with a slide-out drawer menu for mobile navigation.
- **Clean Scroll reveals**: Custom scroll intersections that fade elements into view gracefully.

---

## 🛠️ Project Structure

```bash
├── index.html          # Semantic HTML skeleton & Web3Forms integration
├── style.css           # Custom CSS variables, glassmorphic styling, & responsiveness
├── portfolio-data.js   # Centralized portfolio data (Edit this to update content!)
├── script.js           # Rendering engine, particles canvas, and form handler
└── assets/
    ├── logo.svg        # Site favicon & brand representation
    └── resume.pdf      # Downloadable CV asset
```

---

## ⚙️ How to Update Your Portfolio

You do not need to edit `index.html` to add new experience or projects. Simply open [portfolio-data.js](portfolio-data.js) and modify the Javascript object keys:

### 1. Personal Information & Socials
Modify the `personalInfo` block to update your name, tagline, email, locations, and social media handles:
```javascript
personalInfo: {
  name: "Gokul Krishna R",
  shortName: "GKR",
  tagline: "...",
  email: "gokulkrishnar04@gmail.com",
  linkedin: "https://www.linkedin.com/in/GokulKrishnaR04",
  github: "https://github.com/GokulKrishnaR",
  resumeUrl: "assets/resume.pdf",
  location: "Kochi, Kerala, India"
}
```

### 2. Typewriter Roles
Edit strings in the `roles` array to change the roles typed out in the hero section:
```javascript
roles: [
  "Machine Learning Engineer",
  "Data Analyst",
  "AI Developer",
  "Federated Learning Researcher"
]
```

### 3. Timeline (Experience & Education)
Add or remove entries from the `experience` and `education` lists. They render automatically into a side-by-side vertical timeline layout:
```javascript
experience: [
  {
    role: "Data Analytics Intern",
    company: "IBM SkillsBuild",
    duration: "December 2024",
    details: "..."
  }
]
```

### 4. Technical Skills
Group your capabilities into domains. Each category supports custom FontAwesome icons (e.g. `fa-code`, `fa-brain`, `fa-cubes`):
```javascript
skills: [
  {
    category: "AI & Machine Learning",
    icon: "fa-brain",
    items: ["Machine Learning", "Deep Learning", "NLP"]
  }
]
```

### 5. Projects & Tags
Add your project showcases. Ensure the `category` matches the group filter tabs you want to display:
```javascript
projects: [
  {
    title: "AI Resume & Portfolio Builder",
    description: "...",
    category: "Web Apps",
    tags: ["LLMs", "Python", "Gradio"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  }
]
```

---

## 📬 Contact Form & API Key Configuration

To keep your Web3Forms `access_key` secure and hidden from public Git history:

### 1. Local Development Setup
1. Create a `config.js` file in your root folder (this file is already added to `.gitignore` and won't be pushed):
   ```javascript
   const CONFIG = {
       WEB3FORMS_ACCESS_KEY: "YOUR_WEB3FORMS_ACCESS_KEY"
   };
   ```
2. The site will automatically read this key and bind it to the contact form when running locally.

### 2. GitHub Pages Setup (Secure Deployment)
To make sure the form works on the live site without committing your key:
1. Go to your repository settings on GitHub ➔ **Settings** ➔ **Secrets and variables** ➔ **Actions**.
2. Click **New repository secret**.
3. Add the secret:
   - **Name**: `WEB3FORMS_KEY`
   - **Value**: `YOUR_WEB3FORMS_ACCESS_KEY`
4. Go to **Settings** ➔ **Pages**.
5. Under **Build and deployment** ➔ **Source**, change the dropdown selection from **Deploy from a branch** to **GitHub Actions**.

Whenever you push code to `main`, the GitHub Actions workflow will build the site, securely inject the key from your secrets, and deploy it to GitHub Pages.


---

## 📄 License
This repository is open source and available under the [MIT License](LICENSE).

---
© 2026 Gokul Krishna R.
