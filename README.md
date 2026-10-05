# Nguyen Khac Thanh — Personal Portfolio Website

A premium, modern, highly polished personal portfolio website designed for **Nguyen Khac Thanh**, a final-year International Business Economics student at Foreign Trade University in Vietnam and an ACCA candidate.

---

## 🏛️ Design Concept & Philosophy

- **Aesthetic**: McKinsey / BCG / Big 4 consulting and high-finance professional profile.
- **Palette**: Deep executive navy (`#0A1128`), refined slate (`#0F172A`), off-white canvas (`#F8FAFC`), crisp white cards (`#FFFFFF`), and deliberate accents in consulting royal blue (`#1E40AF`) and financial teal/emerald (`#0D9488`).
- **Typography**: Editorial hierarchy utilizing **Plus Jakarta Sans** for headlines and interface text, paired with **JetBrains Mono** for data points, grades, paper codes, and metrics.
- **Micro-Interactions**: Smooth scrollspy header, IntersectionObserver reveal animations, animated statistical counters, interactive ACCA roadmap, and instant copy-to-clipboard functionality with feedback toast.
- **Content Integrity**: 100% strict adherence to verified information — zero fabricated statistics, no fake percentage bars, and full transparency on exam status (e.g. Audit & Assurance clearly labeled as *Waiting for mark*).

---

## 📂 Project Structure

```
portfolio/
├── index.html            # Semantic HTML5 document with complete SEO metadata
├── css/
│   └── styles.css        # Modular CSS with design tokens & responsive breakpoints
├── js/
│   └── main.js           # Lightweight vanilla ES6+ script (ScrollSpy, counters, toast)
└── assets/               # Scalable vector assets & icons
```

---

## 🚀 How to View & Run

### 1. Direct Browser Opening
Simply double-click `portfolio/index.html` (or open it via Safari, Chrome, Edge, Firefox). The entire website is standalone and requires zero build steps or external bundlers.

### 2. Local Python Server (Recommended for local dev)
In your terminal, navigate to the folder and run:
```bash
python3 -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) or [http://localhost:8000/portfolio/](http://localhost:8000/portfolio/).

### 3. Deployment to Production
This website is 100% static, fast-loading, and SEO-optimized:
- **GitHub Pages**: Push this repository and set GitHub Pages source to `/` or `/portfolio`.
- **Vercel / Netlify**: Connect repository and set publish directory to `portfolio`.

---

## 📋 Sections Included

1. **Header & Navigation**: Sticky frosted glass navbar with active section indicator and "Let's Connect" CTA.
2. **Hero Section**: 
   - Status badge: *"Open to Professional Opportunities"*
   - Headline: `NGUYEN KHAC THANH`
   - Supporting tagline: `International Business Economics Student | ACCA Candidate | Aspiring Tax & Business Consultant`
   - Executive profile card with FTU branding, ACCA candidate badge, and floating micro-metric chips (GPA 3.48/4.00, IELTS 7.0, ACCA Progress, Analytical Thinking).
3. **About Me**:
   - Executive profile statement
   - 3 Pillars: *Analytical*, *Detail-Oriented*, *Growth-Oriented*
   - Visual trajectory: `Economics → Accounting → ACCA → Tax & Consulting`
4. **Professional Experience**:
   - Vertical interactive timeline
   - **Finance and Business Support Intern** at **InterContinental Hanoi Landmark72** (July 2026 – Present)
   - Operational cards: Procurement Reconciliation, Internal Control, and Inventory Control.
5. **Education & Professional Qualification**:
   - **Foreign Trade University**: GPA 3.48/4.00 (8.36/10.00), Coursework in Managerial Accounting (9.3), Investment Economics (9.1), Risk Management (9.0), Research Methodology (8.9), Business Ethics (8.7).
   - **ACCA Qualification**: BT (Exempt), MA (82), FA (83), FR (56), AA (*Waiting for mark*), TX (*In progress, exam Dec 2026*).
   - **High School for Gifted Students, HNUE**: Chemistry Major, Top 15 Entrance Scholarship, GPA 9.6/10.
6. **Leadership & Community**:
   - **Head of External Relations** at **IBE FTU Student Community** (Nov 2023 – June 2025)
   - Prominent metrics: 10 Team Members Led, +50% Network Expansion, 50+ Event Participants.
7. **Skills & Tools Matrix**: Categorized across Languages, Data & Technology, Business & Productivity, and Interpersonal skills.
8. **Where I'm Heading (Career Focus)**: Strategic roadmap culminating in **Tax Consulting** and ACCA membership.
9. **Selected Highlights Dashboard**: Viewport-triggered animated counters for all verified CV metrics.
10. **Contact & Footer**: Direct email, telephone, and LinkedIn connection channels with quick-copy interactions.
