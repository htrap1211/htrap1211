const input = document.getElementById('input');
const output = document.getElementById('output');
const terminal = document.getElementById('terminal');

let commandHistory = [];
let historyIndex = -1;

const ASCII_LOGO = `
██╗  ██╗████████╗██████╗  █████╗ ██████╗ 
██║  ██║╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗
███████║   ██║   ██████╔╝███████║██████╔╝
██╔══██║   ██║   ██╔══██╗██╔══██║██╔═══╝ 
██║  ██║   ██║   ██║  ██║██║  ██║██║     
╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     
`;

const commands = {
    help: {
        description: 'Show available commands',
        execute: () => {
            return `
<span class="info">Available Commands:</span>

  <span class="success">about</span>       - Learn about me
  <span class="success">skills</span>      - View my technical skills
  <span class="success">projects</span>    - See my projects
  <span class="success">experience</span>  - View work experience
  <span class="success">education</span>   - Academic background
  <span class="success">contact</span>     - Get in touch
  <span class="success">social</span>      - Social media links
  <span class="success">resume</span>      - Download resume
  <span class="success">clear</span>       - Clear terminal
  <span class="success">matrix</span>      - Enter the matrix
  <span class="success">hack</span>        - Initiate hack sequence
  <span class="success">help</span>        - Show this message

Type any command to get started!
`;
        }
    },

    about: {
        description: 'Learn about me',
        execute: () => {
            return `
<span class="info">╔════════════════════════════════════════════════════════╗</span>
<span class="info">║</span>  <span class="success">IDENTITY PROFILE</span>                                    <span class="info">║</span>
<span class="info">╚════════════════════════════════════════════════════════╝</span>

<span class="success">Name:</span>        Parth Rathi
<span class="success">Role:</span>        Computer Science Master's Student
<span class="success">Location:</span>    University of Stuttgart, Germany
<span class="success">Status:</span>      Building systems that don't exist yet

<span class="info">About:</span>
I'm a Full-Stack Developer, ML Engineer, and OSINT Specialist with 
a passion for solving complex problems using technology. From building 
radiation spectrum analysis systems at India's premier nuclear research 
facility to creating real-time threat intelligence platforms, I thrive 
on challenges that push the boundaries of what's possible.

<span class="success">Specializations:</span>
  • Full-Stack Development (FastAPI, Angular, React, Next.js)
  • Machine Learning & Computer Vision
  • OSINT & Cybersecurity
  • Real-time Systems & Data Processing
`;
        }
    },

    skills: {
        description: 'View my technical skills',
        execute: () => {
            return `
<span class="info">╔════════════════════════════════════════════════════════╗</span>
<span class="info">║</span>  <span class="success">TECH STACK</span>                                          <span class="info">║</span>
<span class="info">╚════════════════════════════════════════════════════════╝</span>

<span class="success">Languages:</span>
  Python      <span class="progress-bar">████████████████████</span> 95%
  C++         <span class="progress-bar">████████████████░░░░</span> 80%
  JavaScript  <span class="progress-bar">█████████████████░░░</span> 85%
  TypeScript  <span class="progress-bar">███████████████░░░░░</span> 75%
  C           <span class="progress-bar">██████████████░░░░░░</span> 70%

<span class="success">Frameworks & Libraries:</span>
  • FastAPI, Angular, React, Next.js, Node.js
  • TensorFlow, PyTorch, OpenCV, scikit-learn
  • Streamlit, Celery, Redis

<span class="success">Databases:</span>
  • PostgreSQL, Neo4j, MongoDB, Redis, Firebase

<span class="success">Tools & Technologies:</span>
  • Docker, Kubernetes, Git, Linux, AWS
  • UART Communication, Real-time Processing
  • Graph Analytics, OSINT Tools

<span class="success">Current Focus:</span>
  OSINT Platform    <span class="progress-bar">████████████████░░░░</span> 80%
  ML Optimization   <span class="progress-bar">████████████░░░░░░░░</span> 60%
  DevOps Skills     <span class="progress-bar">██████████████░░░░░░</span> 70%
`;
        }
    },

    projects: {
        description: 'See my projects',
        execute: () => {
            return `
<span class="info">╔════════════════════════════════════════════════════════╗</span>
<span class="info">║</span>  <span class="success">ACTIVE PROJECTS</span>                                     <span class="info">║</span>
<span class="info">╚════════════════════════════════════════════════════════╝</span>

<span class="success">1. GraphX-OSINT</span> <span class="warning">[In Production]</span>
   Real-time threat intelligence platform with graph-based analysis
   
   <span class="info">Tech:</span> FastAPI • Neo4j • Celery • Next.js
   <span class="info">Features:</span>
   • 10+ OSINT providers integration
   • Risk scoring engine (0-100)
   • Interactive graph workspace
   • Distributed enrichment pipelines
   • PDF report generation

<span class="success">2. URL Phishing Detection</span> <span class="warning">[Deployed]</span>
   Real-time phishing detection using ML & threat intelligence
   
   <span class="info">Tech:</span> Machine Learning • FastAPI • PostgreSQL • Browser Extension
   <span class="info">Features:</span>
   • Multi-source verification (Google Safe Browsing, VirusTotal)
   • Instant risk alerts
   • Browser extension UI

<span class="success">3. ACL-MetaExplorer</span> <span class="warning">[Complete]</span>
   Research analytics tool with graph-based analysis
   
   <span class="info">Tech:</span> Python • Streamlit • SQLite • Neo4j
   <span class="info">Features:</span>
   • TF-IDF text analysis
   • Citation network modeling
   • Interactive visualizations

<span class="success">4. Neuralipnet</span> <span class="warning">[Optimized]</span>
   Real-time lip-reading AI with computer vision
   
   <span class="info">Tech:</span> TensorFlow • OpenCV • Deep Learning
   <span class="info">Performance:</span> 75% accuracy, real-time processing

<span class="success">5. YOLOv5 Detection</span> <span class="warning">[Open Source]</span>
   High-accuracy object detection system
   
   <span class="info">Tech:</span> PyTorch • YOLOv5 • Computer Vision
   <span class="info">Performance:</span> 92.4% accuracy, 30% faster inference

<span class="info">GitHub:</span> <a href="https://github.com/htrap1211" target="_blank">github.com/htrap1211</a>
`;
        }
    },

    experience: {
        description: 'View work experience',
        execute: () => {
            return `
<span class="info">╔════════════════════════════════════════════════════════╗</span>
<span class="info">║</span>  <span class="success">WORK EXPERIENCE</span>                                     <span class="info">║</span>
<span class="info">╚════════════════════════════════════════════════════════╝</span>

<span class="success">Software Engineering Intern</span>
<span class="info">Bhabha Atomic Research Centre (BARC)</span>
Mumbai, India | July 2023 - January 2024

<span class="warning">Project:</span> Radiation Spectrum Analysis System

<span class="success">Key Achievements:</span>
  ↑ 20% processing speed improvement
  ↓ 25% load time reduction  
  ↓ 40% response time optimization
  ↑ 35% data retrieval speed boost
  • Built end-to-end radiation spectrum analysis system
  • Processed 50K+ data points per hour
  • Implemented UART communication for hardware integration
  • Developed async processing pipelines with FastAPI
  • Built Angular frontend with lazy loading optimization
  • Integrated Redis caching for performance

<span class="success">Tech Stack:</span>
  Python • FastAPI • PostgreSQL • Angular • Redis • UART

<span class="info">Impact:</span>
  System used by researchers at India's premier nuclear research
  facility for analyzing radiation spectra and nuclear materials.
`;
        }
    },

    education: {
        description: 'Academic background',
        execute: () => {
            return `
<span class="info">╔════════════════════════════════════════════════════════╗</span>
<span class="info">║</span>  <span class="success">EDUCATION</span>                                           <span class="info">║</span>
<span class="info">╚════════════════════════════════════════════════════════╝</span>

<span class="success">Master of Science - Computer Science</span>
University of Stuttgart, Germany
<span class="info">Current</span>

<span class="success">Bachelor of Technology - Computer Engineering</span>
SRM University, India
<span class="info">Graduated</span>

<span class="success">Focus Areas:</span>
  • Machine Learning & AI
  • Distributed Systems
  • Cybersecurity & OSINT
  • Full-Stack Development
  • Computer Vision
`;
        }
    },

    contact: {
        description: 'Get in touch',
        execute: () => {
            return `
<span class="info">╔════════════════════════════════════════════════════════╗</span>
<span class="info">║</span>  <span class="success">CONTACT INFORMATION</span>                                <span class="info">║</span>
<span class="info">╚════════════════════════════════════════════════════════╝</span>

<span class="success">Email:</span>      <a href="mailto:htrap1211@icloud.com">htrap1211@icloud.com</a>
<span class="success">Location:</span>   Stuttgart, Germany
<span class="success">Portfolio:</span>  <a href="https://htrap1211.vercel.app" target="_blank">htrap1211.vercel.app</a>

<span class="info">Preferred contact method: Email</span>
<span class="info">Response time: Usually within 24 hours</span>

Type '<span class="success">social</span>' to see my social media profiles.
`;
        }
    },

    social: {
        description: 'Social media links',
        execute: () => {
            return `
<span class="info">╔════════════════════════════════════════════════════════╗</span>
<span class="info">║</span>  <span class="success">SOCIAL LINKS</span>                                        <span class="info">║</span>
<span class="info">╚════════════════════════════════════════════════════════╝</span>

<span class="success">GitHub:</span>     <a href="https://github.com/htrap1211" target="_blank">github.com/htrap1211</a>
<span class="success">LinkedIn:</span>   <a href="https://linkedin.com/in/htrap1211" target="_blank">linkedin.com/in/htrap1211</a>
<span class="success">Twitter/X:</span>  <a href="https://twitter.com/htrap1211" target="_blank">twitter.com/htrap1211</a>
<span class="success">Portfolio:</span>  <a href="https://htrap1211.vercel.app" target="_blank">htrap1211.vercel.app</a>

<span class="info">Feel free to connect on any platform!</span>
`;
        }
    },

    resume: {
        description: 'Download resume',
        execute: () => {
            return `
<span class="info">╔════════════════════════════════════════════════════════╗</span>
<span class="info">║</span>  <span class="success">RESUME</span>                                              <span class="info">║</span>
<span class="info">╚════════════════════════════════════════════════════════╝</span>

<span class="warning">⚠ Resume download feature coming soon!</span>

For now, you can:
  • View my <a href="https://linkedin.com/in/htrap1211" target="_blank">LinkedIn profile</a>
  • Check out my <a href="https://github.com/htrap1211" target="_blank">GitHub</a>
  • Visit my <a href="https://htrap1211.vercel.app" target="_blank">portfolio</a>
  • Contact me via <a href="mailto:htrap1211@icloud.com">email</a>
`;
        }
    },

    clear: {
        description: 'Clear terminal',
        execute: () => {
            output.innerHTML = '';
            return null;
        }
    },

    matrix: {
        description: 'Enter the matrix',
        execute: () => {
            matrixEffect();
            return `<span class="success">Entering the matrix...</span>`;
        }
    },

    hack: {
        description: 'Initiate hack sequence',
        execute: () => {
            hackSequence();
            return null;
        }
    }
};

function printOutput(text, className = '') {
    const line = document.createElement('div');
    line.className = `output-line ${className}`;
    line.innerHTML = text;
    output.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
}

function typeWriter(text, className = '', speed = 20) {
    return new Promise((resolve) => {
        const line = document.createElement('div');
        line.className = `output-line ${className}`;
        output.appendChild(line);
        
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                line.innerHTML += text.charAt(i);
                i++;
                terminal.scrollTop = terminal.scrollHeight;
            } else {
                clearInterval(interval);
                resolve();
            }
        }, speed);
    });
}

async function hackSequence() {
    input.disabled = true;
    
    await typeWriter('<span class="warning">[!] Initiating hack sequence...</span>');
    await new Promise(r => setTimeout(r, 500));
    await typeWriter('<span class="info">[*] Scanning network...</span>');
    await new Promise(r => setTimeout(r, 800));
    await typeWriter('<span class="success">[+] Target acquired: 192.168.1.1</span>');
    await new Promise(r => setTimeout(r, 600));
    await typeWriter('<span class="info">[*] Bypassing firewall...</span>');
    await new Promise(r => setTimeout(r, 1000));
    await typeWriter('<span class="success">[+] Firewall bypassed</span>');
    await new Promise(r => setTimeout(r, 700));
    await typeWriter('<span class="info">[*] Cracking encryption...</span>');
    await new Promise(r => setTimeout(r, 1200));
    await typeWriter('<span class="success">[+] Encryption cracked</span>');
    await new Promise(r => setTimeout(r, 500));
    await typeWriter('<span class="info">[*] Downloading data...</span>');
    
    // Progress bar animation
    const progressLine = document.createElement('div');
    progressLine.className = 'output-line';
    output.appendChild(progressLine);
    
    for (let i = 0; i <= 100; i += 5) {
        const bar = '█'.repeat(i / 5) + '░'.repeat(20 - i / 5);
        progressLine.innerHTML = `<span class="success">[${bar}] ${i}%</span>`;
        terminal.scrollTop = terminal.scrollHeight;
        await new Promise(r => setTimeout(r, 100));
    }
    
    await new Promise(r => setTimeout(r, 500));
    await typeWriter('<span class="success">[+] Download complete</span>');
    await new Promise(r => setTimeout(r, 500));
    await typeWriter('<span class="success">[+] Access granted to htrap\'s portfolio</span>');
    await typeWriter('<span class="info">[*] Just kidding! This is just for fun 😄</span>');
    
    input.disabled = false;
    input.focus();
}

function matrixEffect() {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    let matrixInterval;
    let duration = 5000;
    
    input.disabled = true;
    
    matrixInterval = setInterval(() => {
        let line = '';
        for (let i = 0; i < 80; i++) {
            line += chars[Math.floor(Math.random() * chars.length)];
        }
        printOutput(`<span class="success">${line}</span>`);
    }, 50);
    
    setTimeout(() => {
        clearInterval(matrixInterval);
        printOutput('<span class="info">Welcome back to reality.</span>');
        input.disabled = false;
        input.focus();
    }, duration);
}

function processCommand(cmd) {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    printOutput(`<span class="prompt">guest@htrap:~$</span> <span class="command">${cmd}</span>`);
    
    if (trimmedCmd === '') {
        return;
    }
    
    commandHistory.unshift(cmd);
    historyIndex = -1;
    
    if (commands[trimmedCmd]) {
        const result = commands[trimmedCmd].execute();
        if (result) {
            printOutput(result);
        }
    } else {
        printOutput(`<span class="error">Command not found: ${cmd}</span>`);
        printOutput(`Type '<span class="success">help</span>' to see available commands.`);
    }
}

// Welcome message
window.addEventListener('load', () => {
    printOutput(`<span class="ascii-art">${ASCII_LOGO}</span>`);
    printOutput('<span class="success">Welcome to htrap\'s Interactive Terminal Portfolio</span>');
    printOutput('<span class="info">═══════════════════════════════════════════════════════</span>');
    printOutput('');
    printOutput('Type <span class="success">help</span> to see available commands.');
    printOutput('Type <span class="success">about</span> to learn more about me.');
    printOutput('');
    input.focus();
});

// Input handling
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value;
        processCommand(cmd);
        input.value = '';
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            input.value = commandHistory[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            input.value = commandHistory[historyIndex];
        } else {
            historyIndex = -1;
            input.value = '';
        }
    } else if (e.key === 'Tab') {
        e.preventDefault();
        const partial = input.value.toLowerCase();
        const matches = Object.keys(commands).filter(cmd => cmd.startsWith(partial));
        if (matches.length === 1) {
            input.value = matches[0];
        }
    }
});

// Keep focus on input
terminal.addEventListener('click', () => {
    input.focus();
});
