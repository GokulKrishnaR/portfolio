// Portfolio Core Script
// Handles dynamic rendering and page interactivity

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Portfolio Data Dynamic Rendering
    initPortfolioData();

    // 2. Typewriter Effect
    initTypewriter();

    // 3. Interactive Particles Background
    initParticles();

    // 4. Scroll Animations (Reveal) & Active Nav Tracker
    initScrollInteractions();

    // 5. Mobile Menu Toggle
    initMobileNav();

    // 6. Project Filter Logic
    initProjectFilters();

    // 7. Contact Form Handling
    initContactForm();

    // Set Footer Year
    document.getElementById("current-year").textContent = new Date().getFullYear();
});

// ==========================================
// 1. Portfolio Data Rendering
// ==========================================
function initPortfolioData() {
    if (typeof PORTFOLIO_DATA === 'undefined') {
        console.error("PORTFOLIO_DATA is not defined. Make sure portfolio-data.js is loaded first.");
        return;
    }

    const data = PORTFOLIO_DATA;

    // Render Personal Info
    if (data.personalInfo) {
        const info = data.personalInfo;

        // Brand & Logo
        const logoText = document.getElementById("logo-text");
        if (logoText) logoText.textContent = info.shortName || "GKR";

        // Hero Content
        const heroName = document.getElementById("hero-name");
        if (heroName) heroName.textContent = info.name;

        const heroTagline = document.getElementById("hero-tagline-para");
        if (heroTagline) heroTagline.textContent = info.tagline;

        // Resume download button link
        const resumeBtn = document.getElementById("btn-download-resume");
        if (resumeBtn) resumeBtn.href = info.resumeUrl || "assets/resume.pdf";

        // About Section Bio
        const aboutBio = document.getElementById("about-bio");
        if (aboutBio) aboutBio.textContent = info.aboutMe;

        // Contact details
        const emailLink = document.getElementById("contact-email-link");
        if (emailLink) {
            emailLink.href = `mailto:${info.email}`;
            emailLink.textContent = info.email;
        }

        const locText = document.getElementById("contact-location-text");
        if (locText) locText.textContent = info.location;

        // Socials rendering helper
        renderSocials(info);
    }

    // Render Experience Timeline
    const experienceTimeline = document.getElementById("experience-timeline");
    if (experienceTimeline && data.experience) {
        experienceTimeline.innerHTML = data.experience.map(exp => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-card glass">
                    <span class="timeline-date">${exp.duration}</span>
                    <h4>${exp.role}</h4>
                    <div class="institution-company">${exp.company}</div>
                    <p>${exp.details}</p>
                </div>
            </div>
        `).join("");
    }

    // Render Education Timeline
    const educationTimeline = document.getElementById("education-timeline");
    if (educationTimeline && data.education) {
        educationTimeline.innerHTML = data.education.map(edu => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-card glass">
                    <span class="timeline-date">${edu.duration}</span>
                    <h4>${edu.degree}</h4>
                    <div class="institution-company">${edu.institution}</div>
                    <p>${edu.details}</p>
                </div>
            </div>
        `).join("");
    }

    // Render Skills Categories & Items
    const skillsContainer = document.getElementById("skills-categories-container");
    if (skillsContainer && data.skills) {
        skillsContainer.innerHTML = data.skills.map((skillCat, idx) => `
            <div class="skills-card glass reveal" style="transition-delay: ${idx * 100}ms">
                <div class="skills-category-header">
                    <i class="fas ${skillCat.icon || 'fa-check-circle'}"></i>
                    <h3>${skillCat.category}</h3>
                </div>
                <div class="skills-list">
                    ${skillCat.items.map(skill => `<span class="skill-pill">${skill}</span>`).join("")}
                </div>
            </div>
        `).join("");
    }
}

// Render social media buttons in Hero and Contact sections
function renderSocials(info) {
    const heroSocials = document.getElementById("hero-socials");
    const contactSocials = document.getElementById("contact-socials-container");

    let socialsHtml = "";
    if (info.github) {
        socialsHtml += `<a href="${info.github}" target="_blank" class="social-icon" aria-label="GitHub Profile"><i class="fab fa-github"></i></a>`;
    }
    if (info.linkedin) {
        socialsHtml += `<a href="${info.linkedin}" target="_blank" class="social-icon" aria-label="LinkedIn Profile"><i class="fab fa-linkedin"></i></a>`;
    }
    if (info.email) {
        socialsHtml += `<a href="mailto:${info.email}" class="social-icon" aria-label="Send Email"><i class="fas fa-envelope"></i></a>`;
    }

    if (heroSocials) heroSocials.innerHTML = socialsHtml;
    if (contactSocials) contactSocials.innerHTML = socialsHtml;
}


// ==========================================
// 2. Typewriter Effect
// ==========================================
function initTypewriter() {
    const typingSpan = document.getElementById("typing-text");
    if (!typingSpan) return;

    const roles = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.roles)
        ? PORTFOLIO_DATA.roles
        : ["Developer", "Researcher", "Engineer"];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            delay = 50; // Deletion speed is faster
        } else {
            typingSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            delay = 100; // Normal typing speed
        }

        // Finished typing the word
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            delay = 2000; // Hold full word for 2 seconds
        }
        // Finished deleting the word
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 400; // Wait before starting next word
        }

        setTimeout(type, delay);
    }

    // Start typing loop
    setTimeout(type, 500);
}


// ==========================================
// 3. Interactive Particles Background
// ==========================================
function initParticles() {
    const canvas = document.getElementById("particles-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particlesArray = [];

    // Mouse interaction tracking
    const mouse = {
        x: null,
        y: null,
        radius: 120 // Radius of interaction connection
    };

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    window.addEventListener("mouseout", () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Fit canvas to window size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticlePool();
    }

    window.addEventListener("resize", resizeCanvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle Class
    class Particle {
        constructor(x, y, vx, vy, size, color) {
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            // Collision detection with window borders
            if (this.x > canvas.width || this.x < 0) {
                this.vx = -this.vx;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.vy = -this.vy;
            }

            // Move particle
            this.x += this.vx;
            this.y += this.vy;

            this.draw();
        }
    }

    // Populate particle list
    function initParticlePool() {
        particlesArray = [];
        // Scale number of particles based on screen width
        const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 14000), 100);

        for (let i = 0; i < numberOfParticles; i++) {
            const size = Math.random() * 2 + 1; // small subtle dots
            const x = Math.random() * (canvas.width - size * 2) + size;
            const y = Math.random() * (canvas.height - size * 2) + size;

            // Slow velocities for subtle, premium movement
            const vx = (Math.random() - 0.5) * 0.4;
            const vy = (Math.random() - 0.5) * 0.4;

            // Subtle cyan or purple hue with transparency
            const isCyan = Math.random() > 0.4;
            const color = isCyan ? "rgba(6, 182, 212, 0.25)" : "rgba(99, 102, 241, 0.25)";

            particlesArray.push(new Particle(x, y, vx, vy, size, color));
        }
    }

    // Connect particles that are close together with translucent lines
    function connect() {
        let opacityValue = 1;
        const maxDist = 120;

        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a + 1; b < particlesArray.length; b++) {
                const distSq = (particlesArray[a].x - particlesArray[b].x) ** 2 +
                    (particlesArray[a].y - particlesArray[b].y) ** 2;

                if (distSq < maxDist * maxDist) {
                    const dist = Math.sqrt(distSq);
                    opacityValue = 1 - (dist / maxDist);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${opacityValue * 0.08})`; // Violet/Indigo lines
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }

            // Connect to mouse cursor
            if (mouse.x !== null && mouse.y !== null) {
                const mouseDistSq = (particlesArray[a].x - mouse.x) ** 2 +
                    (particlesArray[a].y - mouse.y) ** 2;
                if (mouseDistSq < mouse.radius * mouse.radius) {
                    const dist = Math.sqrt(mouseDistSq);
                    opacityValue = 1 - (dist / mouse.radius);
                    ctx.strokeStyle = `rgba(6, 182, 212, ${opacityValue * 0.12})`; // Cyan lines to mouse
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
        requestAnimationFrame(animate);
    }

    initParticlePool();
    animate();
}


// ==========================================
// 4. Scroll Interactions (Reveal & Nav Tracking)
// ==========================================
function initScrollInteractions() {
    const reveals = document.querySelectorAll(".reveal");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    const navbar = document.getElementById("navbar");

    // Trigger reveals
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Stop observing once animated to keep layout static/performant
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(el => revealObserver.observe(el));

    // Active Navigation Highlighting on Scroll
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute("id");

                navLinks.forEach(link => {
                    const hrefId = link.getAttribute("href").substring(1);
                    if (hrefId === activeId) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }, {
        threshold: 0.35 // Trigger when 35% of the section is visible
    });

    sections.forEach(sec => sectionObserver.observe(sec));

    // Add scroll class to Navbar
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}


// ==========================================
// 5. Mobile Nav Drawer Toggle
// ==========================================
function initMobileNav() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinksContainer = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link, #nav-logo-link");

    if (!menuToggle || !navLinksContainer) return;

    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.classList.toggle("open");
        navLinksContainer.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close mobile nav drawer when any menu item is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("open");
            navLinksContainer.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// ==========================================
// 6. Project Tabs & Rendering Filters
// ==========================================
function initProjectFilters() {
    const filterTabsContainer = document.getElementById("project-filter-tabs");
    const projectsContainer = document.getElementById("projects-container");

    if (!filterTabsContainer || !projectsContainer || typeof PORTFOLIO_DATA === 'undefined') return;

    const projects = PORTFOLIO_DATA.projects;

    // Get unique categories
    const categories = ["All", ...new Set(projects.map(p => p.category))];

    // Render Filter Tabs
    filterTabsContainer.innerHTML = categories.map((cat, idx) => `
        <button class="filter-tab ${idx === 0 ? 'active' : ''}" data-category="${cat}">
            ${cat}
        </button>
    `).join("");

    // Render initial projects (All)
    renderProjects("All");

    // Tab event listener
    const tabs = filterTabsContainer.querySelectorAll(".filter-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const category = tab.getAttribute("data-category");
            renderProjects(category);
        });
    });

    function renderProjects(filterCategory) {
        const filtered = filterCategory === "All"
            ? projects
            : projects.filter(p => p.category === filterCategory);

        projectsContainer.innerHTML = filtered.map((proj, idx) => {
            const githubLink = proj.githubUrl
                ? `<a href="${proj.githubUrl}" target="_blank" class="project-link-icon" aria-label="GitHub Repo"><i class="fab fa-github"></i></a>`
                : '';

            const liveLink = proj.liveUrl
                ? `<a href="${proj.liveUrl}" target="_blank" class="project-link-icon" aria-label="Live Demo"><i class="fas fa-external-link-alt"></i></a>`
                : '';

            return `
                <div class="project-card glass reveal active" style="animation-delay: ${idx * 50}ms">
                    <div class="project-header">
                        <div class="project-icon-folder"><i class="far fa-folder-open"></i></div>
                        <div class="project-links">
                            ${githubLink}
                            ${liveLink}
                        </div>
                    </div>
                    <h3>${proj.title}</h3>
                    <p>${proj.description}</p>
                    <div class="project-tags">
                        ${proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
                    </div>
                </div>
            `;
        }).join("");
    }
}


// ==========================================
// 7. Contact Form simulated backend interaction
// ==========================================
function initContactForm() {
    const form = document.getElementById("contact-form");
    const statusDiv = document.getElementById("form-status");

    if (!form || !statusDiv) return;

    // Inject Web3Forms access key from the config object if defined
    const keyInput = document.getElementById("web3forms-key");
    if (keyInput && typeof CONFIG !== 'undefined') {
        keyInput.value = CONFIG.WEB3FORMS_ACCESS_KEY;
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector(".btn-submit");
        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = `Sending... <i class="fas fa-spinner fa-spin"></i>`;

        statusDiv.className = "form-status";
        statusDiv.textContent = "";

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                statusDiv.classList.add("success");
                statusDiv.innerHTML =
                    `<i class="fas fa-check-circle"></i> Message sent successfully! I'll get back to you soon.`;

                form.reset();
            } else {
                throw new Error(result.message || "Failed to send message.");
            }
        } catch (error) {
            statusDiv.classList.add("error");
            statusDiv.innerHTML =
                `<i class="fas fa-times-circle"></i> ${error.message}`;
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;

            setTimeout(() => {
                statusDiv.textContent = "";
                statusDiv.className = "form-status";
            }, 6000);
        }
    });
}