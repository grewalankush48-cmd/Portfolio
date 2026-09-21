import { SkillItem, ProjectItem, EducationMilestone, SocialLink } from '../types';

export const personalInfo = {
  name: 'ANKUSH',
  lastName: 'GREWAL',
  fullName: 'Ankush Grewal',
  tagline: 'Cybersecurity Analyst & Systems Developer',
  headlineCategory: 'CYBERSECURITY & APPLICATION DEFENSE',
  availability: 'AVAILABLE FOR SECURITY ROLES & COLLABORATIONS',
  bio: 'I build security-focused applications, analyze vulnerability vectors, and explore offensive & defensive cybersecurity, ethical hacking, and hardened network architectures.',
  longBio: [
    'I am a cybersecurity researcher and software developer passionate about ethical hacking, defensive security engineering, secure software architecture, and Linux system internals.',
    'I build practical security tools that automate vulnerability discovery, analyze malware heuristics, and protect cloud and web environments against sophisticated attack surfaces.',
    'My active continuous learning focuses on penetration testing methodologies, Python automation, network anomaly detection, and Kali Linux forensics environments.'
  ],
  focus: 'PENETRATION TESTING & SECURITY AUDITS',
  interest: 'OFFENSIVE SECURITY & DEFENSIVE DEVSECOPS',
  location: 'INDIA / HARYANA',
  experienceLevel: 'SECURITY SPECIALIST & DEVELOPER',
  email: 'grewalankush48@gmail.com',
  githubUser: 'grewalankush48-cmd',
  githubUrl: 'https://github.com/grewalankush48-cmd',
  linkedinUrl: 'https://www.linkedin.com/in/ankush-grewal',
  terminalUser: 'ankush@security-lab',
};

export const skillsData: SkillItem[] = [
  {
    number: '01',
    title: 'Cybersecurity & Auditing',
    category: 'Security',
    description: 'Threat modeling, vulnerability scanning, SIEM analysis, and security posture assessment.',
    tools: ['OWASP Top 10', 'NIST Framework', 'Vulnerability Assessment', 'CVSS Scoring'],
    level: 92,
  },
  {
    number: '02',
    title: 'Python & Automation',
    category: 'Programming',
    description: 'Custom security tooling, network sniffers, exploit auditing scripts, and data parsing.',
    tools: ['Python 3', 'Scapy', 'Requests', 'BeautifulSoup', 'AsyncIO'],
    level: 90,
  },
  {
    number: '03',
    title: 'Ethical Hacking & Pentesting',
    category: 'Offensive',
    description: 'Web application testing, privilege escalation, fuzzing, and reconnaissance methodology.',
    tools: ['Burp Suite Pro', 'Nmap', 'Metasploit', 'Gobuster', 'Hydra'],
    level: 88,
  },
  {
    number: '04',
    title: 'Kali Linux & Systems',
    category: 'Systems',
    description: 'Unix environment hardening, shell scripting, permission models, and process analysis.',
    tools: ['Kali Linux', 'Bash Scripting', 'Systemd Hardening', 'IPTables/UFW'],
    level: 94,
  },
  {
    number: '05',
    title: 'Web Application Security',
    category: 'Web Security',
    description: 'Assessing XSS, SQLi, CSRF, SSRF, broken authorization, and API endpoint vulnerabilities.',
    tools: ['SQLMap', 'JWT Analysis', 'CORS/CSP Audits', 'Header Hardening'],
    level: 89,
  },
  {
    number: '06',
    title: 'Network Analysis & Forensics',
    category: 'Networking',
    description: 'Packet capture inspection, traffic anomaly detection, ARP/DNS spoof detection.',
    tools: ['Wireshark', 'TCPDump', 'TShark', 'Snort / Zeek basics'],
    level: 85,
  },
  {
    number: '07',
    title: 'Full-Stack Development',
    category: 'Development',
    description: 'Modern secure web engineering with TypeScript, React, Node.js, and RESTful APIs.',
    tools: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express'],
    level: 86,
  },
  {
    number: '08',
    title: 'DevSecOps & Cloud Security',
    category: 'Cloud',
    description: 'Container security scanning, least-privilege policies, secret management, and CI/CD security.',
    tools: ['Docker', 'Trivy', 'Git Secrets', 'Linux cgroups'],
    level: 82,
  },
];

export const projectsData: ProjectItem[] = [
  {
    number: '01',
    category: 'VULNERABILITY AUDITING',
    title: 'Web Vulnerability Scanner & Header Auditor',
    description:
      'A multi-threaded security assessment tool that performs automated discovery on target web applications, verifying TLS/SSL posture, HTTP security headers, CORS misconfigurations, and common injection patterns.',
    architectureNotes:
      'Engineered in Python with asynchronous socket checks, regex header heuristics, and comprehensive HTML reporting for vulnerability triage.',
    tags: ['Python', 'Flask', 'Web Security', 'OWASP', 'AsyncIO'],
    link: 'https://github.com/grewalankush48-cmd/Portfolio',
    liveDemo: '#terminal',
    featured: true,
  },
  {
    number: '02',
    category: 'THREAT INTELLIGENCE',
    title: 'CyberPulse Intel Dashboard',
    description:
      'A real-time cybersecurity threat dashboard that aggregates zero-day announcements, CVE updates, and security advisory bulletins across global security feeds.',
    architectureNotes:
      'Built with Next.js/React and automated RSS parsers, providing instant keyword alerts and severity classification.',
    tags: ['React', 'TypeScript', 'Threat Intel', 'RSS', 'Tailwind'],
    link: 'https://github.com/grewalankush48-cmd/Portfolio',
    liveDemo: '#terminal',
    featured: true,
  },
  {
    number: '03',
    category: 'NETWORK DEFENSE',
    title: 'NetSentry Packet & Intrusion Monitor',
    description:
      'Lightweight passive network analysis tool that sniffs local traffic to flag anomalous ARP requests, unsanctioned port sweeps, and high-frequency SYN floods.',
    architectureNotes:
      'Built with Scapy and raw sockets, generating timestamped alerts and exporting PCAP files for forensic deep-dives.',
    tags: ['Python', 'Scapy', 'Packet Inspection', 'Kali Linux'],
    link: 'https://github.com/grewalankush48-cmd/Portfolio',
    liveDemo: '#terminal',
    featured: true,
  },
  {
    number: '04',
    category: 'CRYPTOGRAPHY',
    title: 'Zero-Knowledge Credential Vault',
    description:
      'Client-side encrypted secrets manager utilizing AES-256-GCM authenticated cipher with PBKDF2 key derivation and secure memory clearing to prevent credential exfiltration.',
    architectureNotes:
      'Features local cryptographic envelope encryption without sending private master passwords across network boundaries.',
    tags: ['TypeScript', 'WebCrypto API', 'AES-256', 'Security'],
    link: 'https://github.com/grewalankush48-cmd/Portfolio',
    liveDemo: '#terminal',
  },
  {
    number: '05',
    category: 'RECONNAISSANCE',
    title: 'PortScan & Service Fingerprinter',
    description:
      'High-speed concurrent TCP SYN/Connect scanner with banner-grabbing capabilities to reliably fingerprint running services and identify outdated daemons.',
    architectureNotes:
      'Thread-pooled network scanner with adaptive timeout heuristics for evasion and resilience.',
    tags: ['Python', 'Sockets', 'Network Recon', 'Fingerprinting'],
    link: 'https://github.com/grewalankush48-cmd/Portfolio',
    liveDemo: '#terminal',
  },
  {
    number: '06',
    category: 'DEFENSIVE HEURISTICS',
    title: 'PhishGuard Email & Domain Verifier',
    description:
      'Heuristic threat detection engine inspecting email headers, SPF/DKIM/DMARC authentication records, and homograph domain impersonation tricks.',
    architectureNotes:
      'Computes risk confidence scores by aggregating DNS queries, whois domain age, and lexical redirection anomalies.',
    tags: ['Python', 'DNSsec', 'Phishing Defense', 'Email Security'],
    link: 'https://github.com/grewalankush48-cmd/Portfolio',
    liveDemo: '#terminal',
  },
];

export const educationData: EducationMilestone[] = [
  {
    number: '01',
    title: 'Cybersecurity & Ethical Hacking Track',
    institution: 'Offensive Security & TryHackMe Top Rankings',
    period: '2024 - Present',
    description:
      'Comprehensive hands-on labs covering network reconnaissance, Active Directory exploitation, Linux privilege escalation, and web app penetration testing.',
    status: 'Active',
  },
  {
    number: '02',
    title: 'Computer Science & Software Systems',
    institution: 'University Technical Education',
    period: '2022 - 2026',
    description:
      'Specialized curriculum in computer networking, operating systems internals, data structures, algorithms, and secure programming architectures.',
    status: 'In Progress',
  },
  {
    number: '03',
    title: 'PortSwigger Web Security Academy',
    institution: 'PortSwigger / Burp Suite Community',
    period: '2024 - Present',
    description:
      'Intensive practical completion of labs covering SQL Injection, Cross-Site Scripting (XSS), Server-Side Request Forgery (SSRF), and OAuth authentication flaws.',
    status: 'Active',
  },
  {
    number: '04',
    title: 'Linux Systems & Network Administration',
    institution: 'Self-Directed & Community Labs',
    period: '2023 - Present',
    description:
      'System hardening, shell scripting automation, firewall configuration (iptables/ufw), and Kali Linux utility mastery.',
    status: 'Completed',
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'GITHUB',
    name: 'github.com/grewalankush48-cmd',
    url: 'https://github.com/grewalankush48-cmd',
    iconName: 'Github',
  },
  {
    label: 'EMAIL',
    name: 'grewalankush48@gmail.com',
    url: 'mailto:grewalankush48@gmail.com',
    iconName: 'Mail',
  },
  {
    label: 'LINKEDIN',
    name: 'linkedin.com/in/ankush-grewal',
    url: 'https://www.linkedin.com/in/ankush-grewal',
    iconName: 'Linkedin',
  },
];
